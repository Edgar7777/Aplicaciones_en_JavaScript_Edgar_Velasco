/*El Ministerio del Ambiente ha empezado un proyecto que va a aumentar la población de osos de anteojos.
Cada mes han calculado que la población de osos se va a aumentar por 4 (x 4).
El Ministerio del Ambiente quiere que se imprima en consola dependiendo de un número de meses
el número de osos de anteojos que han aumentado cada mes hasta el mes definido con el siguiente formato.

- "Van a existir 16 osos de anteojos después del mes 1."

- "Van a existir 64 osos de anteojos después del mes 1."

El Ministerio también se ha dado cuenta que el crecimiento de los osos de anteojos es alto
y quisieran que si el total de número de ojos sobrepasa los 10.000 osos de anteojos se tome solamente la mitad de ese valor
y se siga calculando el valor para el siguiente mes.
Si esto sucede se debe de recalcular el número de ojos y mostrar este mensaje en pantalla:

*/


function calculoDeOsosAnteojos(numeroMeses) {
    var i = 1;
    var j = 1;
    var numeroOsos=4;
    while (i <= numeroMeses) {
        if (numeroOsos <= 10000) {
            console.log('Van a existir ' + numeroOsos + ' osos de anteojos despues del mes ' + j);
            numeroOsos=4*numeroOsos;
            i++

        } else {
            numeroOsos = numeroOsos / 2;
            j++;
            console.log('se han removido '+ numeroOsos + ' osos de anteojos de la población');
            console.log('van a existir '+ numeroOsos +' osos de anteojos despue del mes '+j);
        }
    }

}

console.log(calculoDeOsosAnteojos(10));