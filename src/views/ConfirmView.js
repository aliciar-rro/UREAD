import React, {useContext} from "react";
import {Link, useParams} from "react-router-dom";
import {BookContext} from "../components/BookContext";
import "../styles/confirm.css";
export const ConfirmView = ( {}) => {
    const {bookId} = useParams();
    const { books } = useContext(BookContext);
    const book = books.find(b => b.id === bookId);
    return (
        <div className="confirm-container">
            <h3>Pedido confirmado</h3>
            <div className="confirm-container__data">
                <p>Su pedido se ha confirmado correctamente</p>
                <p>¿Quiere visualizar el libro {book.title}?</p>
            </div>
            <div className="confirm-container__buttons">
                <Link to={`/preview/${book.id}`}>
                    <button>Sí</button>
                </Link>
                <Link to={`/checkout/${book.id}`}>
                    <button>No</button>
                </Link>
            </div>
        </div>
    );
}