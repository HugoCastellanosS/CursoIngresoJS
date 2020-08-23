function mostrar()
{

	let vNum;
	let vCantDivisores=0;
	
	vNum=parseInt(prompt("Ingrese un número: "));

	for(let i=1;i!=vNum;i++)
	{
		if(vNum%i==0)//un numero dividido otro da cero es divisible
		{
			alert("el numero "+i+"es divisor de"+vNum);
			vCantDivisores++;
		}

	}

	alert("La cantidad de divisores es :"+vCantDivisores);


}//FIN DE LA FUNCIÓN