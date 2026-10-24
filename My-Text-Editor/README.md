# 📚 Book Collection

A lightweight, local web-based book system for creating, collecting, and reading books using JSON files. The project is live on https://novarona.github.io/My-Text-Editor/

The project provides two main interfaces:

- **Editor** — create and edit books.
- **Viewer** — read books in a clean, read-only notebook-style interface.

Books are stored as JSON files and can be organized in the `Collections/` directory.

---

## ✨ Features

- 📖 Notebook-style book reader
- ✏️ Separate book Editor
- 👁️ Read-only Viewer
- 📦 JSON-based book format
- 📚 Collection of multiple books
- 📄 Automatic physical-page splitting for overflowing text
- 📝 Paragraphs and line breaks
- 📅 Optional dates
- 💾 JSON export
- 🔒 Viewer text cannot be directly edited
- 🌐 Designed to be hosted or shared as a web project

---

## 📁 Project Structure

A typical project looks like:

```text
Book Collection/
│
├── index.html
├── editor.html
├── viewer.html
├── README.md
│
└── Collections/
    ├── Instructions.json
    ├── The_Wonderful_Wizard_of_Oz_Viewer_Test.json
    ├── The_Little_Lighthouse_Continuous_Test_Book.json
    └── ...
```

### Main files

| File | Purpose |
|---|---|
| `index.html` | Main page for choosing Editor or Viewer |
| `editor.html` | Create and edit books |
| `viewer.html` | Read books in read-only mode |
| `Instructions.json` | Instructions for creating books in the project's JSON format |
| `Collections/` | Collection of book JSON files |
| `README.md` | Project documentation |

---

# 📖 Book Format

Books use a simple JSON structure.

A basic book looks like:

```json
{
  "version": 1,
  "title": "My Book",
  "pages": [
    "MY BOOK",
    "Chapter One\n\nYour story begins here.",
    "Chapter Two\n\nThe story continues here."
  ],
  "dates": [
    "",
    "",
    ""
  ]
}
```

## Required fields

### `version`

```json
"version": 1
```

Identifies the book format.

### `title`

```json
"title": "My Book"
```

The title of the book.

### `pages`

```json
"pages": [
    "MY BOOK",
    "First part...",
    "Second part..."
]
```

Contains the book's text.

The first item is used as the title/cover page by the Viewer.

### `dates`

```json
"dates": [
    "",
    "2026-08-14",
    "2026-08-15"
]
```

Dates correspond to the items in `pages`.

If dates are not needed, leave them empty:

```json
"dates": [
    "",
    "",
    ""
]
```

---

# 📝 Writing Text

Use `\n` for a line break.

Use `\n\n` for a blank line between paragraphs.

Example:

```json
"Chapter One\n\nThe morning was quiet.\n\nA boat appeared on the horizon."
```

If you need quotation marks inside a JSON string, escape them:

```json
"She said: \"Hello!\""
```

---

# 📄 Automatic Page Splitting

Authors **do not need to calculate how much text fits on a physical book page**.

The Viewer checks the available space automatically.

If a JSON section contains more text than one physical page can hold, the Viewer splits the overflowing text onto another physical page.

For example:

```text
JSON section
    ↓
Physical Page 8
    ↓
Physical Page 9
    ↓
Physical Page 10
```

The text continues from one physical page to the next.

Keep the complete text in your JSON. Do not remove text just to make it fit on the screen.

---

# ✏️ Editor

The Editor is used to create and modify books.

Typical workflow:

```text
Open Editor
    ↓
Create / edit book
    ↓
Export JSON
    ↓
Test the JSON
    ↓
Prepare it for the collection
```

---

# 👁️ Viewer

The Viewer is intended for reading.

It displays books using the project's notebook-style interface.

The displayed book text is read-only and cannot be directly edited.

The Viewer also handles physical page splitting automatically when imported text is too long.

---

# 📚 The `Collections` Directory

The `Collections/` directory contains book JSON files that are part of the project's collection.

Example:

```text
Collections/
├── Instructions.json
├── The_Little_Lighthouse_Continuous_Test_Book.json
└── The_Wonderful_Wizard_of_Oz_Viewer_Test.json
```

Not every book created with the Editor has to be added to the repository.

You can create a private/local book and keep its JSON file outside the repository.

---

# 🤝 Contributing

Contributions are welcome!

You can contribute in several ways:

- 📚 Add an original book to the collection
- 🐛 Report a bug
- 💡 Suggest an improvement
- 💻 Improve the Editor
- 👁️ Improve the Viewer
- 🎨 Improve the interface
- 📖 Improve the documentation

---

## 📚 Contributing a Book

If you want to add a book to the public collection, please make sure:

1. **You wrote the book yourself**, or
2. **You have permission to distribute it**, or
3. **The work is legally available for redistribution**.

Do not add copyrighted books that you do not have permission to distribute.

### Book contribution workflow

```text
Fork the repository
        ↓
Clone your fork
        ↓
Create your book JSON
        ↓
Test it in the Editor
        ↓
Test it in the Viewer
        ↓
Put the JSON in Collections/
        ↓
Commit your changes
        ↓
Push to your fork
        ↓
Open a Pull Request
```

---

# 🔀 Pull Request Rules

Before opening a Pull Request, please check the following.

### For book contributions

- [ ] The book is original, licensed, public domain, or otherwise legally redistributable.
- [ ] The file is a `.json` file.
- [ ] The JSON is valid.
- [ ] `version` is present.
- [ ] `title` is present.
- [ ] `pages` is present.
- [ ] `dates` is present.
- [ ] The first page contains the book title/cover.
- [ ] The complete text is included.
- [ ] The book has been tested in the Editor.
- [ ] The book has been tested in the Viewer.
- [ ] No unnecessary files were added.
- [ ] The filename is clear and appropriate.

### For code contributions

- [ ] The change has been tested.
- [ ] Existing functionality still works.
- [ ] The change is relevant to the project.
- [ ] No unrelated files or changes are included.
- [ ] The Pull Request explains what was changed and why.

---

# 📝 Pull Request Guidelines

When opening a Pull Request, please include:

### What did you change?

Briefly describe the change.

### Why?

Explain why the change is useful.

### Testing

Explain how you tested it.

For example:

```text
Tested the book in editor.html and viewer.html.
Confirmed that long text automatically creates additional physical pages.
```

For a book contribution, also mention the book title and confirm that you have the right to distribute it.

---

# 🚫 Please Do Not

Please do not:

- Upload books you do not have permission to redistribute.
- Upload pirated copies of copyrighted books.
- Modify unrelated files in a book-only Pull Request.
- Add executable code inside book text.
- Submit invalid JSON.
- Intentionally break existing functionality.
- Add huge unnecessary files to the repository.
- Include private or sensitive information in a book contribution.

---

# ⚠️ JSON Rules

JSON is strict.

Remember:

- Use double quotation marks.
- Put commas between items.
- Do not put a comma after the final item.
- Keep `{}` balanced.
- Keep `[]` balanced.
- Use `\n` for line breaks.
- Escape quotation marks inside strings.
- Make sure the file is valid JSON before submitting it.

---

# 📌 Complete Book Example

```json
{
  "version": 1,
  "title": "The Little Lighthouse",
  "pages": [
    "THE LITTLE LIGHTHOUSE",
    "Chapter One\n\nThe lighthouse stood quietly beside the sea.",
    "Chapter Two\n\nA storm came across the water.",
    "Chapter Three\n\nBy morning, the sea was calm again."
  ],
  "dates": [
    "",
    "",
    "",
    ""
  ]
}
```

Save it as:

```text
The_Little_Lighthouse.json
```

Test it in the Editor and Viewer, then add it to `collections/` in your contribution branch if you want to propose it for the public collection.

---

# 🧪 Testing Before a Pull Request

Before submitting changes, test the relevant parts of the project.

For a book:

1. Import it into the Editor.
2. Confirm that it is accepted.
3. Check the title.
4. Check every section.
5. Turn through the pages.
6. Make sure no text is missing.
7. Test long text and automatic page splitting.
8. Open it in the Viewer.
9. Confirm that the text is readable and cannot be edited.

For code:

1. Open the affected interface.
2. Test the changed functionality.
3. Test related existing functionality.
4. Check the browser console for errors.
5. Make sure unrelated features still work.

---

# 🎯 Project Goal

The goal of this project is to create a simple, accessible place where people can:

**Create → Test → Contribute → Collect → Read**

books through a lightweight web interface.

Contributions that improve the project or add great, legally shareable books are welcome.

**Happy writing and happy coding! 📚💻**


Made by Human(s), Made by Sidharth


## Continuous-text reader format

The updated `viewer.html` accepts new JSON books with a single `content` string, as shown in `books/README.md`. The existing editor and its page-based export remain available for backwards compatibility; the reader also imports those legacy `pages` JSON files. To author a continuous-text book right now, edit one of the example `.json` files in a text editor and import it into the viewer.


### Writing new continuous-text books

Open `continuous-editor.html` (also linked as **Book Writer** from `index.html`) to write a title and continuous text, import JSON, download the new format, or preview the draft in the reader. The original page-based editor is kept for legacy projects.


## My Library home screen
The home screen displays two book-cover tiles: **Brothers, Sisters** and **The Hidden Power Of Discipline**. The cover art is included locally under `assets/`, so it also works offline. The supplied ZIPs did not include either full manuscript; the reader says so and lets you import the real JSON rather than showing invented book content. The Legacy Editor and Book Writer remain available under Writing tools.
