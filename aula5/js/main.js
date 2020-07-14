function soma(num1, num2){
    return num1+num2
}

let a = 8, b = 3
console.log(soma(a,b))

let divisao = function(num1, num2){
    return num1/num2
}

console.log(divisao(a,b))

let maior = function(num1, num2){
    if(num1 > num2){
        return "O primeiro valor é maior"
    }else if(num1 < num2){
        return "O segundo valor é maior"
    }else{
        return "Os valores são iguais"
    }
}

console.log(maior(b, a))