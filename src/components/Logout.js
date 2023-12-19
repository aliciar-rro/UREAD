import React, {useContext, useState} from "react";
import {Link} from "react-router-dom";
import {LoginContext} from "./LoginContext";
import "../styles/logout.css"

export const Logout = () => {

    const {logout} = useContext(LoginContext);

    return(
        <div className="navbar__logout">
            <Link to={`/`} onClick={logout}>
                <button >Cerrar sesión</button>
            </Link>
        </div>


    )
}