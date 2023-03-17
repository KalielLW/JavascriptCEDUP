//Função sem retorno
function imprimirSoma(a, b){
  let resultado = a + b
  console.log(resultado)
}

let numero2 = 10
let numero3 = 11

imprimirSoma(numero2, numero3)
imprimirSoma(2)
imprimirSoma(2, 5, 5, 6, 7, 5, 8, 9) //lê apenas os 2 parâmetros necessários
imprimirSoma()
//função com retorno
//parametros podem ou não receber valor por padrão
function soma(a=5, b=10){
  let resultado = console.log(a+b)
  return resultado
}

soma()


//OBJETO
//forma literal
let produto = {
              nome: 'celular',
              preco: 5000,
              desconto: 0.9
            }

produto.precoFinal = produto.preco*produto.desconto
console.log(produto)

//forma dinamica
let pessoa = {}
pessoa.nome = 'Lucas'
pessoa.idade = 22
pessoa.altura = 1.98

console.log(pessoa)
