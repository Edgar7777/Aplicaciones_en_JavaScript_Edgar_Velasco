/*
La Empresa Eléctrica Quito tiene 19 generadores de múltiples tipos.
Los primeros 4 generan 62 megawatts y los otros 15 generan 124 megawatts

La Empresa Eléctrica Quito ha decidido contratarlo a usted para diseñar un
sistema de "loops" para imprimir en consola el total de megawatts generado por cada generador con el siguiente formato:

- "Generador #1 está prendido, añadiendo 62 MW para un total de 62 MW."

- "Generador #2 está prendido, añadiendo 62 MW para un total de 124 MW."

El primer loop es requerido que sea construido con "while" administrando los 4 primeros
generadores y el segundo que sea construido con un "for" para los 15 generadores restantes.

Como una funcionalidad adicional quisieran que se puedan activar los generadores pares, impares o todos.

Es decir, en el ejemplo anterior el formato imprimiría lo siguiente para los generadores impares:

- "Generador #1 está prendido, añadiendo 62 MW para un total de 62 MW."

- "Generador #2 está apagado."
* */

function generadorMenorPotencia(){
    var i=1;
    while(i<=4){
        if(i%2===0){
            console.log("generador #"+i+" está prendido, añadiendo 62 MW para un total de 62 MW" );
            i++;
        }else{
            console.log("generador #"+i+" está apagado, añadiendo 62 MW para un total de 62 MW" );
            i++;
        }
    }
}

function generadorMayorPotencia(){
    var i;
   for(i=5 ; i<20; i++){
       if(i%2===0){
           console.log("generador #"+i+" está prendido, añadiendo 62 MW para un total de 124 MW" );

       }else{
           console.log("generador #"+i+" está apagado, añadiendo 62 MW para un total de 124 MW" );
       }
    }
}

function todosLosGeneradoresEncendidos(){
    var i=1;
    while(i<20){
        if(i<5){
            console.log("generador #"+i+" está prendido, añadiendo 62 MW para un total de 62 MW" );
            i++;
        }else{
            console.log("generador #"+i+" está prendido, añadiendo 62 MW para un total de 62 MW" );
            i++;
        }
    }
}

function todosLosGeneradoresApagados(){
    var i=1;
    while(i<20){
        if(i<5){
            console.log("generador #"+i+" está apagado, añadiendo 62 MW para un total de 62 MW" );
            i++;
        }else{
            console.log("generador #"+i+" está apagado, añadiendo 62 MW para un total de 62 MW" );
            i++;
        }
    }
}

console.log(generadorMenorPotencia());
console.log(generadorMayorPotencia());
console.log(todosLosGeneradoresEncendidos());
console.log(todosLosGeneradoresApagados());




