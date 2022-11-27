function agregarSalarioAlFamiliar(numeroDeFamiliar) {
    if (comprobarSiTrabaja(numeroDeFamiliar)) {
        const $contenedorFamiliar = document.querySelector(`.familiar-${numeroDeFamiliar}`)
        const $labelSalarioAnual = document.createElement("label");
        const $TextoSalarioAnual = document.createTextNode(`Salario anual: `);
        $labelSalarioAnual.setAttribute("for", `salario-anual-${numeroDeFamiliar}`);
        $labelSalarioAnual.appendChild($TextoSalarioAnual);
        $contenedorFamiliar.appendChild($labelSalarioAnual);

        const $inputSalarioAnual = document.createElement("input");
        $inputSalarioAnual.setAttribute("type", "number");
        $inputSalarioAnual.setAttribute("id", `salario-anual-${numeroDeFamiliar}`);
        $inputSalarioAnual.setAttribute("placeholder", "ingrese salario anual");
        $inputSalarioAnual.setAttribute("class", "salario");
        $inputSalarioAnual.setAttribute("name", "salario");
        $contenedorFamiliar.appendChild($inputSalarioAnual);
    }
}
function comprobarSiTrabaja(numeroFamiliar) {
    const $radioCheked = document.querySelector(`input[name='trabaja-${numeroFamiliar}']:checked`);
    if ($radioCheked.value === `si-trabaja-${numeroFamiliar}`) {
        return true;
    }
    else {
        return false;
    }
}

function comprobarInputRadio(numeroDelFamiliar) {
    let noTrabajan = 0;
    for (let i = 1; i <= numeroDelFamiliar; i++) {
        const $radioCheked = document.querySelector(`input[name='trabaja-${i}']:checked`);
        if (!$radioCheked) {
            noTrabajan++;
        }
    }
    if (noTrabajan === 0) {
        return true;
    }
    else {
        return false;
    }
}

function mayorSalario() {
    const $salariosDeFamiliares = document.querySelectorAll(".salario");
    let numeroMayor = Number($salariosDeFamiliares[0].value);
    for (let i = 0; i < $salariosDeFamiliares.length; i++) {
        if (numeroMayor < Number($salariosDeFamiliares[i].value)) {
            numeroMayor = Number($salariosDeFamiliares[i].value);
        }
    }
    return numeroMayor;
}

function menorSalario() {
    const $salariosDeFamiliares = document.querySelectorAll(".salario");
    let numeroMenor = Number($salariosDeFamiliares[0].value);
    for (let i = 0; i < $salariosDeFamiliares.length; i++) {
        if (numeroMenor > Number($salariosDeFamiliares[i].value)) {
            numeroMenor = Number($salariosDeFamiliares[i].value);
        }
    }
    return numeroMenor;
}
function promedioSalarioAnual() {
    const $salariosDeFamiliares = document.querySelectorAll(".salario");
    let sumaParaPromedio = 0;
    let promedio;
    for (let i = 0; i < $salariosDeFamiliares.length; i++) {
        sumaParaPromedio += Number($salariosDeFamiliares[i].value);
    }
    promedio = sumaParaPromedio / $salariosDeFamiliares.length;
    return promedio;
}
function promedioSalarioMensual() {
    const mesesDelAnio = 12;
    let promedoMensual = promedioSalarioAnual() / mesesDelAnio;
    return promedoMensual;
}

