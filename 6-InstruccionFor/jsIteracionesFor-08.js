function mostrar()
{
	
	let vNum;
	let vContador=0;
	
	do  //validacion
	{
		vNum=parseInt(prompt("Ingrese un número"));

	}while(isNaN(vNum) || vNum<=1);// es con || x q no se dan las dos al mismo tiempo
									// el && se dan las dos al mismo time

	for(let i=1;i<=vNum;i++)
	{
		if(vNum%i==0)
		{
			vContador++;
		}

	}

	if (vContador==2)
	{
		alert(vNum + " es primo");
	}
	else
	{
		alert(vNum + " no es primo");
	}


	

}//FIN DE LA FUNCIÓN

//validar número y no letra
//validar que sea >1.