/*
1)De 5  personas que ingresan al hospital se deben tomar y
validar los siguientes datos.
nombre , temperatura, sexo y edad.
a)informar la cantidad de personas de cada sexo.
b)la edad promedio en total
c)la mujer con más temperatura(si la hay)
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	let edad;
	let edadPromedio;
	let mayorTemperatura;
	let mayorTemperaturaNombre;
	let nombre;
	let sexo;
	let temperatura;
	let acumEdades = 0;
	let hombres = 0;
	let mujeres = 0;
	let flag = 0;

	for(let i = 0; i < 5; i++){
		nombre = prompt("Ingrese el nombre");
		while(nombre == "" || !(isNaN(nombre))){
			nombre = prompt("Error! Ingrese un nombre valido");
		}
		temperatura = parseFloat(prompt("Ingrese la temperatura"));
		while(temperatura <= 0 || isNaN(temperatura)){
			temperatura = parseFloat(prompt("Error! Ingrese una temperatura valida(mayor a 0)"));
		}
		edad = parseInt(prompt("Ingrese la edad"));
		while(edad <= 0 || isNaN(edad)){
			edad = parseInt(prompt("Error! Ingrese una edad valida(mayor a 0)"));
		}
		sexo = prompt("Ingrese el sexo(f/m)");
		while(sexo != 'f' && sexo != 'm'){
			sexo = prompt("Ingrese un sexo valido(f/m)");
		}

		switch(sexo){
			case 'f':
				mujeres ++;
				if(flag == 0){
					mayorTemperatura = temperatura;
					mayorTemperaturaNombre = nombre;
					flag = 1;
				}else if(temperatura > mayorTemperatura){					
					mayorTemperatura = temperatura;
					mayorTemperaturaNombre = nombre;
				}
				break;
			case 'm':
				hombres ++;
				break;
		}

		acumEdades = acumEdades + edad;
	}

	edadPromedio = acumEdades / 5;

	console.log(`A) Hay ${mujeres} mujeres y ${hombres} hombres`);
	console.log(`B) El promedio de las edades en total es de ${edadPromedio.toFixed(0)}`);
	if(flag == 1){
		console.log(`C) La mujer con mayor temperatura es ${mayorTemperaturaNombre} con ${mayorTemperatura}°C`);
	}else{
		console.log("C) No se han ingresado mujeres");
	}
	
}
