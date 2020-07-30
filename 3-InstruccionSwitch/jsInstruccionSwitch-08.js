function mostrar() {
	let vDestino;

	vDestino = document.getElementById("txtIdDestino").value;

	switch (vDestino) {
		case "Bariloche":
		case "Ushuaia":
			alert("Hace frío");
			break;

		case "Cataratas":
		case "Mar del plata":
			alert("Hace Calor");
			break;

		default:
			alert("No se contempla");
			break;
	}

}//FIN DE LA FUNCIÓN