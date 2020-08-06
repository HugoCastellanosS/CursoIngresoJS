function mostrar()
{
	let vNum;
	let Vcontrol=0
	let vAcumulador=0;
	let vPromedio=0;


	while(Vcontrol<5)
	{
		vNum=parseInt(prompt("Ingrese número: "));
		vAcumulador = vAcumulador + vNum;
		Vcontrol++;
	
	}

	vPromedio=vAcumulador/Vcontrol;  //vPromedio=vAcumulador/5;

	//el promedio va afuera para que no vaya dividiendo cada vez

    document.getElementById("txtIdSuma").value=vAcumulador;
	document.getElementById("txtIdPromedio").value=vPromedio;

	/*vNum=parseInt(prompt("Ingrese primer número: "));
	vNum=vNum + parseInt(prompt("Ingrese segundo número: "));
	vNum=vNum +  parseInt(prompt("Ingrese tercer número: "));
	vNum=vNum +  parseInt(prompt("Ingrese cuarto número: "));
	vNum=vNum +   parseInt(prompt("Ingrese quinto número: "));


	
*/
	
	
	
	
	
}//FIN DE LA FUNCIÓN


/*
asignacion      acumulador    
num=2			num=2

num=5			num=num+5
				num=7
				num=num+3
				num=10

*/