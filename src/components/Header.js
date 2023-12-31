import React from "react";
import '../styles/header.css';
import logotipo from '../assets/logotipo.png'

export const Header = () => {

    /*
        Componente de encabezado con logo
     */

    return (
        <header className="header">
            <img className="logo" src={logotipo} alt="logo"/>
        </header>

    );
}