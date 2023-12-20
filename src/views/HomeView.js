import React from "react";
import { BookFinder } from "../components/BookFinder";
import {BookList} from "../components/BookList";

export const HomeView = () => {

    /*Vista de Home -  Donde se ve el buscador y la lista de libros
     */

    return (

        <div>
            <BookFinder></BookFinder>
            <BookList></BookList>
        </div>
    );
}