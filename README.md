# Book reviews backend (Cloudflare Workers + D1)

This backend is designed for the existing `Books-Sidharth-V.-Nair/index.html` review form. It is **not deployed yet**. Until deployment and frontend configuration are complete, the website keeps reviews in the current browser only.

## Safety notes
- Never put Cloudflare API tokens, passwords, or account secrets in the website files.
- Set `ALLOWED_ORIGIN` to the exact deployed website origin (no trailing slash).
- Only the two known book IDs are accepted. Review text, name, and rating are validated server-side.
- Public review submission can still attract spam. Before announcing the site, add a rate limit or Turnstile verification and decide how to moderate/remove abuse. CORS is not authentication and does not itself stop scripts/curl.
- This starter has no public delete endpoint and does not expose D1 credentials. Manage abusive entries through a trusted owner workflow/Cloudflare dashboard.

## Setup (Cloudflare dashboard/CLI)
1. Create a Cloudflare account with help from a parent/guardian if needed. Do not add a payment method just to use the free tier.
2. Install Node.js and Wrangler on your computer, then from this folder run `npx wrangler login`.
3. Create the D1 database: `npx wrangler d1 create books-reviews`. Copy the returned database ID into `wrangler.toml`.
4. Apply the schema remotely: `npx wrangler d1 migrations apply books-reviews --remote`.
5. Set `ALLOWED_ORIGIN` in `wrangler.toml` to the exact final site origin. For local development, use a separate local origin setting; don't deploy a placeholder value.
6. Deploy: `npx wrangler deploy`. Test `https://YOUR-WORKER-URL/api/health` and review GET/POST behavior before connecting the public site.
7. In `Books-Sidharth-V.-Nair/index.html`, add this line **before the main review script** (or in the `<head>`):
   `window.REVIEWS_API_URL = "https://YOUR-WORKER-URL";`
   Replace the example with the actual deployed Worker URL. Keep the URL without a trailing slash.
8. Test both book IDs, invalid ratings, long reviews, and mobile layout. Confirm reviews appear in a second browser/device.

## Local testing
`npx wrangler dev` runs a local Worker. Create/apply a local D1 database as described in Cloudflare's current D1/Wrangler documentation. Do not set the production Worker URL until deployment is verified.

## Free-tier note
Cloudflare publishes current limits at https://developers.cloudflare.com/workers/platform/pricing/ and https://developers.cloudflare.com/d1/platform/pricing/. Limits and terms may change; check before launch.
