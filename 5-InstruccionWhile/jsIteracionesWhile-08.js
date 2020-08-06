/*
Al presionar el botón pedir  números  hasta que el usuario quiera,
sumar los que son positivos y multiplicar los negativos.*/
function mostrar()
{
	let vNum;
	//let contador=0; no necesito contador 
	let respuesta="si";
	let sumaPositivos=0;
	let multiplicacionNegativos=1;
	
	
	do
	{
		vNum=parseInt(prompt("Ingrese número: "));
		
		if(vNum>=0)
		{
			sumaPositivos=vNum+sumaPositivos;
		}
		else
		{
			multiplicacionNegativos=vNum*multiplicacionNegativos;
		}


		respuesta=prompt("INgresa otro número: si/no");

	}while(respuesta=="si");

document.getElementById("txtIdSuma").value=sumaPositivos
document.getElementById("txtIdProducto").value=multiplicacionNegativos



}//FIN DE LA FUNCIÓN