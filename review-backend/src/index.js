const ALLOWED_BOOKS = new Set(["hidden-power", "brothers-sisters"]);
const json = (data, status = 200, origin = "null") => new Response(JSON.stringify(data), {
  status, headers: { "Content-Type": "application/json; charset=utf-8", "Cache-Control": "no-store", "Access-Control-Allow-Origin": origin, "Vary": "Origin", "Access-Control-Allow-Methods": "GET, POST, OPTIONS", "Access-Control-Allow-Headers": "Content-Type" }
});
function safeOrigin(request, env) {
  const origin = request.headers.get("Origin") || "";
  return origin && origin === env.ALLOWED_ORIGIN ? origin : "null";
}
export default {
  async fetch(request, env) {
    const origin = safeOrigin(request, env);
    if (request.method === "OPTIONS") {
      if (origin === "null") return new Response(null, { status: 403 });
      return new Response(null, { status: 204, headers: { "Access-Control-Allow-Origin": origin, "Access-Control-Allow-Methods": "GET, POST, OPTIONS", "Access-Control-Allow-Headers": "Content-Type", "Access-Control-Max-Age": "86400", "Vary": "Origin" } });
    }
    const url = new URL(request.url);
    if (url.pathname === "/api/health" && request.method === "GET") return json({ ok: true }, 200, origin);
    if (url.pathname === "/api/reviews" && request.method === "GET") {
      const bookId = url.searchParams.get("bookId");
      if (!ALLOWED_BOOKS.has(bookId)) return json({ error: "Invalid bookId." }, 400, origin);
      try {
        const { results } = await env.DB.prepare("SELECT id, book_id AS bookId, display_name AS name, rating, review_text AS text, created_at AS createdAt FROM reviews WHERE book_id = ? ORDER BY id DESC LIMIT 100").bind(bookId).all();
        return json({ reviews: results }, 200, origin);
      } catch (_) { return json({ error: "Reviews are temporarily unavailable." }, 500, origin); }
    }
    if (url.pathname === "/api/reviews" && request.method === "POST") {
      if (origin === "null") return json({ error: "Request origin is not allowed." }, 403, "null");
      const contentType = request.headers.get("Content-Type") || "";
      if (!contentType.toLowerCase().includes("application/json")) return json({ error: "Send review as JSON." }, 415, origin);
      let body;
      try { body = await request.json(); } catch (_) { return json({ error: "Invalid JSON." }, 400, origin); }
      const bookId = typeof body.bookId === "string" ? body.bookId : "";
      const name = typeof body.name === "string" ? body.name.trim().slice(0, 50) : "";
      const text = typeof body.text === "string" ? body.text.trim() : "";
      const rating = Number(body.rating);
      if (!ALLOWED_BOOKS.has(bookId)) return json({ error: "Invalid book selection." }, 400, origin);
      if (text.length < 3 || text.length > 1200) return json({ error: "Review must be between 3 and 1200 characters." }, 400, origin);
      if (!Number.isInteger(rating) || rating < 1 || rating > 5) return json({ error: "Rating must be from 1 to 5." }, 400, origin);
      try {
        const result = await env.DB.prepare("INSERT INTO reviews (book_id, display_name, rating, review_text) VALUES (?, ?, ?, ?)").bind(bookId, name || "Reader", rating, text).run();
        const row = await env.DB.prepare("SELECT id, book_id AS bookId, display_name AS name, rating, review_text AS text, created_at AS createdAt FROM reviews WHERE id = ?").bind(result.meta.last_row_id).first();
        return json({ review: row }, 201, origin);
      } catch (_) { return json({ error: "Could not save the review. Please try again later." }, 500, origin); }
    }
    return json({ error: "Not found." }, 404, origin);
  }
};
