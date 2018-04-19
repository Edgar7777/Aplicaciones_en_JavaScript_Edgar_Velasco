//____________Deber JS _____________________

//1.- Crear una función en JavaScript que acepte como parámetro un arreglo.
//
// El nombre de la función será "validarNumeroDeStringsEnArreglo".
//
// El nombre del parámetro de la función será "arreglo".
//
// La función va a devolver un resultado que será el número total de "strings" que se encuentren en el arreglo.

//paso 1 creamos la función que se va a llamar validarNumeroDeStingsEnArreglo, que va a recibir como parámetro un arreglo

var arreglo = [1,"hola"];

function isString(parametro) {
    var i = 0;
    if (typeof parametro[i] === 'string') {
        return true;
    } else {
        return false;
    }
    i++;
}

function validarNumeroDeStingsEnArreglo(arreglo) {

    //for (var i = 0; i < arreglo.length; i++) {
    var i = 0;

    while (typeof arreglo[i] === 'string') {
        if (isString(arreglo[i]) !== 'true') {
            return arreglo.length;
        } else {
            console.log("no es un arreglo permitido")
        }
        i++;
    }
    //}
}

console.log('numero de strings del arreglo: ',validarNumeroDeStingsEnArreglo(arreglo));
