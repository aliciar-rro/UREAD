import {Footer} from "./components/Footer";
import {useBooks} from "./hooks/useBooks";
import React, {useState} from "react";
import {LoginContext} from "./components/LoginContext";
import {useLogin} from "./hooks/useLogin";
import {BookContext} from "./components/BookContext";
import {BookRouter} from "./router/BookRouter";
import "./styles/app.css"


function App() {

    /*
    * Añadimos datos de login y otros datos de aplicacion general
    * Proveemos los contextos de la aplicación
    * Llamamos al enrutador
    *
    * */
    const {LoggedIn, login, logout,  UserData} = useLogin();
    const {books, handleFilter} = useBooks();
    const [darkMode, setDarkMode] = useState(false);

    return (
        <div className="contents">
            <LoginContext.Provider value={{LoggedIn, login, logout, UserData}}>
                <BookContext.Provider value={{books, handleFilter, darkMode, setDarkMode}}>
                        <BookRouter></BookRouter>
                    </BookContext.Provider>
                <Footer></Footer>
            </LoginContext.Provider>
          </div>
      );
}

export default App;
