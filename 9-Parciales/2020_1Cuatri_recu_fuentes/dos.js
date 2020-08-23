/*
De una compra debes ingresar una cantidad indeterminada de productos,
validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más liviano de los sólidos
*/

function mostrar()
{
  
  let marca;
  let precio=0;
  let peso=0;
  let tipo;
  let respuesta="s";
  let precioMayor=0;
  let marcaMasCaroLiquidos;
  let marcaMasLivianodeSolidos;
  let pesoMenor=0;

  let acumMarca=0;
  let acumPeso=0;
  let acumPrecio=0;
  let acumSolidos=0;
  let acumLiquidos=0;
  let acumPesoTotal=0;

  do 
  {
    marca=prompt("Ingrese marca: ");
    precio=parseInt(prompt("Ingrese precio: "));
    peso=parseInt(prompt("Ingrese peso en kilogramos: "));
    tipo=prompt("ingrese si es sólido o liquido: ");
    


    switch(tipo)
    {
      case "solido":
            if(pesoMenor<peso)
            {
              pesoMenor=peso;
              marcaMasLivianodeSolidos=marca;

            }
            acumSolidos=acumSolidos+peso;
      break;

      case "liquido":
            if(precioMayor>precio)
            {
              precioMayor=precio;
              marcaMasCaroLiquidos=marca;

            }
            acumLiquidos=acumLiquidos+peso;
      break;
    }
    
    respuesta=prompt("Desea ingresar otro dato? (s/n)");
  } while (respuesta=="s");

  acumPesoTotal=acumLiquidos+acumSolidos

  document.writeln("El peso total de la compra es: "+acumPesoTotal);
  document.writeln("La marca del mas caro de los liquidos es: "+marcaMasCaroLiquidos);
  document.writeln("La marca del más liviano de los sólidos es: "+marcaMasLivianodeSolidos);


}
