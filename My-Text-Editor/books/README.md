# Example JSON books

These files are editable examples, not your actual manuscripts. The new format stores the book as one continuous `content` string:

```json
{
  "version": 2,
  "title": "My Book",
  "content": "# Chapter 1\n\nYour text here.\n\nA second paragraph."
}
```

- `# Heading` creates a chapter/section heading.
- A single newline creates a line break.
- A blank line separates paragraphs. Excessive consecutive blank lines are capped.
- `[[PAGE_BREAK]]` forces a new page.
- `[[BLANK_PAGE]]` inserts a deliberately blank page.
- Open `viewer.html` and choose **Import** to read a JSON file.

Older JSON files using a `pages` array are also accepted. The legacy first page is treated as the old cover/title page, and text starts at `pages[1]`.
