/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	 
	var Num1   //no usar variables globales.
	var Num2   //siempre declarar variables

	Num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	Num2 = parseInt(document.getElementById("txtIdNumeroDos").value);


	alert("la Suma es " + (Num1 + Num2));

}

function restar()
{
	var Num1 // scope... donde vive mi variable
	var Num2

	Num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	Num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	
	alert("la Resta es " + (Num1 - Num2));
}

function multiplicar()
{ 
	
	var Num1
	var Num2

	Num1 = parseInt(document.getElementById("txtIdNumeroUno").value);
	Num2 = parseInt(document.getElementById("txtIdNumeroDos").value);
	alert("la Multiplicación es " + (Num1 * Num2));
}

function dividir()
{
	
	var Num1
	var Num2

	//parseFloat x q transforma ese texto a decimal... por si es número decimal

	Num1 = parseFloat(document.getElementById("txtIdNumeroUno").value);
	Num2 = parseFloat(document.getElementById("txtIdNumeroDos").value);


	alert("la División es " + (Num1 / Num2).toFixed(2));

	//jerarquia operadores () * / % + -
	//parentesis se resuelve de adentro hacia afuera
	//toFixed es para decidir cuantos decimales post coma
}



