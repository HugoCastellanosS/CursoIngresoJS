
function mostrar() {
	let producto;
	let respuesta = "s";
	let precio = 0;
	let cantidad = 0;
	let marca;
	let fabricante;
	let precioMayorJabon = 0;
	let nomJabonMAyorPrecio;
	let fabricanteJabonCaro;

	let acumJabones = 0;
	let acumAlcohol = 0;
	let acumCantidad;
	let acumFabricante;
	let acumProducto;
	let acumBarbijo = 0;
	let acumTotal = 0;

	let contadorJabonmasCaro = 0;
	let contadorJabon = 0;
	let contadorAlcohol = 0;
	let contadorCantidad = 0;
	let contadorbarbijo = 0;
	let contadorFabricante = 0;
	let contadorProductoMAyorCAntidad = 0;

	let bandera = 0
	let bandera2 = 0

	let promedio;

	do {

		do {
			producto = prompt("Ingrese nombre de producto: ");

		} while (!(producto == "barbijo" || producto == "jabon" || producto == "alcohol"));

		do {
			precio = parseInt(prompt("Ingrese precio entre 100 y 300: "));
		} while (!(precio >= 100 && precio <= 300));

		do {
			cantidad = parseInt(prompt("Ingrese cantidad de unidades: "));
		} while (!(cantidad > 0 && cantidad <= 1000));

		marca = prompt("Ingrese Marca: ");

		fabricante = prompt("Ingrese Fabricante");

		switch (producto) {
			case "jabon":
				{

					if (bandera = 0 || precio > precioMayorJabon) {
						precioMayorJabon = precio;
						nomJabonMAyorPrecio = marca;
						fabricanteJabonCaro = fabricante;
						acumJabones = acumJabones + cantidad;
						bandera = 1;
						contadorJabon++;

					} break;

				}

			case "alcohol":
				{
					acumAlcohol = acumAlcohol + cantidad;
					contadorAlcohol++;
				} break;

			case "barbijo":
				{
					acumBarbijo = acumBarbijo + cantidad;
					contadorbarbijo++;

				} break;

		}


		respuesta = prompt("Desea ingresar otro dato(s/n):");
	} while (respuesta == "s");

	if (acumAlcohol > acumBarbijo && acumAlcohol > acumJabones) {

		promedio = acumAlcohol / contadorAlcohol;
		document.write("El producto con más unidades es alcohol y el promedio por compre es de: " + promedio);
	}
	else if (acumBarbijo > acumJabones && acumBarbijo > acumAlcohol) {
		promedio = acumBarbijo / contadorbarbijo;
		document.write("El producto con más unidades es barbijo y el promedio por compre es de: " + promedio);
	}
	else {
		promedio = acumJabones / contadorJabon;
		document.write("El producto con más unidades es jabón y el promedio por compre es de: " + promedio);
	}


	document.write("El jabon más caro es: " + nomJabonMAyorPrecio + "con cantidad: " + acumJabones + "y fabricante " + fabricanteJabonCaro);
	document.write("El número total de barbijos es: " + acumBarbijo);

}
