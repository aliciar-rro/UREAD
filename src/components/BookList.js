import React, {useContext} from "react";
import {Book} from "./Book";
import '../styles/booklist.css';
import {BookContext} from "./BookContext";

export const BookList = () => {

    const { books } = useContext(BookContext);

    return (
        <div className="books">
            {books.length === 0 ? (
                <p>No se encontraron libros.</p>
            ) : (
                books.map((book, index) => (
                    <Book
                        key={index}
                        id={book.id}
                        title={book.title}
                        isbn={book.isbn}
                        image={book.image}
                        price={book.price}
                    />
                ))
            )}
        </div>
    );
}