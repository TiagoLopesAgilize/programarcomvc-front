

var meuNome = 'Tiago Lopes';

let meuNomeEC5 = 'Tiago Lopes';
const PI = 3.14;

let juntando = `O aluno: ${meuNomeEC5} sabe que o valor de PI é: ${PI}`;

let numeros = [1,2,3,4,5];

numeros.map(valor => valor = valor * 2);

numeros.map(function(valor){
    valor = valor * 2;
    return valor;
});

for(let i = 0; i >= numeros.length; i++){
    numeros[i] = numeros[i] * 2;
}


class Calculadora {
    soma(x:number, y:number): number{
        return x + y;
    }
}

