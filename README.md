# Books and My Library

This package combines the existing book website with the text editor and reader.

## Folders
- `Books-Sidharth-V.-Nair/` — the original book website.
- `My-Text-Editor/` — editor, reader, reward-page placeholder, and sample JSON books.

## Read a continuous-text book
1. Open `My-Text-Editor/viewer.html` in a modern browser.
2. Click **Import** and choose a JSON file from `My-Text-Editor/books/`.
3. Use the arrows or keyboard arrow keys to turn pages. Use **A− / A+** to adjust text size.

New JSON books use a single `content` string and automatic pagination. See `My-Text-Editor/books/README.md` for the format and special markers. Existing JSON books with a `pages` array remain supported.

The included JSON files are placeholders for testing; they do not contain unpublished manuscripts. The reward page is a setup placeholder and does not claim that an ad provider is configured.


## Level 2 — main website upgrade
The author homepage has a responsive layout, improved book cards, cover artwork from the existing local assets, and multiple links to the Reading Library at `My-Text-Editor/index.html`. The book JSON files remain placeholders; this update does not publish or invent manuscript text, and no ad provider is connected.
