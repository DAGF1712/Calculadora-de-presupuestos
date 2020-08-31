import React, { Component } from 'react';

class Gasto extends Component{
	render(){
		const {cantidadGasto,nombreGasto} = this.props.gasto;

	return(
		<li>
			<p className="nombreGasto">
				{nombreGasto}
				<span className="cantidadGasto"> ${cantidadGasto}</span>
			</p>
		</li>
		)
	}
}

export default Gasto;