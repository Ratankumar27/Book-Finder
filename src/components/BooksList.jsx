import BookCard from "./BookCard";

function BooksList({books}) {
    if(!books || books.length===0){
        return null;
    }

    return ( 
        <div className="row">
            {books.map((book, idx) => (
                <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={book.key || idx}>
                    <BookCard book ={book}/>
                </div>
            ))}
        </div>
    );
};

export default BooksList;