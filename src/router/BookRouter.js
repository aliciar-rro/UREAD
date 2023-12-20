import React, {useContext} from "react";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import { HomeView } from "../views/HomeView";
import { ErrorView } from "../views/ErrorView";
import {CheckoutView} from "../views/CheckoutView";
import {ConfirmView} from "../views/ConfirmView";
import {PreviewView} from "../views/PreviewView";
import {Login} from "../components/Login";
import {LoginContext} from "../components/LoginContext";
import {UserView} from "../views/UserView";
import {Navbar} from "../components/Navbar";
import {Header} from "../components/Header";


export const BookRouter = () => {

    /*
        Enrutador
        Se usa el contexto para saber si un usuario está logeado y mostrar unas rutas u otras
     */

    const {LoggedIn} = useContext(LoginContext);

    return (
        <BrowserRouter>
            {LoggedIn && <Navbar />}
            <Header></Header>
            <Routes>

                {LoggedIn ? (
                    <>
                        <Route path="/" element={<HomeView />} />
                        <Route path="/checkout/:bookId" element={<CheckoutView />} />
                        <Route path="/confirm/:bookId" element={<ConfirmView />} />
                        <Route path="/preview/:bookId" element={<PreviewView />} />
                        <Route path="/user" element={<UserView />} />
                    </>
                ) : (
                    <Route path="/" element={<Navigate to="/login" />} />
                )}
                <Route path="/login" element={<Login />} />
                <Route path="*" element={<ErrorView />} />
            </Routes>
        </BrowserRouter>
    );
};