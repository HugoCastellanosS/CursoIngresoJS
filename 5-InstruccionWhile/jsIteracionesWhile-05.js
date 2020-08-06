/*
Al presionar el botón pedir un sexo
'f' para femenino, 'm' para masculino.*/
function mostrar() {
	let vSexo;

	do {
		vSexo = prompt("ingrese f ó m .").toUpperCase();
		document.getElementById("txtIdSexo").value = vSexo

	} while (!(vSexo == "F" || vSexo == "M"));
	

}//FIN DE LA FUNCIÓN