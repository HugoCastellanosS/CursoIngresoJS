/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
    let vPrecio1
    let vPrecio2
    let vPrecio3
    let vSuma

    vPrecio1=parseInt(document.getElementById("txtIdPrecioUno").value);
    vPrecio2=parseInt(document.getElementById("txtIdPrecioDos").value);
    vPrecio3=parseInt(document.getElementById("txtIdPrecioTres").value);

    vSuma=vPrecio1+vPrecio2+vPrecio3;

    alert("La suma es: "+vSuma);
	
}
function Promedio () 
{
	let vPrecio1
    let vPrecio2
    let vPrecio3
    let vPromedio

    vPrecio1=parseInt(document.getElementById("txtIdPrecioUno").value);
    vPrecio2=parseInt(document.getElementById("txtIdPrecioDos").value);
    vPrecio3=parseInt(document.getElementById("txtIdPrecioTres").value);

    vPromedio=(vPrecio1+vPrecio2+vPrecio3)/3;

    alert("El promedio es: "+vPromedio);
}
function PrecioFinal () 
{
	let vPrecio1
    let vPrecio2
    let vPrecio3
    let vSuma
    let vPreciof
    let vIVA

    vPrecio1=parseInt(document.getElementById("txtIdPrecioUno").value);
    vPrecio2=parseInt(document.getElementById("txtIdPrecioDos").value);
    vPrecio3=parseInt(document.getElementById("txtIdPrecioTres").value);
    vPreciof=parseInt(vPreciof);
    vIVA=parseInt(vIVA);

    vSuma=vPrecio1+vPrecio2+vPrecio3;
    vIVA=vSuma*0.21;
    vPreciof=vIVA+vSuma;

    alert("El precio final con IVA es: "+vPreciof);
}