function mostrar()
{
	let vEdad;

	vEdad=parseInt(document.getElementById("txtIdEdad").value);

	if(vEdad < 13)      //fijarse si son excluyentes las condiciones, si lo son se anida, sino varios if
	{
	  alert("Es niño");
	}
	
	else if(vEdad<18) //(vEdad >=13 && vEdad<=17)
	 {
		 alert("Es adolescente");
	 }
	 else if (vEdad <65)
	 {
		 alert("Es mayor de edad");
	 }
	 else //todo lo demás x q ya abarque los demas rangos
	 {
		alert("es adulto mayor");
	 }
	

}//FIN DE LA FUNCIÓN