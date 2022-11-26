const $form = document.querySelector("#carta-a-santa");
$form.onsubmit = validarForm;

function validarForm(event) {
    event.preventDefault();
    borrarErrores();
    const $form = document.querySelector("#carta-a-santa");

    const nombre = $form.nombre.value;
    const ciudad = $form.ciudad.value;
    const comportamiento = $form.comportamiento.value;
    const descripcionRegalo = $form["descripcion-regalo"].value;

    const errorNombre = validarNombre(nombre);
    const errorCiudad = validarCiudad(ciudad);
    const errorComportamiento = validarComportamiento(comportamiento);
    const errorDescripcionRegalo = validarDescripcionRegalo(descripcionRegalo);

    const errores = {
        nombre: errorNombre,
        ciudad: errorCiudad,
        comportamiento: errorComportamiento,
        "descripcion-regalo": errorDescripcionRegalo,
    }

    const esExito = manejarErrores(errores) === 0;
    if (esExito) {
        $form.className = "oculto";
        document.querySelector("#exito").className = "";
        
        setTimeout(()=>{window.location.href= `/html-css/wishlist.html`}, 5000);
    }
}
function borrarErrores (){
    const $listaErrores = document.querySelectorAll("#errores li");
$listaErrores.forEach(function(item){
    item.remove();
}) }

function manejarErrores(errores) {
    const keys = Object.keys(errores);
    const $errores = document.querySelector("#errores");
    let contadorErrores = 0;
    
    keys.forEach(function (key) {
        const error = errores[key];
        if (error) {
            contadorErrores++;
            $form[key].className = "error";
            
            const $error = document.createElement("li");
            $error.innerText = error;
            $errores.appendChild($error);
        }
        else {
            $form[key].className = "";
        }
    });
    return contadorErrores;
}

function validarNombre(nombre) {
    let caracterMinimo = 1;
    let caracterMaximo = 50;
    if (nombre.length < caracterMinimo) {
        return "El nombre debe tener al menos 1 caracter";
    }
    if (nombre.length >= caracterMaximo) {
        return "El nombre debe tener menos de 50 caracteres";
    }
    if (!/^[A-z]+$/i.test(nombre)) {
        return "El nombre debe contener letras"
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
    let caracterMaximo = 100;
    if (descripcionRegalo.length < caracterMinimo) {
        return "debes ingresar algo en la descripcion del regalo.";
    }
    if (descripcionRegalo.length > caracterMaximo) {
        return "la carta no debe de tener mas de 100 caracteres";
    }
    if (!/^[A-z0-9 \ñ]+$/i.test(descripcionRegalo)) {
        return "la carta solo debe contener letras y numeros."
    }
    return "";
}

