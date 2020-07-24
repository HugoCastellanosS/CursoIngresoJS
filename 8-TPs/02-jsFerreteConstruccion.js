/*2.	Para el departamento de Construcción:
A.	 mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
 let vLargo;
 let vAncho;
 let vTerreno;

 vLargo=parseInt(document.getElementById("txtIdLargo").value);
 vAncho=parseInt(document.getElementById("txtIdAncho").value);
 vTerreno=parseInt(vTerreno);

vTerreno=(vLargo+vAncho*2)/3;


alert("Se debe comprar es: "+vTerreno.toFixed(2)+"mts, de alambre.");


}
function Circulo () 
{
let vCirculo;
let vRadio;
let vPi=3.14;

vRadio=parseInt(document.getElementById("txtIdRadio").value);
vCirculo=parseInt(vCirculo);

vCirculo=vPi*(vRadio*vRadio);



alert("Se debe comprar: "+vCirculo.toFixed(2)+"mts, de alambre.");

}
function Materiales () 
{
	let vLargo;
    let vAncho;
    let vCemento;
    let vCal;
    let vidLargo;
    let vidAncho;
    
    vidAncho = document.getElementById("txtIdAncho").value;
    vidLargo = document.getElementById("txtIdLargo").value;
    vLargo = parseInt(vidLargo); 
    vAncho = parseInt(vidAncho);
    vCemento = (vLargo * vAncho) * 2;
    vCal = (vLargo * vAncho) * 3;
    
    alert("Se necesita "+vCemento+" bolsas de cemento y " +vCal+" de cal");
}