function mostrar() {
	let vPrecio = 15000;
	let vEstacion;
	let vDestino;
	let vAumento = 0;
	let vPreFinal = 0;
	let vDto = 0;

	vDto = parseFloat(vDto);
	vPreFinal = parseFloat(vPreFinal);
	vEstacion = document.getElementById("txtIdEstacion").value;
	vDestino = document.getElementById("txtIdDestino").value;


	switch (vEstacion) {
		case "Invierno":
			if (vDestino == "Bariloche") {
				vAumento = 20 * vPrecio / 100;
				vPreFinal = vAumento + vPrecio;
				alert("El costo es: " + vPreFinal);
			}
			else if (vDestino == "Cataratas" || vDestino == "Cordoba") {
				vDto = vPrecio * 0.10;
				vPreFinal = vPrecio - vDto;
				alert("El costo es: " + vPreFinal);
			}
			else if (vDestino == "Mar del plata") {
				vDto = vPrecio * 0.20;
				vPreFinal = vPrecio - vDto;
				alert("El costo es: " + vPreFinal);
			}


			break;

		case "Verano":
			if (vDestino == "Bariloche" || vDestino == "Mar del plata") {
				vAumento = 20 * vPrecio / 100;
				vPreFinal = vAumento + vPrecio;
				alert("El costo es: " + vPreFinal);
			}

			else {
				vAumento = 10 * vPrecio / 100;
				vPreFinal = vAumento + vPrecio;
				alert("El costo es: " + vPreFinal);
			}

			break;

		case "Otoño":
		case "Primavera":

			if (vDestino != "Cordoba") {
				vAumento = 10 * vPrecio / 100;
				vPreFinal = vAumento + vPrecio;
				alert("El costo es: " + vPreFinal);
			}
			else {
				alert("El costo es: " + vPrecio);
			}

			break;




	}




}//FIN DE LA FUNCIÓN