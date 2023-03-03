/*
o if e o else são estruturas de código condicionaois, neste caso, o if
espera que uma condição seja executado caso não ocorra com sucesso a
condição do if o bloco do else será executado
*/

let nota = 20;

if (nota >= 7 && nota <= 10) {
  console.log("passou de ano");
} else if (nota < 7 && nota >= 0) {
  console.log("aluno reprovado");
} else {
  console.log("a nota informada não foi aceita");
}

/*Atividade IMC*/
let peso = 130;
let altura = 1.8;
let imc = peso / (altura * altura);

if (imc < 18.5) {
  console.log("O indivídio está abaixo do peso");
} else if (imc > 18.5 && imc < 24.9) {
  console.log("O indivídio está com o peso ideal");
} else if (imc > 25 && imc < 29.9) {
  console.log("O indivídio está com excesso de peso");
} else if (imc > 30 && imc < 34.9) {
  console.log("O indivídio apreseta obesidade classe I");
} else if (imc > 35 && imc < 39.9) {
  console.log("O indivídio apreseta obesidade classe II");
} else if (imc >= 40) {
  console.log("O indivídio apreseta obesidade classe III");
}
