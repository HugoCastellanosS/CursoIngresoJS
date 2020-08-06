/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
mostrar el número máximo y el número mínimo ingresado.*/
function mostrar() {	// declarar variables

	let vNum;
	let vNumMax;    // no se inicializa en cero x los negativos
	let vNumMin;    // en este caso en particular
	let respuesta = "s";
	let vBandera = 0;


	do {
		vNum = parseInt(prompt("Ingrese un número: "));

		if (vNum < vNumMin || vBandera == 0) {
			vNumMin = vNum;
		}

		if (vNum > vNumMax || vBandera == 0) //else if sirve
		{
			vNumMax = vNum;
			vBandera = 1;
		}

		respuesta = prompt("Quiere ingresar otro? s/n");

	} while (respuesta == "s");

	document.getElementById("txtIdMaximo").value = vNumMax;
	document.getElementById("txtIdMinimo").value = vNumMin;

}//FIN DE LA FUNCIÓN

/*
de debe comparar siempre
uando la bandera es 0 
vNumeroMaximo = vNumeroIngresado;
vNumeroMinimo = vNumeroIngresado;
cuando es 1 
vNumeroMaximo = Math.max(vNumeroIngresado,vNumeroMaximo);
vNumeroMinimo = Math.min(vNumeroIngresado,vNumeroMinimo); 	
y te ahorras el choclo del if

*/
