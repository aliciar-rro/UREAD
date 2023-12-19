import React from "react";
import { Link } from "react-router-dom";
import {Logout} from "./Logout";
import "../styles/navbar.css";

export const Navbar = () => {

    return (
        <div className="nav-container">
            <nav className="nav">
                <ul>
                    <li>
                        <Link to="/">
                            <button>Home</button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/user">
                            <button>Usuario</button>
                        </Link>
                    </li>
                    <li>
                    </li>
                </ul>
                <Logout></Logout>
            </nav>
        </div>
    );
};