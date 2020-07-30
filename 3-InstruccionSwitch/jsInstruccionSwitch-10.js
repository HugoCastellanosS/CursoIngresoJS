function mostrar() {
	let vEstación;
	let vDestino;

	vEstación = document.getElementById("txtIdEstacion").value;
	vDestino = document.getElementById("txtIdDestino").value;

	switch (vEstación) {
		case "Invierno":

			if (vDestino == "Bariloche") {
				alert("Se viaja");
			}
			else {
				alert("No se viaja");
			}

			break;

		case "Verano":

			if (vDestino == "Mar del plata" || vDestino == "Cataratas") {
				alert("Se viaja");
			}
			else {
				alert("No se viaja");
			}
			break;

		case "Otoño":

			if (vDestino) {
				alert("Se viaja");
			}

			break;

		case "Primavera":
			if (vDestino == "Bariloche") {
				alert("No se viaja");
			}
			else {
				alert("Se viaja");
			}

			break;

		default:
			alert("Estacion no contemplada, ingrese nuevamente. Gracias");
			break;

	}






}//FIN DE LA FUNCIÓN