let n1 = prompt("Digite o primeiro numero:")
nota1 = eval (n1)
let n2 = prompt("Digite o segundo numero:")
nota2 = eval (n2)
let n3 = prompt("Digite o terceiro numero:")
nota3 = eval (n3)

if(n1 < n2 && n2 < n3){
    console.log("Os numeros estão em ordem crescente.")
}
else{
    console.log("Os numeros não estão em ordem.")
}