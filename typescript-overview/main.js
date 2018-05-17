var cont = 10;
var cont2 = 20;
var PI = 3.14;
var saida = "O valor de PI \u00E9 " + PI;
var Calculadora = (function () {
    function Calculadora() {
    }
    Calculadora.prototype.soma = function (x, y) {
        var total = x + y;
        return total;
    };
    return Calculadora;
}());
var numeros = [1, 2, 3, 4];
numeros.map(function (elementoArray) {
    return elementoArray * 2;
});
numeros.map(function (elementoArray) { return elementoArray * 2; });
