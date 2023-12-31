import React, {useContext, useState} from "react";
import {LoginContext} from "../components/LoginContext";
import {useNavigate} from "react-router";
import "../styles/login.css";

export const LoginView = () => {

    /*
        Vista de login
        Hace uso del contexto y del estado para simular un login
     */

    const {LoggedIn, login} = useContext(LoginContext);
    const [user, setUser] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const changeUser = (e) =>{
        setUser(e.target.value);
    }

    const changePassword = (e) =>{
        setPassword(e.target.value);
    }

    const processLogin =  (e) => {
        //Nunca son nulos -> siempre se hace login
        if( user !== null && password !=null){
            login(user);
            navigate("/");
        }else{
            navigate("/login");
        }
    };


    return (
        <div className="login-container">
            <div className="login-container__table">
                <label htmlFor='username'>Usuario:</label>
                <input type='text' className='user' value={user} onChange={changeUser} />
                <label htmlFor='password'>Contraseña:</label>
                <input type='password' className='password' value={password} onChange={changePassword}/>
                <button type='submit' onClick={processLogin}>Login</button>
            </div>
        </div>
    )

}