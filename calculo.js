var valor1 = null;
var valor2 = null;

function obtenerValores() {
    valor1 = document.getElementsByName("num1")[0].value;
    valor2 = document.getElementsByName("num2")[0].value;
}

function suma() {
    obtenerValores();
    var resultado = parseInt(valor1) + parseInt(valor2);
    alert("El resultado es " + resultado);
}

function multi() {
    obtenerValores();
    var resultado = parseInt(valor1) * parseInt(valor2);
    alert("El resultado es " + resultado);
}

function division() {
    obtenerValores();
    var resultado = parseInt(valor1) / parseInt(valor2);
    alert("El resultado de la división es " + resultado);
}

function resta() {
    obtenerValores();
    var resultado = parseInt(valor1) - parseInt(valor2);
    alert("El resultado de la resta es " + resultado);
}