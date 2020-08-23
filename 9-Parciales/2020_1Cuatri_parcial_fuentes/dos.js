function mostrar() {

  let vProducto;
  let vCantBolsas = 0;
  let AcumCal = 0;
  let AcumArena = 0;
  let AcumCemento = 0;
  let respuesta = "s";
  let vPrecioxBolsa = 0;
  let PrecioArena = 0;
  let PrecioCal = 0;
  let precioCemento = 0;
  let vDescuento;
  let vImporteBruto = 0;
  let vimporteDto = 0;
  let AcumBolsa = 0;
  let AcumCantiBolsa = 0;
  
  do {
    do {
      vProducto = prompt("Ingrese nombre de producto (arena, cal,cemento): ");
    } while (!(vProducto == "arena" || vProducto == "cal" || vProducto == "cemento"));

    vPrecioxBolsa = parseInt(prompt("Ingrese el precio x bolsa: "));

    vCantBolsas = parseInt(prompt("Ingrese la cantidad de bolsas: "));
    AcumCantiBolsa = AcumCantiBolsa + vCantBolsas;

    switch (vProducto) {
      case "arena":
        AcumArena = AcumArena + vCantBolsas;
        PrecioArena = PrecioArena + vPrecioxBolsa;
        break;

      case "cal":
        AcumCal = AcumCal + vCantBolsas;
        PrecioCal = PrecioCal + vPrecioxBolsa;
        break;

      case "cemento":
        AcumCemento = AcumCemento + vCantBolsas;
        precioCemento = precioCemento + vPrecioxBolsa;

        break;

    }

    AcumBolsa = AcumArena + AcumCal + AcumCemento;
    vImporteBruto = AcumArena * PrecioArena + AcumCal * PrecioCal + AcumCemento * precioCemento;


    respuesta = prompt("Quiere ingresar otro producto(s/n): ")

  } while (respuesta == "s");

  //A 
  alert("El importe total a pagar, bruto sin dto es: " + vImporteBruto);

  if (AcumBolsa > 10 && AcumBolsa <= 30) {

    vDescuento = vImporteBruto * 0.15;
    vimporteDto = vImporteBruto - vDescuento;


    alert("El precio x bolsa, con el 15% de descuento es de : " + vimporteDto);
  }
  else if (AcumBolsa > 30) {
    vDescuento = vImporteBruto * 0.25;
    vimporteDto = vImporteBruto - vDescuento;
    alert("El precio x bolsa, con el 25% de descuento es de : " + vimporteDto);
  }



  //D
  if (AcumArena > AcumCemento && AcumArena > AcumCal) {

    alert("El Tipo con más contaidad es arena");
  }
  else if (AcumCemento > AcumArena && AcumCemento > AcumCal) {
    alert("El Tipo con más contaidad es Cemento");
  }
  else {
    alert("El Tipo con más contaidad es Cal");
  }


  //F

  if (PrecioArena > precioCemento && PrecioArena > PrecioCal) {

    alert("El Tipo más caro es arena");
  }
  else if (precioCemento > PrecioArena && precioCemento > PrecioCal) {
    alert("El Tipo más caro es Cemento");
  }
  else {
    alert("El Tipo más caro es Cal");
  }




  //a, importe total a pagar, bruto sin dto
  //b, imp. total con dto
  //c,tipo con mas cant de bolsas 
  //d, el tipo mas caro


}
