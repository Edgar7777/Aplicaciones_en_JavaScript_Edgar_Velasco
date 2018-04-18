//____________Deber JS _____________________

//1.- Crear una función en JavaScript que acepte como parámetro un arreglo.
//
// El nombre de la función será "validarNumeroDeStringsEnArreglo".
//
// El nombre del parámetro de la función será "arreglo".
//
// La función va a devolver un resultado que será el número total de "strings" que se encuentren en el arreglo.

//paso 1 creamos la función que se va a llamar validarNumeroDeStingsEnArreglo, que va a recibir como parámetro un arreglo


function validarNumeroDeStingsEnArreglo(arreglo = ["hola",2]) {

    for (var i = 0; i < arreglo.length; i++) {
        if (typeof arreglo[i] !== "object" && typeof arreglo[i] === "string") {
            return arreglo.length;
        } else {
            return 0;
        }
    }
}

console.log(validarNumeroDeStingsEnArreglo());
