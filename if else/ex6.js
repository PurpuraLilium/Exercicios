let ano = prompt("Digite o ano de nascimento:")
ano = eval (ano)

idade = 2024 - ano

if (idade >= 18){
    console.log("Você é maior de idade.")
}
else{
    console.log("Você é menor de idade")
}