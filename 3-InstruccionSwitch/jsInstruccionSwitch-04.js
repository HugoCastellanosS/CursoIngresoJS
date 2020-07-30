
function mostrar() {
	let vMes

	vMes=document.getElementById("txtIdMes").value;

	switch (vMes) {
		case ("Febrero"):
			alert("Este mes tiene 28 días.");
			break;

		case ("enero"):
		case ("Febrero"):
		case ("Abril"):
		case ("Junio"):
		case ("Octubre"):
			alert("Este mes tiene 31 días.");
			break;

		default:
			alert("Este mes tiene 30 días.");
			break;
	}

}//FIN DE LA FUNCIÓN