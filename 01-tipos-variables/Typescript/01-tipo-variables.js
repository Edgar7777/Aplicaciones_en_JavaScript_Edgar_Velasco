var segundoNombre = 'Edgar';
var cedula = '1719891903'; //es algo que normalmente no se puede cambiar
//segundoNombre = any 'Rene';
//cedula = '1234567897'; // da error porque es read only
var URL_POLI = 'http://www.epn.edu.ec';
//segundoNombre = 123;//duck typing
var nombre;
var edad;
var fecha = new Date();
var casado = false;
//let mascotas: object = {}
var Usuario = /** @class */ (function () {
    function Usuario(nombre, edad, cedula) {
        this.usuario = new Usuario("Edgar", 17, '132848734638');
        this.mNombre = nombre;
        this.mEdad = edad;
        this.mCedula = cedula;
    }
    Usuario.prototype.imprimirEnConsola = function () {
        //Template Strings Tilde Invertida
        console.log("El usuario se llama " + this.mNombre + "\n        la edad del usuario es " + this.mEdad + "\n        la cedula del usuario es " + this.mCedula);
    };
    return Usuario;
}());
