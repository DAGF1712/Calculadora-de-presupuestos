import React, { Component } from 'react';

class FormularioGasto extends Component {
	
	//refs para los campos del form
	nombreGasto = React.createRef();
	cantidadGasto = React.createRef();

	crearGasto = (e) => {
		//prevenir default 
		e.preventDefault();

		//crear obj con los datos
		const gasto = {
			nombreGasto: this.nombreGasto.current.value,
			cantidadGasto: this.cantidadGasto.current.value
		}

		this.props.agregarGasto(gasto);

		//resetear el form
		e.currentTarget.reset();
	}

	render() {
		return(
				<form onSubmit={this.crearGasto}>
				<h2>Agrega tus gastos aqui</h2>
	
				<div className="elemento1">
				<label> Nombre de tu gasto aqui </label>

				<br/>

				<input ref={this.nombreGasto} type="text" placeholder="Ej: Transporte"/>
				</div>
				<br/>

				<div className="elemento2">
				<label>Cantidad del gasto</label>
				
				<br/>

				<input ref={this.cantidadGasto} type="text" placeholder="Ej: 200"/>
				</div>
				<br/>

				<input className="elemento3" type="submit" value="Agregar gasto"/>
				</form>
			);
	}
}

export default FormularioGasto;