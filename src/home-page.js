import React from "react";
import "./home-page.css";
import logo from "./logo.svg";
import { ETIME } from "constants";
import ReactDOM from "react-dom";
import Modal from "./components/modal.js";

class PageHome extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.history.push("./busqueda?" + this.state.busqueda);
  };
  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      modal: true,
    });
  };
  onChange = (e) => {
    this.setState({
      busqueda: e.target.value,
    });
  };
  state = {
    busqueda: "",
    modal: false,
  };
  render() {
    return (
      <div className="container">
        <div className="row centrado">
          <div className="col-md-6 centrar">
            <img src={logo} alt="" id="logo" />
            <form
              className="form-inline"
              name="Form"
              onSubmit={this.handleSubmit}
            >
              <div className="busqueda">
                <input
                  name="busqueda"
                  type="text"
                  id="buscar"
                  value={this.props.valor}
                  placeholder="Busca una Banda"
                  onChange={this.onChange}
                />
              </div>
              <div className="actions">
                <button className="btng" type="submit">
                  Search Similar Artist
                </button>
                <button className="btng" onClick={this.handleClick}>
                  EscuelaDevRock
                </button>
              </div>
            </form>
          </div>
        </div>
        {ReactDOM.createPortal(
          <Modal estado={this.state.modal}>
            <h4>
              En esta pagina podras encontrar bandas similares a los artistas
              que te gustan!
            </h4>
          </Modal>,
          document.getElementById("teleport")
        )}
      </div>
    );
  }
}

export default PageHome;
