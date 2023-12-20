import React, {useContext, useState} from "react";
import bookfinder from "../styles/bookfinder.css"
import {BookContext} from "./BookContext";

export const BookFinder = () => {

    /*
        Componente de buscador de libros
        Usa un filtro haciendo uso del contexto y del estado
     */

    const {handleFilter} = useContext(BookContext);
    const[value, setValue] = useState('');

    return (
            <div className="bookfinder-container">
                <p> Buscador de libros:</p>
                <input onChange={(e) => setValue(e.target.value)}  />
                <button onClick={() => handleFilter(value)}>Buscar</button>

            </div>
    );

}