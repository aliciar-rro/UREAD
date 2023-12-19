import React from "react";
import { BookFinder } from "../components/BookFinder";
import {BookList} from "../components/BookList";
import {Logout} from "../components/Logout";
import {User} from "../components/Navbar";

export const HomeView = () => {
    return (

        <div>
            <BookFinder></BookFinder>
            <BookList></BookList>
        </div>
    );
}