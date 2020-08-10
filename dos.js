/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más liviano de los sólidos
*/function mostrar()
{
  let marca;
  let marcaCaraLiquidos;
  let marcaLivianaSolidos;
  let peso;
  let pesoSolidos;
  let precio;
  let precioLiquidos;
  let seguir;
  let tipo;
  let pesoTotal = 0;
  let flagLiquidos = 0;
  let flagSolidos = 0;

  do{
    marca = prompt("Ingrese la marca");
    while(marca == ""){
      marca = prompt("Error! Ingrese la marca");
    }
    precio = parseFloat(prompt("Ingrese el precio"));
    while(precio <= 0 || isNaN(precio)){
      precio = parseFloat(prompt("Error! Ingrese un precio valido(mayor a 0)"));
    }
    peso = parseFloat(prompt("Ingrese el peso"));
    while(peso <= 0 || isNaN(peso)){
      peso = parseFloat(prompt("Ingrese un peso valido(mayor a 0)"));
    }
    tipo = prompt("Ingrese el tipo(liquido o solido)");
    while(tipo != "solido" && tipo != "liquido"){
      tipo = prompt("Ingrese un tipo valido(liquido o solido sin mayuscula)");
    }

    pesoTotal = pesoTotal + peso;

    if(tipo == "liquido"){
      if(flagLiquidos == 0){
        marcaCaraLiquidos = marca;
        precioLiquidos = precio;
        flagLiquidos = 1;
      }else if(precio > precioLiquidos){
        marcaCaraLiquidos = marca;
        precioLiquidos = precio;
      }
    }else{
      if(flagSolidos == 0){
        marcaLivianaSolidos = marca;
        pesoSolidos = peso;
        flagSolidos = 1;
      }else if(peso < pesoSolidos){
        marcaLivianaSolidos = marca;
        pesoSolidos = peso;
      }
    }

    seguir = prompt("Desea agregar otro producto?(s/n)");
    while(seguir != 's' && seguir != 'n'){
      seguir = prompt("Error! Desea agregar otro producto?(s/n)");
    }
  }while(seguir == 's');

  console.log(`A) El peso total de la compra es de ${pesoTotal}Kg`);
  if(flagLiquidos == 1){
    console.log(`B) La marca mas cara de los liquidos es ${marcaCaraLiquidos} con un precio de $${precioLiquidos.toFixed(2)}`);
  }else{
    console.log("B) No se ingresaron liquidos");
  }
  if(flagSolidos == 1){
    console.log(`C) La marca mas liviana de los solidos es ${marcaLivianaSolidos} con un peso de ${pesoSolidos}Kg`);
  }else{
    console.log("C) No se ingresaron solidos");
  }
}
