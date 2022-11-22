$formulario = document.querySelector("#carta-a-santa");
nombre = $formulario.nombre.value;
ciudad = $formulario.ciudad.value;
comportameinto = $formulario.comportamiento.value;
descripcionRegalo = $formulario["descripcion-regalo"].value;

function validarFormulario(nombre, ciudad, comportamiento, descripcionRegalo) {
    validarNombre(nombre);
    validarCiudad(ciudad);
    validarComportamiento(comportamiento);
    validarDescripcionRegalo(descripcionRegalo);
}

function validarNombre(nombre) {
    let caracterMinimo = 1;
    let caracterMaximo = 50;
    if (nombre.length < caracterMinimo) {
        return "Este campo debe tener al menos 1 caracter";
    }
    if (nombre.length >= caracterMaximo) {
        return "Este campo debe tener menos de 50 caracteres";
    }
    return "";
}

function validarCiudad(ciudad) {
    let stringVacio = 0;
    if (ciudad <= stringVacio) {
        return "Debe elegir una ciudad";
    }
    return "";
}

function validarComportamiento(comportamiento) {
    let noChekeado = 0;
    if (comportamiento.length <= noChekeado) {
        return "Elegí un Comportamiento";
    }
    return "";
}

function validarDescripcionRegalo(descripcionRegalo) {
    let caracterMinimo = 1;
    let caracterMaximo = 211;
    if (descripcionRegalo.length < caracterMinimo) {
        return "debes ingresar algo en la descripcion del regalo.";
    }
    if (descripcionRegalo.length > caracterMaximo) {
        return "la carta no debe de tener mas de 100 caracteres";
    }
    return "";
}

