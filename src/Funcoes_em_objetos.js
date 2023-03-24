//Armazenando uma função em uma variável
let imprimirSoma = function(a, b){
    console.log(a + b)
}

imprimirSoma(2, 3)
//armazenando uma funcao arrow em uma variável
const soma = (a, b) =>{
   return a + b
}

//função Arrow

let num1
let num2

let somar = () =>{
let resultado = console.log(num1 + num2)
}

somar(num1 = 10, num2 = 20)

//funcao arrow reduzida 
const subtração = (a, b) => a - b

//funções armazenadas dentro de objetos
let calculadora = {
    divide: function(a, b){
        console.log(a/b)
    }
let calculadora = {
    soma: function(a, b){
        console.log(a+b)
    }
let calculadora = {
    subtrai: function(a, b){
        console.log(a-b)
    }
let calculadora = {
    multiplica: function(a, b){
        console.log(a*b)
    }
}
calculadora.divide(100,10)
calculadora.soma(15,20)
calculadora.subtrai(5,2)
calculadora.multiplica(60,20)
