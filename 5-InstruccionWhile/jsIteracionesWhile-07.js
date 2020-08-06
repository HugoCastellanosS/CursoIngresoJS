/*
Al presionar el botón pedir  números  hasta que el USUARIO QUIERA 
e informar la suma acumulada y el promedio.
*/
function mostrar() {
	let contador = 0;   //variable de control
	let acumulador = 0;  // guarda lo que ingreso
	let respuesta = "Si";
	let vNum;
/*
	do {
		vNum = parseInt(prompt("INgrese un numero: "));
		acumulador = vNum + acumulador;
		contador++;

		respuesta = prompt("Ingresa otro: si/no");

	} while (respuesta == "si");
*/
	


	while (respuesta == "si") 
	{
		vNum = parseInt(prompt("Ingrese un numero: "));
		acumulador = vNum + acumulador;
		contador++; 

		respuesta = prompt("Ingresa otro: si/no");

	}

    document.getElementById("txtIdSuma").value = acumulador;
	document.getElementById("txtIdPromedio").value = acumulador / contador;

}//FIN DE LA FUNCIÓN