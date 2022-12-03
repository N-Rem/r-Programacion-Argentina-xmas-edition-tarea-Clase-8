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
    let salarios = crearArrayDeSalarios(); 
    let numeroMayor = 0;
    for (let i = 0; i < salarios.length; i++) {
        if (numeroMayor < Number (salarios[i])) {
            numeroMayor = Number (salarios[i]);
        }
    }
    return numeroMayor;
}
function menorSalario() {
    let salarios = crearArrayDeSalarios();
    let numeroMenor = Number (salarios[0]);
    
    for (let i = 0; i < salarios.length; i++) {
        if (numeroMenor > Number (salarios[i])) {
            numeroMenor = Number (salarios[i]);
        }
    }
    return numeroMenor;
}
function promedioSalarioAnual() {
    let salarios = crearArrayDeSalarios();
    let sumaParaPromedio = 0;
    let promedio;
    for (let i = 0; i < salarios.length; i++) {
        sumaParaPromedio += Number(salarios[i]);
    }
    promedio = sumaParaPromedio / salarios.length;
    return promedio;
}
function promedioSalarioMensual() {
    const mesesDelAnio = 12;
    let promedoMensual = promedioSalarioAnual() / mesesDelAnio;
    return promedoMensual;
}

