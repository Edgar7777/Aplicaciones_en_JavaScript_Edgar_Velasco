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

//console.log(sumarDosNumeroVersionDos(12,13));//no vale da error
console.log(sumardosNumeros(10, 11))

var usuario = {

    "nombre": "Edgar",//se utiliza la coma para separar elementos del arreglo
    apellido: "Edgar",//en js es una buena practica no utilizar comillas dobles pero se pueden utilizar como buena pactica con comillas simples
    cedula: '1719891903',

    imprimirEnConsola: function () {
        console.log(this.nombre + " " + this.apellido + ' ' + this.cedula)
    }
};

console.log("usuario: ", usuario);

function sumardosNumeros(numeroUno, numeroDos) {
    return numeroUno + numeroDos;
}

console.log(sumardosNumeros(1, 2));


var sumarDosNumeroVersionDos = function amigo(numeroUno, numeroDos) {
    return numeroUno + numeroDos;
};


console.log(sumarDosNumeroVersionDos(1, 3))


console.log(usuario.cedula);
console.log(usuario.nombre);
console.log(usuario.apellido);
console.log(usuario.imprimirEnConsola());
console.log(usuario.imprimirEnConsola);


var arreglo = [1, 2, 3, "edgar", '20', undefined, 1, 0, -1, sumardosNumeros(1, 2)]

console.log(arreglo);




