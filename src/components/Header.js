import React from "react";
import '../styles/header.css';
import logotipo from '../assets/logotipo.png'
import {Login} from "./Login";
import {Logout} from "./Logout";

export const Header = () => {
    return (
        <header className="header">
            <img className="logo" src={logotipo} alt="logo"/>
        </header>

    );
}