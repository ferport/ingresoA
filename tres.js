/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones,
validando los datos ingresados. 
nombre del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el nombre del titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
	let cantidadLugarElegido;
	let cantidadPersonas;
	let lugar;
	let lugarMasElegido;
	let temporada;
	let masPasajeros;
	let promedio;
	let seguir;
	let titular;
	let titularMasPasajeros;
	let acumPersonas = 0;
	let bariloche = 0;
	let cataratas = 0;
	let contadorInvierno = 0;
	let salta = 0;
	let flag = 0;

	do{
		titular = prompt("Ingrese el nombre del titular");
		while(titular == "" || !(isNaN(titular))){
			titular = prompt("Error! Ingrese un nombre valido");
		}
		lugar = prompt("Ingrese el destino deseado(“bariloche”, “cataratas” o “salta”)");
		while(lugar != "bariloche" && lugar != "cataratas" && lugar != "salta"){
			lugar = prompt("Error! Ingrese un destino valido(“bariloche”, “cataratas” o “salta” sin mayuscula)");
		}
		temporada = prompt("Ingrese la temporada deseada(“otoño”,”invierno, “verano,”primavera”)");
		while(temporada != "otoño" && temporada != "invierno" && temporada != "verano" && temporada != "primavera"){
			temporada = prompt("Error! Ingrese una temporada valida(“otoño”,”invierno, “verano,”primavera” sin mayuscula)");
		}
		cantidadPersonas = parseInt(prompt("Ingrese la cantidad de pasajeros"));
		while(cantidadPersonas <= 0 || isNaN(cantidadPersonas)){
			cantidadPersonas = parseInt(prompt("Error! Ingrese una cantidad de pasajeros valida(mayor a 0)"));
		}

		switch(lugar){
			case "bariloche":
				bariloche ++;
				break;
			case "cataratas":
				cataratas ++;
				break;
			case "salta":
				salta ++;
				break;
		}

		if(flag == 0){
			masPasajeros = cantidadPersonas;
			titularMasPasajeros = titular;
			flag = 1
		}else if(cantidadPersonas > masPasajeros){
			masPasajeros = cantidadPersonas;
			titularMasPasajeros = titular;
		}

		if(temporada == "invierno"){
			contadorInvierno ++;
			acumPersonas = acumPersonas + cantidadPersonas;
		}



		seguir = prompt("Desea ingresar otra estadia?(s/n)");
		while(seguir != 's' && seguir != 'n'){
		  seguir = prompt("Error! Desea agregar otro producto?(s/n)");
		}
	}while(seguir == 's');

	if(bariloche > cataratas && bariloche > salta){
		lugarMasElegido = "Bariloche";
		cantidadLugarElegido = bariloche;
    }else if(cataratas >= bariloche && cataratas > salta){
		lugarMasElegido = "Cataratas";
		cantidadLugarElegido = cataratas;
    }else{
		lugarMasElegido = "Salta";
		cantidadLugarElegido = salta;
	}
	
	promedio = acumPersonas / contadorInvierno;

	console.log(`A) El lugar mas elegido es ${lugarMasElegido},lo eligieron ${cantidadLugarElegido} personas`);
	console.log(`B) El nombre del titular que lleva mas pasajeros es ${titularMasPasajeros} y lleva ${masPasajeros} personas`);
	if(contadorInvierno != 0){
		console.log(`C) En invierno el promedio de personas por viaje es de ${promedio.toFixed(0)}`);
	}else{
		console.log("C) No se hicieron viajes en invierno"); 
	}
}
