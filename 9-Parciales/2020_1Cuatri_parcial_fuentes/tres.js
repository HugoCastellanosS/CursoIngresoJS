function mostrar() {
	let edad = 0;
	let nombre;
	let sexo;
	let estadoCivil;
	let TempCorporal;

	let MayorTemp = 0;
	let NomMayorTemp;

	let respuesta = "s";

	
	let acumEdadHomSolt = 0;

	let promedHomSOlt;
	
	let contadorMayViudos = 0;
	let contadorHomSoltViudo = 0;
	let contadorTerceraEdadTemp = 0;
	let contadorHomSolt = 0;


	do {
		nombre = prompt("Ingrese nombre: ");

		do {
			edad = parseInt(prompt("Ingrese edad: "));
		} while (isNaN(edad) || !(edad > 0 && edad < 100));


		do {
			sexo = prompt("Ingreses sexo(f ó m): ");
		} while (!(sexo == "f" || sexo == "m"));

		do {
			estadoCivil = prompt("Ingrese Estado civil(soltero - casado - viudo): ");
		} while (!(estadoCivil == "soltero" || estadoCivil == "casado" || estadoCivil == "viudo"));

		do {
			TempCorporal = parseFloat(prompt("Ingrese temperatura corporal: "));

		} while (isNaN(TempCorporal));


		if (TempCorporal > MayorTemp) {
			NomMayorTemp = nombre;
		}

		if (estadoCivil == "viudo" && edad >= 18) {
			contadorMayViudos++;
		}

		if (sexo == "m" && estadoCivil != "casado") {
			contadorHomSoltViudo++;
		}

		if (edad >= 60 && TempCorporal > 38) {
			contadorTerceraEdadTemp++;

		}
		if (sexo == "m" && estadoCivil == "soltero") {
			contadorHomSolt++;
			acumEdadHomSolt = acumEdadHomSolt + edad;

		}

		respuesta = prompt("Desea ingresar otro dato(s/n): ");

	} while (respuesta == "s");

	promedHomSOlt = acumEdadHomSolt / contadorHomSolt;



	document.write("Hombres solteros o viudos es: " + contadorHomSoltViudo) + "<br>";
	document.write("El número de personas de la tercera edad que tienen más de 38c de temperatura es : " + contadorTerceraEdadTemp) + "<br>";
	document.write("El promedio de edad entre los hombres solteros es: " + promedHomSOlt) + "<br>";
	document.write("El número de mayores de edad viudos es: " + contadorMayViudos) + "<br>";






	//nombre de persona con + temp.

	//Cuantos mayores de edad estan viudos

	//cantidad de hombres que hay solteor o viudos

	//cuantas personas de la 3ra edad(+de 60), tienen mas de 38de temp.

	//promedio de edad entre los hombres solteros.




}
