/*
al presionar el botón mostrar 10 repeticiones 
con números ASCENDENTE, desde el 1 al 10.*/
function mostrar()
{
	let i=0;  //inicializar, si es de control, contador

	while(i<10)
	{
	  i=i+1;  //i++;
	  console.log("Repetición No: "+i);
	 
	}
	console.log('fuera while');

}//FIN DE LA FUNCIÓN

/* 
WHILE (condición) //estructura igual al IF
{
	sentencia 1
	sentencia 2   //si necesitamos que se repita varias veces, depende 
	sentencia 3     de la condición
variable de control			en el IF se jecuta una vez.
					el WHILE  se jecuta mientras se de la condición.
}					tener en cueta la variable de control, setiarla
					no debo olvidar, desetear esa variable de control
					xq se repite el cod infiniti, loop, bucle sin salida
i=i+1 //acumulador
*/