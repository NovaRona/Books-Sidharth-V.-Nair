CREATE TABLE IF NOT EXISTS reviews (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  book_id TEXT NOT NULL CHECK (book_id IN ('hidden-power', 'brothers-sisters')),
  display_name TEXT NOT NULL DEFAULT 'Reader' CHECK (length(display_name) <= 50),
  rating INTEGER NOT NULL CHECK (rating BETWEEN 1 AND 5),
  review_text TEXT NOT NULL CHECK (length(review_text) BETWEEN 3 AND 1200),
  created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ', 'now'))
);
CREATE INDEX IF NOT EXISTS idx_reviews_book_created ON reviews(book_id, id DESC);
