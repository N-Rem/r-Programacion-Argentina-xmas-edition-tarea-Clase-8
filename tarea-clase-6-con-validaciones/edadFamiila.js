function agregarFamiliar(numeroDeFamiliar) {
    agregarDiv(numeroDeFamiliar);
    agregarSubtitulo(numeroDeFamiliar)
    agregarInputNombre(numeroDeFamiliar);
    agregarInputEdad(numeroDeFamiliar);
    agregarInputSiTrabaja(numeroDeFamiliar);
}

function agregarDiv(numeroDeFamiliar) {
    const $formulario = document.querySelector("#formulario");
    const $contenedorFamiliar = document.createElement("div");
    $contenedorFamiliar.classList = `familiar-${numeroDeFamiliar}`;
    $contenedorFamiliar.classList.add('div-familiar');
    $formulario.appendChild($contenedorFamiliar);
}
function agregarSubtitulo (numeroDeFamiliar){
    const $contenedorFamiliar = document.querySelector(`.familiar-${numeroDeFamiliar}`);
    const $elementoTitulo = document.createElement("h3");
    const $textoElementoTitulo = document.createTextNode(`Familiar numero ${numeroDeFamiliar}`);
    $elementoTitulo.classList = "subtitulo-familiar";
    $elementoTitulo.appendChild($textoElementoTitulo);
    $contenedorFamiliar.appendChild($elementoTitulo);
    
}
function agregarInputNombre(numeroDeFamiliar) {
    const $label = document.createElement("label");
    const $labelNombre = document.createTextNode("Nombre: ");
    const $inputNombre = document.createElement("input");
    const $contenedorFamiliar = document.querySelector(`.familiar-${numeroDeFamiliar}`)
    $label.setAttribute("for", `nombre-${numeroDeFamiliar}`)
    $label.appendChild($labelNombre);
    $contenedorFamiliar.appendChild($label);
    $inputNombre.setAttribute("id", `nombre-${numeroDeFamiliar}`);
    $inputNombre.setAttribute("class", "nombre-familiar");
    $inputNombre.setAttribute("placeholder", "nombre del familiar");
    $inputNombre.setAttribute("name", "nombre");
    $contenedorFamiliar.appendChild($inputNombre);
    const $saltoDeLinea = document.createElement("br");
    $contenedorFamiliar.appendChild($saltoDeLinea);
}
function agregarInputEdad(numeroDeFamiliar) {
    const $label = document.createElement("label");
    const $labelEdad = document.createTextNode("Edad: ");
    const $contenedorFamiliar = document.querySelector(`.familiar-${numeroDeFamiliar}`)
    $label.setAttribute("for", `edad-${numeroDeFamiliar}`);
    $label.appendChild($labelEdad);
    $contenedorFamiliar.appendChild($label);
    const $inputEdad = document.createElement("input");
    $inputEdad.setAttribute("id", `edad-${numeroDeFamiliar}`);
    $inputEdad.setAttribute("type", `number`);
    $inputEdad.setAttribute("placeholder", `edad del familiar`);
    $inputEdad.setAttribute("class", "edad-familiar");
    $inputEdad.setAttribute("name", "edad");
    $contenedorFamiliar.appendChild($inputEdad);
    const $saltoDeLinea = document.createElement("br");
    $contenedorFamiliar.appendChild($saltoDeLinea);
}
function agregarInputSiTrabaja(numeroDeFamiliar) {
    const $saltoDeLineaUno = document.createElement("br");
    const $saltoDeLineaDos = document.createElement("br");
    const $contenedorFamiliar = document.querySelector(`.familiar-${numeroDeFamiliar}`)

    const $labelSiTrabaja = document.createElement("label");
    const $textoSiTrabaja = document.createTextNode("Si Trabaja");
    $labelSiTrabaja.setAttribute("for", `si-trabaja-${numeroDeFamiliar}`);
    $labelSiTrabaja.appendChild($textoSiTrabaja);
    const $inputSiTrabaja = document.createElement("input");
    $inputSiTrabaja.setAttribute("type", "radio");
    $inputSiTrabaja.setAttribute("name", `trabaja-${numeroDeFamiliar}`);
    $inputSiTrabaja.setAttribute("id", `si-trabaja-${numeroDeFamiliar}`);
    $inputSiTrabaja.setAttribute("class", "trabajo");
    $inputSiTrabaja.setAttribute("value", `si-trabaja-${numeroDeFamiliar}`);
    $inputSiTrabaja.setAttribute("checked", "true");

    const $labelNoTrabaja = document.createElement("label");
    const $textoNoTrabaja = document.createTextNode("No Trabaja");
    $labelNoTrabaja.setAttribute("for", `no-trabaja-${numeroDeFamiliar}`);
    $labelNoTrabaja.appendChild($textoNoTrabaja);
    const $inputNoTrabaja = document.createElement("input");
    $inputNoTrabaja.setAttribute("type", "radio");
    $inputNoTrabaja.setAttribute("name", `trabaja-${numeroDeFamiliar}`);
    $inputNoTrabaja.setAttribute("id", `no-trabaja-${numeroDeFamiliar}`);
    $inputNoTrabaja.setAttribute("class", "trabajo");
    $inputNoTrabaja.setAttribute("value", `no-trabaja-${numeroDeFamiliar}`);

    $contenedorFamiliar.appendChild($labelNoTrabaja);
    $contenedorFamiliar.appendChild($inputNoTrabaja);
    $contenedorFamiliar.appendChild($saltoDeLineaUno);
    $contenedorFamiliar.appendChild($labelSiTrabaja);
    $contenedorFamiliar.appendChild($inputSiTrabaja);
    $contenedorFamiliar.appendChild($saltoDeLineaDos);
}

function comprobarInputsEdadVacios(numeroDeFamiliar) {
    let inputsVacios = 0
    const salarios = document.querySelectorAll(".salario");
    for (let i = 1; i <= numeroDeFamiliar; i++) {
        const nombre = document.querySelector(`#nombre-${i}`).value;
        const edad = document.querySelector(`#edad-${i}`).value;
        if (nombre === '' || edad === '') {
            inputsVacios++;
        }
    }
    for (let i = 0; i < salarios.length; i++) {
        if (salarios[i].value === "") {
            inputsVacios++
        }

    }
    if (inputsVacios === 0) {
        return true;
    }
    else {
        return false;
    }
}


function mayorEdad(numerosDeFamiliares) {
    let numeroMayor = 0;
    let mayores = "";
    for (let i = 1; i <= numerosDeFamiliares; i++) {
        const $edades = document.querySelector(`#edad-${i}`);
        if (numeroMayor < Number($edades.value)) {
            numeroMayor = Number($edades.value);
            mayores = document.querySelector(`#nombre-${i}`).value;
        }
    }
    const nombreEdadMayor = `${mayores}, Edad: ${numeroMayor}`;
    return nombreEdadMayor;
}

function menorEdad(numerosDeFamiliares) {
    let menores = ``;
    let numeroMenor = Number(document.querySelector("#edad-1").value);
    for (let i = 1; i <= numerosDeFamiliares; i++) {
        const $edades = document.querySelector(`#edad-${i}`);

        if (numeroMenor > Number($edades.value)) {
            numeroMenor = Number($edades.value);
        }
        if (numeroMenor === Number($edades.value)) {
            menores = document.querySelector(`#nombre-${i}`).value;
        }
    }
    const nombreEdadMenor = `${menores}, Edad: ${numeroMenor}`;
    return nombreEdadMenor;
}

function promedioEdad(numerosDeFamiliares) {
    let sumaParaPromedio = 0;
    let promedio;
    for (let i = 1; i <= numerosDeFamiliares; i++) {
        const $edades = document.querySelector(`#edad-${i}`);
        sumaParaPromedio += Number($edades.value);
    }
    promedio = sumaParaPromedio / numerosDeFamiliares;
    return promedio;
}



