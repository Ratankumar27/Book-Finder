import { useState } from "react";

function SearchBox({onSearch}) {
    const [title, setTitle] = useState("");

    const handleSubmit = (e) => {
       e.preventDefault();
       onSearch(title.trim());
    };

    const clearAllBooks =(e) =>{
      e.preventDefault();
       setTitle("");
       onSearch("clrr"); 
    }

    return (
        <form className="d-flex justify-content-center mb-4" onSubmit={handleSubmit}>
            
            <input type="text"
                className="form-control w-50"
                placeholder="Search books by title (e.g., The Hobbit)"
                value={title} 
                onChange={(e) => setTitle(e.target.value)}
                aria-label="Search books"
            />

            <button type="submit" className="btn btn-primary ms-2">
                Search
            </button>
            <button type="submit" className="btn btn-primary ms-2" onClick={clearAllBooks}>Clear</button>

        </form>
    );
}

export default SearchBox;