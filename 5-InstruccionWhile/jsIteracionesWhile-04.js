/*
al presionar el botón 
pedir un número entre 0 y 9 inclusive.*/
function mostrar()
{
	let vNum; // si es oara cuentas inicilizar o parsear
		vNum=parseInt(prompt("ingrese un número entre 0 y 10."));
		
	while(!(vNum>=0 && vNum<=9)) //(vNum<0 || vNum>9 || isNAN(vNum))
								// con el rango && se limita, el || deja abierta muchas osibilidades
	{
		alert("Número correcto.");

	}

/*

	do
	{
		vNum = prompt("ingrese un número entre 0 y 10.");
		if(isNAN(vNum))
		{
			vNum=-1; //se le pone un número fuera del rango
		}
		
	}while(vNum<0 || vNum>9 || isNAN(vNum));// me pide un numero por fuera del rango
								para volver a preguntar el numer correcto
		alert("Número correcto");
	*/
	
}//FIN DE LA FUNCIÓN