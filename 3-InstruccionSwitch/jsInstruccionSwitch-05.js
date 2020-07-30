function mostrar() {
	let vHora

	vHora=parseInt(document.getElementById("txtIdHora").value);

	switch (vHora) {
		 

		case (7):
		case (8):
		case (9):
		case (10):
		case (11):
			alert("Es de mañana.");
			break;

		case (12):
			alert("Es medio día.");
			break;

		case (13):
		case (14):
		case (15):
		case (16):
		case (17):
		case (18):
			alert("Es por la tarde.");
			break;

		default:
			if(vHora>18 || vHora<=23){
			alert("Es de noche");
			}

			if(vHora>24)
			{
				alert("No es una hora valida, ingrese nuevamente. Gracias");
			}

	}

}//FIN DE LA FUNCIÓN