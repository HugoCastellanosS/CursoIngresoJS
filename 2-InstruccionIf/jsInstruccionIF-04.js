function mostrar()
{
	let vEdad;
	

	vEdad=parseInt(document.getElementById("txtIdEdad").value);
	
	if(vEdad<=17 && vEdad>=13) 
{
	//if(vEdad<17){alert("Ud es un adolescente");// anidar if
    // }
      
    alert("Ud es un adolescente");
} 
	


}//FIN DE LA FUNCIÓN

/*
operando   ope aritmetico operando =  resuatdo
nuemro           +/%*     numeor   =   numero

operando  op relacional    opernando  = resultado
string       = === != etc,   string        = boolean
boolean                         boolean   = boolean
numero                      numero      = boolean

*bolean (true or false)

OPERADOR LÓGICO :&&(and) ambas se cumplan
				 || (or) una de las dos
					 
expresion   op lógico  expresion =      %%     ||
   f                        f    =       f      f
   f                        v    =       f      v
   v                        f    =       f      v
   v                        v    =       v      v 
vEdad=18                vSexo=M

A     !A (notA)   
v      f
f      v

if(A)
{}

if(!A)
{}

PRIMERO SE RESUELVEN LOS OP RELACIONALES

*/