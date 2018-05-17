var meuNome = 'Tiago Lopes';
var meuNomeEC5 = 'Tiago Lopes';
var PI = 3.14;
PI = 23;
var juntando = "O aluno: " + meuNomeEC5 + " sabe que o valor de PI \u00E9: " + PI;
var numeros = [1, 2, 3, 4, 5];
numeros.map(function (valor) { return valor = valor * 2; });
numeros.map(function (valor) {
    valor = valor * 2;
    return valor;
});
for (var i = 0; i >= numeros.length; i++) {
    numeros[i] = numeros[i] * 2;
}
var Calculadora = (function () {
    function Calculadora() {
    }
    Calculadora.prototype.soma = function (x, y) {
        return x + y;
    };
    return Calculadora;
}());
