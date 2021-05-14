const number = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})

number.question("Escriba un número par o impar ", valor =>{
    if (valor%2==0){
       console.log(`${valor} es un número par`)
       number.close()
    } else
    console.log(`${valor} es un número impar`)
    number.close()
})