import React, { Component } from "react";
import "./css/App.css";
import TableModel from "./components/TableModel";
import ComboBox from "./components/comboBox";
import logo from "./unpaz.png";

export default class App extends Component {
  state = {
    ids: [],
    datos: [],
    datosfiltrados: [],
  };
  async componentDidMount() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts",
        {
          method: "GET",
        }
      );
      const datos = await response.json();

      const ids = datos
        .map((e) => e.userId)
        .filter((e, index, array) => array.indexOf(e) === index);

      this.setState({ ids: ids, datos: datos, datosfiltrados: datos });
    } catch (err) {
      alert("Se produjo el siguiente error: " + err);
      this.setState({ ids: [], datos: [], datosfiltrados: [] });
    }
  }
  eventCombo = (e) => {
    let valor = parseInt(e.target.value);
    if (e.target.value === "0") {
      this.setState({ datosfiltrados: this.state.datos });
    } else {
      const datosfiltrados = this.state.datos.filter((u) => u.userId === valor);
      console.log(datosfiltrados);
      this.setState({ datosfiltrados: datosfiltrados });
    }
  };

  render() {
    const { ids, datosfiltrados } = this.state;

    return (
      <div className="App">
        <div className="bar-functions">
          <div className="filters-container generic">
            <div className="filter-title">
              <h2>Filtro</h2>
            </div>
            <div className="id-filter">
              <ComboBox
                datos={ids}
                titulo="Seleccione una id.."
                handerCombo={this.eventCombo}
              />
            </div>
          </div>
          <div className="informacion-container generic">
            <h6>Materia : Practica integradora</h6>
            <h6>Docente : Gerardo Gonazalez Tulian</h6>
            <h6>Tema : Ejercicio parcial</h6>
            <h6>Alumno : Fernando Corinaldesi</h6>
          </div>
          <div className="logo-container">
            <img src={logo} height="70%" width="70%" />
          </div>
        </div>
        <div className="table-container">
          <TableModel data={datosfiltrados} titulo="DATOS DE USUARIOS" />
        </div>
      </div>
    );
  }
}
