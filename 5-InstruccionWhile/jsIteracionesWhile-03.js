/*
al presionar el botón pedir la CLAVE (ayuda: es utn750)*/
function mostrar()
{
	let vClave;
	
	do
		{
			vClave = prompt("ingrese el número clave.");
			
		} while(vClave!="utn750"); // mientras esto sea verdadero, repite bucle.
	
		alert("Clave correcta.");
	
	
}//FIN DE LA FUNCIÓN
/*

 						//la dif, el do while, todas las sentecias siempre
do						se van ejecutar al menos una vez
{
sentencia 1
sentancia 2
sentencia 3
variable control
}while(condición);    //va ; porque no va llave

en el while se depnde de la condicion para entrar
en el do, entra y hace por lo menos una vez lo hace
*/