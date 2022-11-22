function crearStringLargos(longitudString) {
    let string = "";
    for (let i = 0; i < longitudString; i++) {
        string += 1;
    }
    return string;
}

function probarValidarNombre() {
    console.assert(validarNombre("") === "Este campo debe tener al menos 1 caracter", "validarNombre no valido que el Nombre no sea un string vacío");
    console.assert(validarNombre(crearStringLargos(50)) === "Este campo debe tener menos de 50 caracteres", "validarNombre no valido que el Nombre no sea igual a 50 caracteres");
    console.assert(validarNombre(crearStringLargos(51))=== "Este campo debe tener menos de 50 caracteres", "validarNombre no valido que el Nombre no sea mayor a 50 caracteres");
    console.assert(validarNombre("Nicolas") === "", "ValidarNombre Fallo con un nombre valido");
}


function probarValidarCiudad() {
    console.assert(validarCiudad("") === "Debe elegir una ciudad", "validarCiudad no valido que no se seleccionar una ciudad");
    console.assert(validarCiudad("Chaco") === "", "validarCiudad fallo con una ciudad validad");
}

function probarValidarComportamiento() {
    console.assert(validarComportamiento("") === "Elegí un Comportamiento", "validarComportamiento no valido que se dejára incompleto el input comportamiento");
    console.assert(validarComportamiento("bueno") === "", "validarComportamiento fallo con un comportamiento valido");
}

function probarValidarDescripcionRegalo() {
    console.assert(validarDescripcionRegalo("") === "debes ingresar algo en la descripcion del regalo.", "validarDescripcionRegalo no valido que no sea un String vacío");
    console.assert(validarDescripcionRegalo(crearStringLargos(101)) === "la carta no debe de tener mas de 100 caracteres", "validarDescripcionRegalo no valido que no sea un String mayor a 100 caracteres");
    console.assert(validarDescripcionRegalo(crearStringLargos(80)) === "", "validarDescripcionRegalo fallo con un string valido");
}

function probarValidaciones (){
    probarValidarNombre();
    probarValidarCiudad();
    probarValidarComportamiento();
    probarValidarDescripcionRegalo();
}
