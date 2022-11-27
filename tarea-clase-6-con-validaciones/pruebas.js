function pruebaValidarNombre() {
    console.assert(validarNombre("Nico") === "", "validarNombre no valido un nombre correcto")
    console.assert(validarNombre("") === "El input de Nombre esta vacio", "validarNombre no valido un input vacio");
    console.assert(validarNombre(234) === "El nombre solo debe contener letras", "validarNombre no valido que solo tiene que tener letras.");
}
function pruebaValidarCantidadFamiliares() {
    console.assert(validarCantidadFamiliares(2) === "", "validarCantidadFamiliares no valido correctamente el numero ingresado");
    console.assert(validarCantidadFamiliares(0) === "el input de cantidad de familiares esta vacio", "validarCantidadFamiliares no valido un input vacio.");
}
function pruebaValidarEdad() {
    console.assert(validarEdad(58) === "", "validarEdad no valido una edad correcta");
    console.assert(validarEdad(0) === "El input de Edad esta vacio", "validarEdad no valido cuando el numero es 0");
    console.assert(validarEdad(5.2) === "La edad debe ser un numero entero", "validarEdad no valido que el numero debe ser entero");
}

function pruebaValidarSalarioAnual (){
    console.assert(validarSalarioAnual (150000) === "", "validarSalarioAnual no valido un valor correcto.");
    console.assert(validarSalarioAnual(0) === "debe ingresar un salario anual.", "validarSalarioAnual no valido un valor vacio");
}

function pruebas() {
pruebaValidarCantidadFamiliares();
pruebaValidarNombre();
pruebaValidarEdad();
pruebaValidarSalarioAnual();
}
pruebas();