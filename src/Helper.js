export const validarPresupuesto = presupuesto => {
	let totalPresupuesto = parseInt(presupuesto,10) || 0;

	if(totalPresupuesto > 0){
	return totalPresupuesto;
	} else{
	return false;
	}
}

export const revisarPresupuesto=(presupuesto,restante) => {
	let clase;
	if((presupuesto/4) > restante){
		clase="alerta-danger";
	}
	else if((presupuesto/2) > restante){
		clase="alerta-warning";
	} else{
		clase="alerta-success";
	}
	return clase;
}