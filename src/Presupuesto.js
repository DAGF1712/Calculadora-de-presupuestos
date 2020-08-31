import React, { Component } from 'react';

class Presupuesto extends Component{
	render(){
		return(
			<div className="presupuesto">
				Presupuesto: ${this.props.presupuesto}
			</div>
			)
	}
}

export default Presupuesto;