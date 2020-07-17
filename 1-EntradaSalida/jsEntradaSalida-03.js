/*
Debemos lograr tomar un dato por 'ID'
y luego mostrarlo por 'Alert' al presionar el botón  'mostrar'*/
function mostrar()
{
  var vNombre;
  
	// document  permite accder al HTML, parece pero no es una funcion.
	// getElementById tomar algo de... 
	//.value acceder al valor de "txtIdNombre"
	vNombre = document.getElementById("txtIdNombre").value;
	//.value obtenemos el valor de la cajita de texto (para escribir o leer)
	alert(vNombre); 



}


