/*
Debemos lograr tomar un nombre con 'prompt' 
y luego mostrarlo por 'alert' al presionar el botón  'mostrar'*/
function mostrar()
{ 
	//const Cnombre= "pepe"; , a la constante se le asigna si o si un valor inicial.
	//no cambia, se mantiene. sirve para usar Cnombre siempre
	// declarar variable
	var vNombre;
	var vApellido;

	// asignacion
	//ejem: vNombre = "Hugo";

	vNombre = prompt("Nombre","Ingrese un Nombre");//asignando con = prompt a vNombre
	//la funcion promp devuelve algo y este resultado 
	//se guarda en una variable... pa usar después

	alert(vNombre);//alert solo muestra o hace, no devuelve como el promp

   // vApellido = prompt("Ingrese Apellido");
	
	//alert(vApellido);
	//vNombre = "Sol"; //Pisar variable, poner otro valor en la variable.

	//alert(vNombre;)
}

//variables y constantes se declaran al ppio, es buena practica.