function pruebaValidarNombre() {
    console.assert(validarNombre(["Nico","Susana", "Agustin"]) === "", "validarNombre no valido un nombre correcto")
    console.assert(validarNombre(["", "nico"]) === "El input de Nombre esta vacio", "validarNombre no valido un input vacio");
    console.assert(validarNombre(["234", "nicolas", "456"]) === "El nombre solo debe contener letras", "validarNombre no valido que solo tiene que tener letras.");
}
function pruebaValidarCantidadFamiliares() {
    console.assert(validarCantidadFamiliares("2") === "", "validarCantidadFamiliares no valido correctamente el numero ingresado");
    console.assert(validarCantidadFamiliares("0") === "el input de cantidad de familiares esta vacio", "validarCantidadFamiliares no valido un input vacio.");
    console.assert(validarCantidadFamiliares("2.5") === "La cantidad de familiares no debe tener comas", "validarCantidadFamiliares no valido que el numero no tenga comas")
}
function pruebaValidarEdad() {
    console.assert(validarEdad(["58", "4"]) === "", "validarEdad no valido una edad correcta");
    console.assert(validarEdad(["", "32", ""]) === "El input de Edad esta vacio", "validarEdad no valido cuando el numero es 0");
    console.assert(validarEdad(["23","5.2","2,3"]) === "La edad debe ser un numero entero", "validarEdad no valido que el numero debe ser entero");
}

function pruebaValidarSalarioAnual (){
    console.assert(validarSalarioAnual (["150000", "123000", "100000"]) === "", "validarSalarioAnual no valido un valor correcto.");
    console.assert(validarSalarioAnual(["0",""]) === "debe ingresar un salario anual.", "validarSalarioAnual no valido un valor vacio");
}

function pruebas() {
pruebaValidarCantidadFamiliares();
pruebaValidarNombre();
pruebaValidarEdad();
pruebaValidarSalarioAnual();
}
pruebas();
