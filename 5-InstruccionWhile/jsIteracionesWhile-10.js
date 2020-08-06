/*
Al presionar el botón pedir  números  
hasta que el usuario quiera, mostrar:
1-Suma de los negativos.
2-Suma de los positivos.
3-Cantidad de positivos.
4-Cantidad de negativos.
5-Cantidad de ceros.
6-Cantidad de números pares.
7-Promedio de positivos.
8-Promedios de negativos.
9-Diferencia entre positivos y negativos, (positvos-negativos). */
function mostrar()
{
	//declarar contadores y variables 
	
	let vNum=0;
	let vSumNeg=0;
	let respuesta="s";
	let vSumPos=0;
	let vAcum=0;
	let vAcumNeg=0;
	let vPromNeg;
	let vPromPos;
	let VPar;
	
	do
	{
		vNum=parseInt(prompt("Ingrese un numero: "));
		
		if(vNum<0)
		{
			vSumNeg= vSumNeg+vNum;
			vAcumNeg++;
		}
		if(vNum>=0)
		{
			vSumPos= vSumPos+vNum;
			vAcum++;
		}
		if(vNum/2)
		{

		}



		respuesta=prompt("desea continuar? s/n");

	}while(respuesta=="s");



	document.writeln("la suma de negativos es : "+ vSumNeg)+ "<br>";
	document.writeln("la suma de positivos es : "+ vSumPos) + "<br>";
	document.writeln("la cantidad de negativos es : "+ vAcumNeg) + "<br>";
	document.writeln("la cantidad de positivos es : "+ vAcum) + "<br>";
}//FIN DE LA FUNCIÓN