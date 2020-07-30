function mostrar()
{
	let vDestino;
	

	vDestino=document.getElementById("txtIdDestino").value;

	
	switch(vDestino)
	{
		case"Bariloche":
			alert("Ud está en el Oeste");
			break;

		case "Cataratas":
			alert("Ud está en el norte");
			break;

		case"Ushuaia":
		    alert("Ud está en el sur");
			break;

		case"Mar del plata":
		    alert("Ud está en el este");
			break;
		
		default:
			alert("Provincia no contemplada");
			break;
			// switch es mejor en este caso, con valores puntuales

	}



}//FIN DE LA FUNCIÓN

/*
	if(vDestino=="Bariloche")
	{
		alert("Ud está en el Oeste");
	}
	else if(vDestino=="Cataratas")
	{
		alert("Ud está en el norte");
	}
	else if(vDestino=="Ushuaia")
	{
		alert("Ud está en el sur");
	}
	else if(vDestino=="Mar del plata")
	{
		alert("Ud está en el este");
	}
*/