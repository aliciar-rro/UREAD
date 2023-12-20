import React, {useContext, useEffect, useState} from "react";
import '../styles/user.css';
import {LoginContext} from "../components/LoginContext";
import userDataJson from "../assets/userData.json";
import {BookContext} from "../components/BookContext";

export const UserView = () => {

    /*
     * Vista general de los datos de usuario
     * Incluye una opción de cambio de Modo Oscuro/Claro
     */

    const { UserData } = useContext(LoginContext);
    const [userProfile, setUserProfile] = useState(null);

    useEffect(() => {
        setUserProfile(userDataJson);
    }, [UserData]);

    const {darkMode, setDarkMode} =  useContext(BookContext);

    useEffect(() => {
        document.body.classList.toggle("dark-mode", darkMode);
    }, [darkMode]);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className="user-data">
            {userProfile ? (
                <div className="user-data__data">
                    <div className="data__row">
                        <p>Nombre: </p>
                        <p>{userProfile.nombre}</p>
                    </div>
                    <div className="data__row">
                        <p>Email:</p>
                        <p>{userProfile.email}</p>
                    </div>
                </div>
            ) : (
                <p>Cargando datos de usuario...</p>
            )}

            <div className="user-data__data">
                <p>{darkMode ? "Cambiar a Modo Claro" : "Cambiar a Modo Oscuro"}</p>
                <label className="toggle-switch">
                    <input
                        type="checkbox"
                        onChange={toggleDarkMode}
                        checked={darkMode}
                    />
                    <span className="slider round"></span>
                </label>
            </div>

        </div>
    );
};