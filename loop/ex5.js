// Imprimir os primeiros 10 números da sequência de Fibonacci.

num1 = 0
num2 = 1

console.log(num1)
console.log(num2)


for (let cont = 1 ; cont <=8 ; cont++){
    result = num1+num2

    num1=num2
    num2=result

    console.log(result)
}