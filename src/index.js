let numero = 1

{
  let numero = 2
  console.log('dentro = ', numero)
}

console.log('fora =', numero)



var numero1 = 1

{
  var numero1 = 2
  console.log('dentro1 =', numero1)
}

console.log('fora1 =', numero1)



const numero2 =  10
numero2 = 11

console.log(numero2)

let numero = 10
let numero2 = 20
let numero3 = 10 + 20
let numero4 = 50

let soma = numero + numero2
let sub = numero - numero2
let div = numero / numero2
let mult = numero * numero2
let numero5 = numero4

console.log(soma)
console.log(sub)
console.log(div)
console.log(mult)
console.log(numero3)
console.log(numero5)

let a = 7
let b = 3

//atribuição aditiva
b += a //b = b + a
console.log(b)

b -= a //b = b - a
console.log(b)

b *= a //b = b * a
console.log(b)

b /= a //b = b / a
console.log(b)

b %= 2 //b = b % 2
console.log(b)

function compras(trabalho1, trabalho2){
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv50 = trabalho1 && trabalho2
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete //negação
    return {comprarSorvete, comprarTv50, comprarTv32, manterSaudavel}
}

console.log(compras(false,false))

console.log(compras(false, false));

console.log("(01)", "1" == 1);

console.log("(02)", "1" === 1); //Se o valor é extritamente igual, o valor e o tipo

console.log("(03)", "1" != 1);

console.log("(04)", "3" !== 3); //Se o valor é extritamente diferente

console.log("(05)", 5 > 1);

console.log("(06)", 5 < 1);

console.log("(07)", 5 >= 1);

console.log("(08)", 5 <= 1);
