/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{

  var Num1;
  var Num2;
  //var Res;
// parseInt, tambein puede ir inicializando
  Num1 = parseInt (document.getElementById("txtIdNumeroUno").value);
  Num2 = parseInt (document.getElementById("txtIdNumeroDos").value);
  
  //parseInt(Num1)+ parseInt(Num2);
  
  //parseInt hace de un texto un número.

  //Res = Num1 + Num2;

 //alert("El resultado es " + Res)
 
 alert("La suma es " + (Num1 + Num2)); //concatena y se ahorra una variable

 
}

