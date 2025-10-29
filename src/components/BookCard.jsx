function BookCard({book}) {
   
    const coverUrl = book.cover_i?  `https://covers.openlibrary.org/b/id/${book.cover_i}-M.jpg` : "https://via.placeholder.com/200x280?text=No+Image";
                                   

    return (
        <div className="card h-100 shadow-sm">
            <img src={coverUrl} 
              className="card-img-top"
                alt={book.title}
                style={{ height: "280px", objectFit: "cover" }}
            />

            <div className="card-body d-flex flex-column">
                <h5 className="card-title" title={book.title}>{book.title}</h5>
                <p className="card-text mb-1">
                    <strong>Author:</strong>{" "}
                    {book.author_name ? book.author_name.join(", ") : "Unknown"}
                </p>
                <p className="card-text text-muted mt-auto">
                <small>First published: {book.first_publish_year || "N/A"}</small>
                </p>
            </div>

        </div>

    );
};

export default BookCard;