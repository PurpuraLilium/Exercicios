let nota1 = prompt("Digite a primeira nota")
nota1 = eval (nota1)
let nota2 = prompt("Digite a segunda nota")
nota2 = eval (nota2)
let nota3 = prompt("Digite a terceira nota")
nota3 = eval (nota3)
let nota4 = prompt("Digite a quarta nota")
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