let valor = prompt("Digite o valor a ser sacado")  //350

let resto = Number(valor) //350

while(resto >= 100){ //350 - 250 - 150 - 50
    document.write('<img src="img/100.jpg">') //1 - 1 - 1
    resto = resto - 100 //250 - 150 - 50
}

while(resto >= 50){ //50 - 0
    document.write('<img src="img/50.jpg">') //1
    resto = resto - 50 // 0
}

while(resto >= 20){ //0
    document.write('<img src="img/20.jpg">')
    resto = resto - 20
}

while(resto >= 10){ //0
    document.write('<img src="img/10.jpg">')
    resto = resto - 10
}

while(resto >= 5){ //0 
    document.write('<img src="img/5.jpg">')
    resto = resto - 5
}

while(resto >= 2){ //0
    document.write('<img src="img/2.jpg">')
    resto = resto - 2
}

if(resto > 0) {
    document.write("<br /><br />Sobrou R$ "+resto.toFixed(2)+", o valor será devolvido para a sua conta")
}