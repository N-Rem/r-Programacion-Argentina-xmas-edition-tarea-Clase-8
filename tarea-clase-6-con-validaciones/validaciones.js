const $formulario = document.querySelector("#formulario");

function validarFormulario(numerosDeFamiliares) {
    for (let i = 1; i <= numerosDeFamiliares; i++) {
        const nombreFamiliar = document.querySelector(`#nombre${i}`).value;
        const edadFamiliar = document.querySelector(`#edad-${i}`).value;
        const salarioFamiliar = document.querySelector(`#salario-anual-${i}`).value;
 
        const errorNombre = validarNombre(nombreFamiliar);
        const errorEdad = validarEdad(edadFamiliar);
        const errorSalarioAnual = validarSalarioAnual(salarioFamiliar);

        const errores = {
            nombre: errorNombre,
            edad: errorEdad,
            salario: errorSalarioAnual,
        }
        marcarErrores(errores);
    }
}

function marcarErrores(errores) {
    const $listaErrores = document.querySelector("#errores")
    const keys = Object.key(errores);
    keys.forEach((key) => {
        if (errores[key]) {
            $formulario[key].classList = "error";

            const $itemError = document.createElement("li");
            $itemError.innerText = errores[key];
            $listaErrores.appendChild($itemError);
        }
    })
}

function borrarErrores() {
    //borrar los errores anteriores
}



function validarCantidadFamiliares(cantidadDeFamiliares) {
    const espacioVacio = "";
    const numeroCero = 0
    if (cantidadDeFamiliares === espacioVacio || cantidadDeFamiliares === numeroCero) {
        return "el input de cantidad de familiares esta vacio";
    }
    return "";
}
function validarNombre(nombre) {
    const espacioVacio = "";
    if (nombre === espacioVacio) {
        return "El input de Nombre esta vacio";
    }
    if (!/^[A-z]+$/i.test(nombre)) {
        return "El nombre solo debe contener letras";
    }
    return "";
}
function validarEdad(edad) {
    const numeroCero = 0;
    if (edad === numeroCero) {
        return "El input de Edad esta vacio";
    }
    else if (!Number.isInteger(edad)) {
        return "La edad debe ser un numero entero";
    }
    return "";
}
function validarSalarioAnual(salario) {
    const numeroCero = 0;
    if (salario === numeroCero) {
        return "debe ingresar un salario anual."
    }
    return "";
}




