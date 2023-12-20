import {useEffect, useState} from "react";


export const useLogin = () => {

    /*
        Custom hook para manejar el login
     */

    const [LoggedIn, setLoggedIn] = useState(false);
    const [UserData, setUserData] = useState('');

    const login = (user) => {
        setUserData(user);
        setLoggedIn(true);
    };
    const logout = () => {
        setLoggedIn(false);
        setUserData('');
    };

    return {LoggedIn, login, logout, UserData};
}