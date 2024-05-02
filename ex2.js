//Escreva um programa que solicita ao usuário um número de 1 a 7 representando um dia da semana e exibe o nome correspondente a esse dia. Considere que 1 representa segunda-feira, 2 representa terça-feira e assim por diante.

let dia = prompt("Digite o numero correspondende ao dia da semana")

if( dia === "1"){
    console.log("É segunda-feira.")
}

else if (dia === "2"){
    console.log("É terça-feira.")
}

else if (dia === "3") {
    console.log("É quarta-feira.")
}

else if (dia === "4"){
    console.log("É quinta-feira.")
}
else if (dia === "5"){
    console.log("É sexta-feira.")
}
else if (dia === "6"){
    console.log("É sábado.")
}
else if (dia === "7"){
    console.log("É domingo.")
}

else{
    console.log("Dia invalido.")
}