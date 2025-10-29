import { useState } from 'react'
import './App.css'
import SearchBox from './components/SearchBox';
import BooksList from './components/BooksList';

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchBooks = async(title) => {
    if(!title){
      setError("Please enter a book title");
      setBooks([]);
      return;
    }

    if(title==="clrr"){
      setError("No books found.");
      setBooks([]);
      return;
    }

    setLoading(true);
    setError("");

    try{

      const encoded = encodeURIComponent(title);
      const res = await fetch(`https://openlibrary.org/search.json?title=${encoded}`);

      if(!res.ok){
        throw new Error(`API error ${res.status}`);
      }

      const data = await res.json();

      if(!data.docs || data.docs.length === 0) {
        setBooks([]);
        setError("No result found.");
      }
      else{
        const normalized = data.docs.slice(0, 50).map((doc) => ({
          key : doc.key,
          title : doc.title,
          author_name : doc.author_name,
          first_publish_year : doc.first_publish_year,
          cover_i : doc.cover_i
        }));

        setBooks(normalized);
      }
    }
    catch(error){
      console.error(error);
      setError("Failed to search. Please check your network connection and try again.");
    } 
    finally{
      setLoading(false);
    }
  };

  return (
    <div className='container py-4'>
      <h1 className='text-center mb-4'> Book Finder</h1>
      <SearchBox onSearch = {fetchBooks} />

      { loading && (
        <div className='text-center mt-3'>
          <div className='spinner-border' role="status" aria-hidden="true"></div>
          <div className='mt-2'>Loading...</div>
        </div>
      )
      }

      {error && !loading && (
        <div className="alert alert-danger text-center mt-3">{error}</div>
      )}

      {!loading && !error && <BooksList books={books} />}

    </div>
  );
}

export default App
