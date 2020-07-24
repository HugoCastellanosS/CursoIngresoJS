function mostrar()
{
	let vNota;
	let vMax=10;
	let vMin=1;

	vNota=Math.round(Math.random() * (vMax - vMin)+ vMin);

	if(vNota>=9)
	{
     alert(vNota + " EXCELENTE");
	}
	
	else if (vNota>=4)
    {
	alert(vNota + " APROBÓ");
	}

	else
	{
	alert(vNota + " Vamos, la próxima se puede");
	}
	

}//FIN DE LA FUNCIÓN