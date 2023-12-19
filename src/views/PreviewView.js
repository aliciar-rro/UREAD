import React, {useContext} from "react";
import '../styles/preview.css';
import {useParams} from "react-router-dom";
import {BookContext} from "../components/BookContext";

export const PreviewView = ( {}) => {
    const {bookId} = useParams();
    const { books } = useContext(BookContext);
    const book = books.find(b => b.id === bookId);
    return (
        <div  className="preview-container">
            <h3>Aquí está tu libro</h3>
            <object className="preview-object" data={book.file} type="application/pdf">
            </object>
        </div>
    );
}