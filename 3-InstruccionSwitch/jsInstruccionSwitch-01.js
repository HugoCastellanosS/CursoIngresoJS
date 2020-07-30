function mostrar() 
{

	let vMes;

	vMes=document.getElementById("txtIdMes").value;

	switch (vMes)  
	{
		case "Enero":
			alert("que comiences bien el año");
			break;        //es el stop del case
		case "Marzo":
			alert("a clases");
			break;         //sin el break salta hasta el prox
		case "Julio":
			alert("se vienen vacas");
			break;
		case "Diciembre":
			alert("Felices fiestas");
			break;
	}



/*	let vMes;

	vMes = document.getElementById("txtIdMes").value;

	if (vMes == "Enero") {
		alert("que comiences bien el año");
	}
	else if (vMes == "Marzo") {
		alert("a clases!!!");
	}

	else if (vMes == "Julio") {
		alert("se vienen las vacaciones!!!");
	}

	else if (vMes == "Diciembre") {
		alert("Felices fiestas!!!");
	}



	//tomo el mes
	//var mesDelAño =txtIdMes.value;
	//alert(mesDelAño);

*/

}//FIN DE LA FUNCIÓN