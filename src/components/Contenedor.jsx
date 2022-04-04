import React from "react";
import data from "../data/data.json";
import Opciones from "./Opciones";
import Registro from "./Registro";

class Contenedor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            historial: [],
            contador: 0,
            opcionAnterior: "",
        };
    }

    componentDidUpdate(_prevProps, prevState) {
        if (prevState.contador !== this.state.contador) {
            this.state.historial.push(this.state.opcionAnterior);
        }
    }

    handleClick = (boton) => {
        const id = boton.target.id;
        if (this.state.contador >= 7) {
            alert("Fin");
        } else if (id === "A" && this.state.opcionAnterior !== "A") {
            this.setState({
                contador: this.state.contador + 1,
                opcionAnterior: "A",
            });
        } else if (id === "A" && this.state.opcionAnterior === "A") {
            this.setState({
                contador: this.state.contador + 2,
            });
        } else if (id === "B" && this.state.opcionAnterior === "A") {
            this.setState({
                contador: this.state.contador + 3,
                opcionAnterior: "B",
            });
        } else if (id === "B") {
            this.setState({
                contador: this.state.contador + 2,
                opcionAnterior: "B",
            });
        }
    };

    render() {
        return (
            <div className="layout">
                <h1 className="historia">{data[this.state.contador].historia}</h1>
                <Opciones
                    handleClick={this.handleClick}
                    opcionA={data[this.state.contador].opciones.a}
                    opcionB={data[this.state.contador].opciones.b}
                />
                <Registro
                    opcionAnterior={this.state.opcionAnterior}
                    historial={this.state.historial.map(
                        (boton, index) => (
                            <li key={index}>{boton}</li>
                        ),
                        data[this.state.contador].id
                    )}
                />
            </div>
        );
    }
}

export default Contenedor;