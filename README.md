# UREAD

Descripción breve del proyecto Uread:

## Estructura del Proyecto

- `uread`: Carpeta principal del proyecto.
- `node_modules`: Carpeta que contiene las dependencias del proyecto.
- `public`: Carpeta con archivos públicos (como `index.html`, etc.).
- `src`: Carpeta que contiene el código fuente del proyecto.
    - `assets`: Carpeta para archivos multimedia u otros recursos.
    - `components`: Carpeta que contiene los componentes del proyecto.
      - [Book.js](src%2Fcomponents%2FBook.js)
      - [BookContext.js](src%2Fcomponents%2FBookContext.js)
      - [BookFinder.js](src%2Fcomponents%2FBookFinder.js)
      - [BookList.js](src%2Fcomponents%2FBookList.js)
      - [Footer.js](src%2Fcomponents%2FFooter.js)
      - [Header.js](src%2Fcomponents%2FHeader.js)
      - [LoginContext.js](src%2Fcomponents%2FLoginContext.js)
      - [Logout.js](src%2Fcomponents%2FLogout.js)
      - [Navbar.js](src%2Fcomponents%2FNavbar.js)
    - `hooks`: Carpeta para custom hooks.
      - `useBooks.js`: Custom hook para obtener lista de libros (llamada fake a backend).
      - `useLogin.js`: Custom hook para manejar el login  (llamada fake a backend).
    - `router`: Carpeta que contiene la lógica de enrutamiento.
      - [BookRouter.js](src%2Frouter%2FBookRouter.js)
    - `styles`: Carpeta con archivos de estilos.
    - `views`: Carpeta que contiene las vistas principales del proyecto.
      - [CheckoutView.js](src%2Fviews%2FCheckoutView.js)
      - [ConfirmView.js](src%2Fviews%2FConfirmView.js)
      - [ErrorView.js](src%2Fviews%2FErrorView.js)
      - [HomeView.js](src%2Fviews%2FHomeView.js)
      - [PreviewView.js](src%2Fviews%2FPreviewView.js)
      - [UserView.js](src%2Fviews%2FUserView.js)
      - [LoginView.js](src%2Fviews%2FLoginView.js)

    - `App.js`: Archivo principal que inicia la aplicación.
    - `index.js`: Archivo principal para renderizar la aplicación.
    - `logo.svg`: Archivo SVG del logo del proyecto.

### Deploy
https://uread-alicias-projects-e5de1860.vercel.app