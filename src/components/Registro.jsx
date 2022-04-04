import React from "react";

class Registro extends React.Component {
  render() {
    return (
      <div className="registro">
        <h3>Selección anterior: {this.props.seleccionPrevia}</h3>
        <h4>Historial de opciones elegidas: </h4>
        <ul>{this.props.historial}</ul>
      </div>
    );
  }
}

export default Registro;