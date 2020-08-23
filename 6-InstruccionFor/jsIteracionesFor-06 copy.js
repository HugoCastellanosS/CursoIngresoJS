function mostrar()
{
	let vNum;
	let vCantPares=0;
	
	vNum=parseInt(prompt("Ingrese un fucking number"));

	for(let i=1;i<=vNum;i++)
	{
		if(i%2==0)
		{
			alert("el numero "+i+"s par");
			vCantPares++;
		}

	}

	alert("Se encontraron "+vCantPares+" de pares");

}//EL CERO ES PAR