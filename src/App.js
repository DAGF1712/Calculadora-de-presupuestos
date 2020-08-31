import React, { Component } from 'react';
import Header from "./Header";
import FormularioGasto from "./Formulario";
import Listado from "./Listado";
import Gasto from "./Gasto";
import {validarPresupuesto} from "./Helper";
import ControlPresupuesto from "./ControlPresupuesto";


class App extends Component {

	state={
		presupuesto:"",
		restante:"",
		gastos:{}
	}

	componentDidMount(){
		this.obtenerPresupuesto();
	}

	obtenerPresupuesto = () => {
		let presupuesto = prompt("Ingresa tu presupuesto (Ej: 200)");
		let resultado = validarPresupuesto(presupuesto);

		if(resultado){
			this.setState({
				presupuesto:presupuesto,
				restante:presupuesto
		})}
		else{
			this.obtenerPresupuesto();
		}
	}

	agregarGasto = gasto => {
		//tomar copia del state actual
		const gastos = {...this.state.gastos};
		//agregar el gasto al objeto state
		gastos[`gasto${Date.now()}`] = gasto;
		this.restarPrespuesto(gasto.cantidadGasto);
		//ponerlo en state
		this.setState({
			gastos
		})
	}

	restarPrespuesto= cantidad => {
		let restar=Number(cantidad);
		let restante=this.state.restante;
		restante -= restar;
		restante=String(restante);
		this.setState({restante})
	}

  render() {
    return (
      <div>
        <Header
          titulo="CALCULADORA DE PRESUPUESTO"
        />

        <FormularioGasto
        	agregarGasto={this.agregarGasto}
        />

        <Listado
        	gastos={this.state.gastos}
        />

        <ControlPresupuesto
        	presupuesto={this.state.presupuesto}
        	restante={this.state.restante}
        />
      </div>
    );
  }
}

export default App;
