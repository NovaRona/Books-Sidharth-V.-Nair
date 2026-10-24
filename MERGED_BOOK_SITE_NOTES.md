# Merged book website notes

## Flow
1. Visitors open the author homepage.
2. Clicking a book card opens its description and reviews panel.
3. **Read Now** opens the existing `My-Text-Editor/viewer.html` reader with the selected book. This is part of the same website/project, not a separate UI or separate site.
4. **Buy Now** opens the purchase URL configured in the homepage's `bookDetails` object.

## Purchase links
- `hidden-power` currently uses the Amazon URL already present in the original homepage.
- `brothers-sisters` has no purchase URL supplied yet. Its Buy Now button is intentionally disabled until the author adds the assigned URL in `Books-Sidharth-V.-Nair/index.html` under `bookDetails["brothers-sisters"].buy`.

## Reviews
Reviews are currently stored with browser `localStorage` on the visitor's own browser/device. They are not shared with other visitors and are not authenticated or moderated. Do not describe them as public/shared reviews until a backend database and moderation controls are implemented. No fabricated reviews are included.

## Manuscripts
The reader still contains placeholder manuscript text in the supplied project. This ZIP does not invent or replace the actual manuscripts.

## Site icon and review behavior
The homepage now uses `Books-Sidharth-V.-Nair/assets/book-icon.svg` as its tab/favicon icon. Reviews are handled defensively: they save in local browser storage where available, and remain visible for the current session if storage is blocked. They are still not shared across visitors; a backend is required for public reviews.
