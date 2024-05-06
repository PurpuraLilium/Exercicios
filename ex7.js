let price = prompt("Digite o valor da compra:")
price = eval (price)

dez = price  * 0.1
vinte = price * 0.2

if (price > 100.0 && price <= 200.0){
    price = price - dez
}

else if (price > 200.0){
    price = price - vinte
}

console.log("O valor final da sua compra é de: R$", price)