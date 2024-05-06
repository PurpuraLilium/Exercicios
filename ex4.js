let nota1 = parseFloat (prompt("Digite a primeira nota"))

let nota2 = parseFloat (prompt("Digite a segunda nota"))

let nota3 = parseFloat (prompt("Digite a terceira nota"))

let nota4 = parseFloat (prompt("Digite a quarta nota"))
nota4 = eval (nota4)

let media = (nota1 + nota2 + nota3 + nota4)/4

console.log ("Sua media é: " , media)

if(media >= 7){
    console.log("APROVADO")
}
else if(media < 7 && media >= 5){
    console.log ("RECUPERAÇÃO")
}
else if(media < 5){
    console.log ("REPROVADO")
}