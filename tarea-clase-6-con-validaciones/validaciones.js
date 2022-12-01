const $formulario = document.querySelector("#formulario");

function validarFormulario() {
    borrarErrores();
    const nombres = crearArrayDeNombres();
    const edades = crearArrayDeEdades();

    const errorNombre = validarNombre(nombres);
    const errorEdad = validarEdad(edades);

    const errores = {
        nombre: errorNombre,
        edad: errorEdad,
    }
    if ($formulario.salario !== undefined) {
        const salarios = crearArrayDeSalarios();
        const errorSalarioAnual = validarSalarioAnual(salarios);
        errores.salario = errorSalarioAnual;
    }
    marcarErrores(errores);
}
function validarLaCantidadFamiliares() {
    borrarErrores();
    const cantidadFamiliares = $formulario["cantidad-de-familia"];
    const errorCantidadFamiliares = validarCantidadFamiliares(cantidadFamiliares.value);
    const error = { "cantidad-de-familia": errorCantidadFamiliares };
    marcarErrores(error);
}

function retornarErrores() {
    let contadorErrores = 0
    const exito = 0;
    const cantidadDeFamiliares = $formulario["cantidad-de-familia"];
    const errorCantidadFamiliares = validarCantidadFamiliares(cantidadDeFamiliares.value);
    const errores = {
        "cantidad-de-familia": errorCantidadFamiliares
    }

    if ($formulario.nombre !== undefined || $formulario.edad !== undefined) {
        const nombres = crearArrayDeNombres();
        const edades = crearArrayDeEdades();
        const errorNombre = validarNombre(nombres);
        const errorEdad = validarEdad(edades);
        errores.nombre = errorNombre;
        errores.edad = errorEdad;
    }
    if ($formulario.salario !== undefined) {
        const salario = crearArrayDeSalarios();
        const errorSalario = validarSalarioAnual(salario);
        errores.salario = errorSalario;
    }
    const values = Object.values(errores);
    for (let i = 0; i < values.length; i++) {
        if (values[i] !== "") {
            contadorErrores++
        }
    }
    if (contadorErrores > exito) {
        return true;
    }
    else {
        return false;
    }
}

function marcarErrores(errores) {
    const unElemento = 1
    const $listaErrores = document.querySelector("#errores")
    const keys = Object.keys(errores);
    keys.forEach((key) => {
        if (errores[key]) {
            if ($formulario[key].length > unElemento) {
                $formulario[key].forEach((elemento) => (elemento.classList = "error"));
            }
            else {
                $formulario[key].classList = "error"
            }

            const $itemError = document.createElement("li");
            $itemError.setAttribute("name", "error");
            $itemError.innerText = errores[key];
            $listaErrores.appendChild($itemError);
        }
        else {
            if ($formulario[key].length > unElemento) {
                $formulario[key].forEach((elemento) => { elemento.classList = ""; })
            }
            else {
                $formulario[key].classList = "";
            }
        }
    })
}

function borrarErrores() {
    const listaDeErrores = document.querySelectorAll("[name = 'error']");
    const inputs = document.querySelectorAll("input");
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].classList = "";
    }

    listaDeErrores.forEach(elemento => {
        elemento.remove();
    })
}

function validarCantidadFamiliares(cantidadDeFamiliares) {
    const espacioVacio = "";
    const numeroCero = "0";
    if (cantidadDeFamiliares === espacioVacio || cantidadDeFamiliares === numeroCero) {
        return "el input de cantidad de familiares esta vacio";
    }
    if (/[\.\,]/.test(cantidadDeFamiliares)) {
        return "La cantidad de familiares no debe tener comas";
    }
    return "";
}
function validarNombre(nombres) {
    const vacio = "";
    const noHayErrores = 0;
    let nombreVacio = 0;
    let noHaySoloLetras = 0;

    if (nombres[0] === undefined) {
        nombres.push(vacio)
    }

    for (let i = 0; i < nombres.length; i++) {
        if (nombres[i] === vacio) {
            nombreVacio++;
        }
        if (!/^[A-z]+$/i.test(nombres[i])) {
            noHaySoloLetras++;
        }
    }

    if (nombreVacio > noHayErrores) {
        return "El input de Nombre esta vacio";
    }
    if (noHaySoloLetras > noHayErrores) {
        return "El nombre solo debe contener letras";
    }
    return "";
}
function validarEdad(edad) {
    const numeroCero = "0";
    const vacio = "";
    let edadVacia = 0;
    let numeroNoEntero = 0;
    const noHayErrores = 0;

    if (edad[0] === undefined) {
        edad.push(vacio)
    }

    for (let i = 0; i < edad.length; i++) {
        if (edad[i] === numeroCero || edad[i] === vacio) {
            edadVacia++
        }
        if (/[\.\,]/.test(edad[i])) {
            numeroNoEntero++;
        }
    }
    if (edadVacia > noHayErrores) {
        return "El input de Edad esta vacio";
    }
    if (numeroNoEntero > noHayErrores) {
        return "La edad debe ser un numero entero";
    }
    return "";
}
function validarSalarioAnual(salario) {
    const numeroCero = "0";
    const vacio = "";
    const noHayErrores = 0;
    let salarioVacio = 0;

    if (salario[0] === undefined) {
        salario.push(vacio);
    }

    for (let i = 0; i < salario.length; i++) {
        if (salario[i] === numeroCero || salario[i] === vacio) {
            salarioVacio++
        }
    }

    if (salarioVacio > noHayErrores) {
        return "debe ingresar un salario anual."
    }
    return "";
}

function crearArrayDeValores(valores) {
    let arrayValores = [];

    if (valores.length > 0) {
        for (let i = 0; i < valores.length; i++) {
            arrayValores.push(valores[i].value);
        }
    }
    else {
        if (valores.value === "") {
            arrayValores.push[""];
        }
        else {
            arrayValores.push(valores.value);
        }
    }
    return arrayValores;
}
function crearArrayDeNombres() {
    const nombres = $formulario.nombre;
    return crearArrayDeValores(nombres);
}
function crearArrayDeEdades() {
    const edades = $formulario.edad;
    return crearArrayDeValores(edades);
}
function crearArrayDeSalarios() {
    const salarios = $formulario.salario;
    return crearArrayDeValores(salarios);
}


