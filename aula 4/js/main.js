let numero = prompt("Digite um número")

if(Number(numero)%2==0){
    console.log("O número é par")
}else{
    console.log("O número é impar ")
}

//Loop
//for - para
for(var i = 0; i <= Number(numero); i++){
    console.log(i)
}

console.log("------------Enquanto-----------")

//while - enquanto
let cont = 0
while(cont<20){
    console.log(cont)
    cont=cont+2 //cont+=2
}

console.log("------------Do while-----------")

//do...while - faça... até que
let j = 20
do{
    console.log(j)
    j-=2
}while(j!=0)