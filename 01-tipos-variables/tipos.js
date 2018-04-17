var nombre = "28";
var edad = 28
var fecha = new Date();
var casado = false; // true
console.log(casado ? "Verdadero" : "Falso");
var casa = undefined;
console.log(casa ? "Verdadero" : "Falso");
var arreglo = []
console.log(arreglo ? "Verdadero" : "Falso");
//if else rapido
var carro = null;
console.log(carro ? "Verdadero" : "Falso");

console.log(1 ? "Verdadero" : "Falso");
console.log(0 ? "Verdadero" : "Falso");
console.log(-1 ? "Verdadero" : "Falso");


console.log(fecha)
//con ctrl + alt + l se puede identar el codigo seleccionado

if (nombre === edad) {

    console.log("Verdadero")

} else {
    console.log("falso")
}



/////////////////////json}

var usuario = {

    "nombre" : "Edgar",//se utiliza la coma para separar elementos del arreglo
    apellido : "Edgar",//en js es una buena practica no utilizar comillas dobles pero se pueden utilizar como buena pactica con comillas simples
    cedula: '1719891903'
};

console.log("usuario: " , usuario);

function sumardosNumeros(numeroUno,numeroDos){
    return numeroUno+numeroDos;
}

console.log(sumardosNumeros(1,2));















