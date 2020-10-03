import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// let elemento = document.createElemment("p");
// elemento.innerHtml = "sou Juan Carlo";
// let contenedor = document.getElementById("root");
// contenedor.appendChild(elemento);
// let nombre = "Juan";
// let apellido = "Catena";
// let edadd = 34;
// let calc = (edad) => {
//   return 5 + 5 + edad;
// };

// let elemento = (
//   <div>
//     <h1>
//       Soy {nombre} {apellido} tengo {calc(20) + 10}
//     </h1>
//     <h2>iloviu</h2>
//     <p>soyJuancarlo</p>
//   </div>
// );

// let container = document.getElementById("root");
// ReactDOM.render(elemento, container);
