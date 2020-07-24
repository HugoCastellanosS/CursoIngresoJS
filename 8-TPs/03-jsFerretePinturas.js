/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
    let vTemp;
    let f_c;

    vTemp=parseInt(document.getElementById("txtIdTemperatura").value);
    f_c=(vTemp-32)*5/9;

    alert(f_c+" Centigrados");
}

function CentigradosFahrenheit () 
{
    let vTemp;
    let c_f;
    
    vTemp=parseInt(document.getElementById("txtIdTemperatura").value);    
    c_f=(vTemp*9/5)+32;

    alert(c_f+" Fahrenheit");
}