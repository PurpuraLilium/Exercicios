let peso = parseFloat (prompt("Digite o seu peso:"))

let altura = parseFloat (prompt("Digite sua altura em metros:"))


imc = peso / (altura * altura)

if(imc < 18.5){
    console.log("abaixo do peso.")
}
else if(imc >= 18.5 && imc <= 24.9){
    console.log("peso normal.")
}
else if(imc >= 25 && imc <= 29.9){
    console.log("acima do peso.")
}
else if(imc >=30 && imc <= 34.9){
    confirm.log("obesidade tipo I.")
}
else if(imc >=35 && imc <= 39.9){
    console.log("obesidade tipo II.")
}
else if(imc >=40){
    console.log("obesidade tipo III.")
}