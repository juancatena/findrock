import React from "react";
import ReactDOM from "react-dom";

class Prueba extends React.Component {
  render() {
    return (
      <React.Fragment>
        <h1>Hola Catalino</h1>
        <p>la peor persona que conozco</p>
      </React.Fragment>
    );
  }
}

ReactDOM.render(<Prueba />, document.getElementById("root"));
