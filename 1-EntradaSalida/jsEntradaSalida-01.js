/*
Al presionar el  botón, 
se debe mostrar un mensaje como el siguiente "Esto funciona de maravilla"
function mostrar()
{
	alert("¡Esto funciona de Maravilla!");
}
*/
function mostrar()

/* ejercicico 1 - SABADO 18 JULIO REPASO
{
    var vProducto;
    var vImporte;
    var vAumento;
    var vPreciof;
    
    vProducto=prompt("Ingrese nombre de producto: ");
    vImporte=prompt ("Ingrese importe: ");
    vAumento=prompt("Ingrese porcentaje: ");
    
    vAumento=parseInt(vAumento);
	vImporte=parseInt(vImporte);
	vPreciof=parseInt(vPreciof);
	
    vAumento=vImporte + vImporte*10/100; 
    
    vPreciof=vAumento;

    
    alert ("El producto "+vProducto+ " cuesta $"+vImporte+" sin aumento, tiene aumento de "+vAumento+" y el precio final es: $"+vPreciof+" Gracias por su compra.");
    
}*/

/*Ejercicio 2
{

	var vAncho
    var vLargo
    var vPerimetro
    var vSuperficie
    
    
    vAncho=prompt("Ingrese ancho del terreno: ");
    vLargo=prompt("Ingrese Largo del terreno: ");
    
    vAncho=parseInt(vAncho);
    vLargo=parseInt(vLargo);
    vPerimetro=parseInt(vPerimetro);
    vSuperficie=parseInt(vSuperficie);
    
    vPerimetro=vAncho+vLargo;
    vSuperficie=vAncho*vLargo;
    
    
    
    
    
    alert("El terreno tiene: "+vAncho+"x"+vLargo+" Su perimetro total es de: "+vPerimetro+" La superficie es de: "+vSuperficie);


}	*/

/*
se pide dos importes, y un porcentaje de descuento (todo con prompt)
y se muestra el siguiente mensaje:
"los productos cuestan $??? y $??? , sumados son $??? ,tienen un descuento de $??? pesos, el precio total con descuento es $??? ,el iva es de $??? y el precio final con IVA es $???"
ej: si ingresa 100 , 300 con el descuento de 30, elmensaje deberiaser el siguiente:
"los prodcutos cuestan $100 y $300 , sumados son $400, tienen un descuento de $120 pesos, el precio total con descuento es $380 ,el iva es de $79,8 y el precio final con IVA es $459,8"
//ejercicio 3 -
*/


{
   var vImport1;
   var vImport2;
   var vDto;
   var IVA;
   var vSuma;
   var vPreciof;
   var vPrecioeIVA;


   vImport1=prompt("INgrese primer importe: ");
   vImport2=prompt("Ingrese segundo importe: ");
   vDto=prompt("Ingrese un porcentaje de descuento: ");

   vImport1=parseInt(vImport1);
   vImport2=parseInt(vImport2);
   vDto=parseInt(vDto);
   IVA=parseInt(IVA);
   vSuma=parseInt(vSuma);
   vPreciof=parseInt(vPreciof);
   vPrecioeIVA=parseInt(vPrecioeIVA);


vSuma=vImport1+vImport2;
vDto=vDto*vSuma/100;
vPreciof=vSuma-vDto;
IVA=vPreciof*0.21;
vPrecioeIVA=vPreciof+IVA;







   alert("Los productos cuestan "+vImport1+" y "+vImport2+" que sumados son $"+vSuma+" tienen un descuento de $"+vDto+" pesos, el precio total con descuento es $"+vPreciof+", el iva es de $"+IVA+" y el precio final con IVA es $"+vPrecioeIVA);
   





}
