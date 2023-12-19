import React, {useContext} from "react";
import {Link, useParams} from "react-router-dom";
import {BookContext} from "../components/BookContext";
import "../styles/checkout.css"
export const CheckoutView = () => {
    const {bookId} = useParams();
    const { books } = useContext(BookContext);
    const book = books.find(b => b.id === bookId);
    return (
        <div className="checkout-container">
            <h3>¿Está seguro de querer comprar el libro {book.title}?</h3>
            <div className="checkout-container__data">
                <img className="detail_img" src={book.image}  alt="Portada"/>
                <p>Isbn: {book.isbn}</p>
                <p>{book.price}</p>
            </div>
            <div className="checkout-container__buttons">
                <Link to={`/confirm/${book.id}`}>
                    <button>Sí</button>
                </Link>
                <Link to={`/`}>
                    <button>No</button>
                </Link>
            </div>
        </div>
    );
}