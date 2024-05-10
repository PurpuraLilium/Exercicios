// Functions

function contador(){
    for (let cont = 1 ; cont <=10 ; cont++){
        console.log(cont)
    }
}

function contadorimpar(){
    for (let impar = 1 ; impar <=50 ; impar+=2){
        console.log(impar)
    }
}

function fibonacci(){
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
}

function somatoria(){
    num = 1
resultado = 0

while (num <= 100){
    console.log (resultado = resultado + num)
    num++
}
}

function regresso(){
    num  = parseInt (prompt  ('Digite um numero inteiro: '))

while(num >= 0){
    console.log(num)
    num--
}
}

function tabuada(){
    let num = parseInt (prompt('Digite um numero'))

for (mult = 1 ; mult <= 10 ; mult++){

    result = num * mult
    console.log(result)
}
}

// Main
do{
    option = parseInt (prompt('Escolha uma das seguintes opções para executar: \n1 - Executar contador (1~10). \n2 = Executar contador de numeros impares (1~50). \n3 - Executar sequencia de Fibonacci (primeiros 10 numeros). \n4 - Executar somatoria de numeros do 1 ao 100. \n5 - Executar contagem regressiva de um numero até 0. \n6 - Executar tabuada de um numero.\n0 - Fechar menu de escolha.'))
    
    switch(option){
        
        case 1:
            contador()
            console.log('Contador executado.')
            break
    
        case 2:
            contadorimpar()
            console.log('Contador de numeros impares executado.')
            break
    
        case 3:
            fibonacci()
            console.log('Sequencia de Fibonacci executada')
            break
    
        case 4:
            somatoria()
            console.log('Somatoria executada.')
            break
        
        case 5:
            regresso()
            console.log('Contagem regressiva executada.')
            break
        
        case 6:
            tabuada()
            console.log('Tabuada executada.')
            break
    }
}
while(option != 0)