function mostrar()
{
	var vEdad;

	vEdad=parseInt(document.getElementById("txtIdEdad").value);

	if(vEdad>=18)
	{
		alert("Es mayor de edad");

	}

	//if(vEdad<=17)
	else
	{
		alert("Es menor de edad");
	}
	

}//FIN DE LA FUNCIÓN