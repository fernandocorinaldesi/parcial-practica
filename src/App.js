import React, { Component } from "react";
import "./css/App.css";
import TableModel from "./components/TableModel";
import ComboBox from "./components/comboBox";


export default class App extends Component {
  state = {
    ids: [],
    datos: [],
    datosfiltrados: []
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

       this.setState({ ids: ids, datos: datos,datosFiltrados:datos });
    } catch (err) {
      alert("Se produjo el siguiente error: " + err);
      this.setState({ ids: [], datos: [], datosfiltrados: [] });
    }
  }
  eventCombo = (e) => {
     if (e.target.value === "0") {
      this.setState({ datosfiltrados: this.state.datos });
    } else {
      const datosFiltrados = this.state.datos
      .filter((u) => u.userId === e.target.value);

      this.setState({ datos: datosFiltrados });
    }
    
  };

  render() {
    const { ids,datos} = this.state;

    return (
      <div className="App">
       
          <ComboBox  datos={ids}
            titulo="Seleccione una id.."
            handerCombo={this.eventCombo}/>
           <TableModel data={datos} titulo="EJERCICIO PARCIAL 1" />
       
      </div>
    );
  }
}
