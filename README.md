<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>📚 Book Finder App</title>
  <link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
    rel="stylesheet"
  />
</head>
<body class="bg-light text-dark p-4">
  <div class="container">
    <h1 class="mb-4">📚 <strong>Book Finder App</strong></h1>

  <h3>👩‍💻 Overview</h3>
  <p>
    The <strong>Book Finder App</strong> helps users (like Alex, a college student 📖)
    search for books by title using the
    <a href="https://openlibrary.org/dev/docs/api/search" target="_blank">Open Library API</a>.
    It’s a lightweight React application styled with <strong>Bootstrap</strong>, designed
    to be fast, responsive, and user-friendly.
  </p>

  <hr />

  <h3>🧠 Tech Stack</h3>
  <ul>
    <li><strong>Framework:</strong> React</li>
    <li><strong>Styling:</strong> Bootstrap 5</li>
    <li>
      <strong>Data Source:</strong>
      <a href="https://openlibrary.org/search.json?title={bookTitle}" target="_blank">
        Open Library API
      </a>
    </li>
    <li><strong>State Management:</strong> React’s built-in <code>useState</code> and <code>useEffect</code></li>
    <li><strong>AI Assistant Used:</strong> ChatGPT (LLM)</li>
  </ul>

  <hr />

  <h3>🎯 Features</h3>
  <ul>
    <li>✅ Search for books by title</li>
    <li>✅ View book cover, author(s), and first publish year</li>
    <li>✅ Shows loading spinner while fetching data</li>
    <li>✅ Displays a red alert box for errors or empty results</li>
    <li>✅ Responsive layout for mobile and desktop</li>
    <li>✅ Clean and simple Bootstrap UI</li>
  </ul>

  <hr />

  <h3>🧩 Folder Structure</h3>
  <pre>
src/
 ├── components/
 │    ├── SearchBar.js     # Input field + Search button
 │    ├── BookList.js      # Renders list of books in grid
 │    └── BookCard.js      # Displays individual book info
 ├── App.js                # Main logic and API call
 ├── index.js              # Entry point (imports Bootstrap)
 ├── App.css               # Basic custom styling
    </pre>

  <hr />

  <h3>⚙️ How It Works</h3>
  <ol>
    <li>User types a title in the search bar and clicks <strong>Search</strong>.</li>
    <li>The app calls the <strong>Open Library Search API</strong> to fetch books.</li>
    <li>The results (up to 24 books) are displayed in a Bootstrap card grid.</li>
    <li>If no results or an error occurs, a user-friendly message appears.</li>
  </ol>

  <hr />

  <h3>🚀 Live Demo</h3>
  <p>
    🔗 <a href="https://9355mc.csb.app/" target="_blank"><strong>View the App on CodeSandbox</strong></a>
    <br />
    <em>CodeSandbox link</em>
  </p>

  <hr />

  <h3>🧪 Run Locally</h3>
  <ol>
    <li>Clone this repository or download the code.</li>
    <li>Install dependencies:</li>
  </ol>
  <pre><code>npm install</code></pre>
  <ol start="3">
    <li>Start the development server:</li>
  </ol>
  <pre><code>npm start</code></pre>
  <ol start="4">
    <li>
      Open
      <a href="http://localhost:3000" target="_blank">http://localhost:3000</a>
      in your browser.
    </li>
  </ol>
  </div>
</body>
</html>
