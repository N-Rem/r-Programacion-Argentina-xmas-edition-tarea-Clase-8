const $agregarFamiliares = document.querySelector("#agregar-familiares");
const $agregarSalariosFamiliares = document.querySelector("#agregar-salarios-familiares");
const $calcularEdadSalarios = document.querySelector("#calcular");
const $empezarDeNuevo = document.querySelector("#empezar-de-nuevo");
const $cantidadDeFamiliares = document.querySelector("#cantidad-de-familia");
const cantidadSalarios = document.querySelectorAll(".salario").length;
$agregarFamiliares.onclick = function () {
    const cantidadDeDivFamilares = document.querySelectorAll(".div-familiar").length;
    if (cantidadDeDivFamilares > 0) {
        borrarIntegrantesAnteriores();
    }

    for (let i = 1; i <= $cantidadDeFamiliares.value; i++) {
        agregarFamiliar(i);
    }
    $calcularEdadSalarios.classList = ("boton");
    document.querySelector("#resultado-final").classList = "oculto";
    $agregarSalariosFamiliares.disabled = false;
}

$agregarSalariosFamiliares.onclick = function () {
    if (comprobarInputRadio($cantidadDeFamiliares.value)) {
        for (let i = 1; i <= $cantidadDeFamiliares.value; i++) {
            agregarSalarioAlFamiliar(i);
        }
        $agregarSalariosFamiliares.disabled = true;
    }
    else {
        alert("Completar formulario; si trabaja o no trabaja");
    }
}

$calcularEdadSalarios.onclick = function () {
    //validarFormulario($cantidadDeFamiliares.value)
    if (comprobarInputsEdadVacios($cantidadDeFamiliares.value)) {
        resultadoFinalEdad($cantidadDeFamiliares.value);
        resultadoFinalSalario();
        document.querySelector('#resultado-final').classList = "";
    }
    else {
        alert("partes del formulario sin completar");
    }
}

function resultadoFinalEdad(numerosDeFamiliares) {
    const $edadMayor = document.querySelector("#edad-mayor");
    const $edadMenor = document.querySelector("#edad-menor");
    const $edadPromedio = document.querySelector("#edad-promedio");
    $edadMayor.textContent = mayorEdad(numerosDeFamiliares);
    $edadMenor.textContent = menorEdad(numerosDeFamiliares);
    $edadPromedio.textContent = promedioEdad(numerosDeFamiliares);
}

function resultadoFinalSalario() {
    const $salarioMayor = document.querySelector("#salario-mayor");
    const $salarioMenor = document.querySelector("#salario-menor");
    const $salarioAnualPromedio = document.querySelector("#salario-anual-promedio");
    const $salarioMensualPromedio = document.querySelector("#salario-mensual-promedio");
    $salarioMayor.textContent = mayorSalario();
    $salarioMenor.textContent = menorSalario();
    $salarioAnualPromedio.textContent = promedioSalarioAnual();
    $salarioMensualPromedio.textContent = promedioSalarioMensual();
}

$empezarDeNuevo.onclick = function () {
    location.reload();
}

function borrarIntegrantesAnteriores() {
    const cantidadDeDivFamilares = document.querySelectorAll('.div-familiar');
    for (let i = 0; i < cantidadDeDivFamilares.length; i++) {
        cantidadDeDivFamilares[i].remove();
    }
}


