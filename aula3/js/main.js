let num1, num2, resultado

num1 = prompt('Digite um valor')
num2 = prompt('Digite outro valor')

//Operadores (+, -, *, /, %, **)
resultado = (Number(num1) + Number(num2)) * 10

//Estrutura de seleção - IF
//Operadores lógicos (==, >, >=, <, <=, !=, ===)
if(resultado > 100){
    console.log('O valor é maior do que 100')
}else if(resultado >= 0){
    console.log('O resultado não é maior do que 100, mas é positivo')
}else{
    console.log('O resultado é um valor negativo')
}

console.log(resultado)

let idade = 15
let acesso = (idade>=18) ? 'Ok' : 'Acesso negado'
console.log(acesso)