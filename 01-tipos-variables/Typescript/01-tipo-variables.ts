let segundoNombre = 'Edgar';
const cedula = '1719891903';//es algo que normalmente no se puede cambiar

//segundoNombre = any 'Rene';


//cedula = '1234567897'; // da error porque es read only

const URL_POLI = 'http://www.epn.edu.ec';

//segundoNombre = 123;//duck typing


let nombre: String;
let edad: 28;
let fecha: Date = new Date();
let casado: boolean = false;

//let mascotas: object = {}

class Usuario {
    public mNombre: String;//es una buena práctica  escribir la m al principio
    private mEdad: Number;
    protected mCedula: String;

    constructor(nombre: String,
                edad: Number,
                cedula: String) {
        this.mNombre = nombre;
        this.mEdad = edad;
        this.mCedula = cedula;
    }

    let
    usuario: Usuario = new Usuario("Edgar", 17, '132848734638');

    public imprimirEnConsola() {

        //Template Strings Tilde Invertida
        console.log(`El usuario se llama ${this.mNombre}
        la edad del usuario es ${this.mEdad}
        la cedula del usuario es ${this.mCedula}`);
    }

    
}