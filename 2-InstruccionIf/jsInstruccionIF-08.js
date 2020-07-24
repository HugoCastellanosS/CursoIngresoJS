function mostrar()
{
   let vEdad;
   let vEstadoc;
   vEdad=parseInt(document.getElementById("txtIdEdad").value);
   vEstadoc=document.getElementById("estadoCivil").value;

   if (vEdad>=18 && vEstadoc=="Soltero")
   {
    alert("Es soltero y no es menor");
   }
   
}//FIN DE LA FUNCIÓN