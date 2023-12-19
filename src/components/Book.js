import React from "react";
import {Link} from "react-router-dom";
import "../styles/book.css";

export const Book = ( {id, title, isbn, image, price}) => {
    return (
        <div className="books__book">
            <h3>Titulo: {title}</h3>
            <img className="portada" src={image} alt="Portada"/>
            <p className="book__price">{price}€</p>
            <Link to={`/checkout/${id}`}>
                <button>Leer</button>
            </Link>
        </div>
    );
}