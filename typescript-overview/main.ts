var cont = 10;

let cont2 = 20;

const PI = 3.14;

let saida = `O valor de PI é ${PI}`;

class Calculadora{
    soma(x:number,y:number): number{
        let total = x + y;
        return total;
    }

    soma2(x,y){
        let total = x + y;
        return total;
    }
}

let numeros = [1,2,3,4];

numeros.map(function(elementoArray){
    return elementoArray * 2; 
    });

numeros.map(elementoArray => elementoArray * 2);

