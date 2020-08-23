
function mostrar()
{
	let vPrecio=0;
	let vTipo;
	let vCant=0;
	let vMarca;
	let vFabricante;
	let contJabon=0;
	let contAlcohol=0;
	let contBarbijo=0;
	let vPrecioMin=0;
	let respuesta="s";
	let vPrecioAlcoholBarato=0;
	let acumAlcohol=0;
	let	acumjabon=0;
	let	acumbarbijo=0;
	let vFabrAlcoholBara;
	let vPromedio;
	let bandera=0;
	
	do
	{

		do
		{
			vTipo=prompt("Ingrese un producto: ");
		}while(!(vTipo=="barbijo"||vTipo=="jabon"||vTipo=="alcohol"));

		do
		{
			vPrecio=parseInt(prompt("Ingrese precio entre 100 y 300: "));

		}while(!(vPrecio>=100 && vPrecio<=300));

		do
		{
			vCant=parseInt(prompt("Ingrese cantidad: "));
		}while(!(vCant>0 && vCant<=1000));

		vMarca=prompt("INgrese Marca: ");

		vFabricante=prompt("Ingrese Fabricante: ");


		
		switch(vTipo)
		{
			case "alcohol":
				acumAlcohol=acumAlcohol+vCant;

				if(bandera==0 || vPrecioAlcoholBarato > vPrecio)
				{
					vPrecioAlcoholBarato=vPrecio;
					contAlcohol=vCant;
					vFabrAlcoholBara=vFabricante;
					bandera=1;
				}break;
			
			case"barbijo":
			{
				acumbarbijo=vCant;
				contBarbijo++;
			}break;

			case "jabon":
			{
				acumjabon=acumjabon+vCant;
				contJabon++;
			}break;

		}



		if(acumAlcohol>acumbarbijo && acumAlcohol>acumjabon)
		{
			
			vPromedio=acumAlcohol/contAlcohol;
		}

    	
	

		
	
		respuesta = prompt("Quiere ingresar otro? s/n");

  	}while(respuesta=="s");

alert("El alcohol más barato es: "+ vPrecioMin+ "y la marca es: " + vMarca );




}
