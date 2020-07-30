function mostrar()
{
	let mesDelAño;
	mesDelAño = document.getElementById("txtIdMes").value;

	switch(mesDelAño){

		case("Febrero"):
			alert("Este mes no tiene más de 29 días.");
			break;

		default:
			alert("Este mes tiene 30 ó más días.");
			break; // es opcional x que esta al final
					// se recomienda poner por si hay que agregar otro case
	}
	


}//FIN DE LA FUNCIÓN