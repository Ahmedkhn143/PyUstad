# 🐍 PyUstad

> **Pakistan's #1 Interactive Python Learning & Practice Platform**  
> Learn Python step-by-step, run code directly in the browser, and test your knowledge through real-world challenges!

---

## 🌟 Key Features

* **360 Curated Coding Questions:** Exactly 10 Easy, 10 Medium, and 10 Hard programming challenges for every single topic.
* **12 Essential Python Topics:** 
  1. **Variables** (Data types, type casting, basic operations)
  2. **Strings** (Slicing, formatting, string methods)
  3. **Conditions** (if, elif, else logic)
  4. **Loops** (for, while, break, continue)
  5. **Lists** (List/tuple operations, sorting)
  6. **Dictionaries** (Key-value structures, sets)
  7. **Functions** (def, arguments, scope)
  8. **OOP** (Classes, objects, constructors)
  9. **Inheritance** (OOP polymorphism, super())
  10. **File I/O** (File read/write operations)
  11. **Algorithms** (Problem solving, complexity)
  12. **Errors** (try/except exception handling)
* **WebAssembly Python Interpreter:** Powered by **Pyodide**—run and execute your Python code in real-time right inside your browser without installing anything!
* **Dual-Language Support:** Learn in either **Roman Urdu** or **English** with a single click.
* **Sleek UI/UX:** Stunning dark glassmorphism design with a customized CodeMirror editor.
* **Interactive Quiz Mode:** Test your logic and theory on different chapters.
* **Expert Roadmap:** A complete learning path combining official Python docs and top YouTube resources.
* **Progress Tracking & Streaks:** Automatically saves your daily streaks and solved challenges to browser local storage.

---

## 🛠️ Technology Stack

* **Structure:** Semantic HTML5
* **Styling:** CSS3 (Custom Variables, Transitions, Glassmorphism, Responsive Grid Layout)
* **Logic:** Vanilla JavaScript (ES6+ Asynchronous fetching & JSON parsing)
* **Code Editor:** CodeMirror 5 (with Dracula Theme & custom linenumber gutter layout)
* **Execution Engine:** Pyodide (Python WebAssembly interpreter running entirely client-side)
* **Database:** `questions.json` static JSON database file

---

## 🚀 Getting Started

Since **PyUstad** is a 100% static client-side web application, running it locally is incredibly simple.

### Quick Start (Local Browser)
You can directly open `index.html` in any web browser. However, due to browser CORS policies when fetching the `questions.json` dataset, it is recommended to run it through a local web server:

```bash
# Using Node.js (npx)
npx serve .

# OR using Python built-in server
python -m http.server 3000
```
Open `http://localhost:3000` or the address provided by `serve` in your web browser.

---

## 🌐 GitHub Pages Deployment

PyUstad is perfectly optimized to run on **GitHub Pages** as a static website.

1. Push your repository to GitHub.
2. Go to your repository settings on GitHub.
3. Navigate to **Pages** in the sidebar.
4. Set the build source to **Deploy from a branch** and choose `main` branch `/ (root)`.
5. Save, and your site will be live at `https://<your-username>.github.io/<your-repo-name>/` within 1-2 minutes!

---

## 📂 Project Directory Structure

```text
├── index.html       # Main application interface entry point
├── style.css        # Custom Glassmorphism styles & CodeMirror overrides
├── script.js        # Core logical routing, interpreter integration & progress states
├── questions.json   # 360-question static JSON database
└── README.md        # Project documentation
```

---

## 👤 Developer
Developed with ❤️ by **Ahmad Khan**.
