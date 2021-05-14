const interface = require("readline-sync")

    console.log("Escribe el número de la operación que desees realizar")
    console.log("1. Suma")
    console.log("2. Resta")
    console.log("3. Multiplicación")
    response = interface.question("4. Division ")

    const n1 = interface.question("Ingrese el primer numero: ")
    const n2 = interface.question("Ingrese el segundo numero: ")

    switch(response){
        case "1":
            var result = parseFloat(n1) + parseFloat(n2)
            console.log("El resultado es " + result)
            break
        case "2":
            var result = parseFloat(n1) - parseFloat(n2)
            console.log("El resultado es " + result)
            break
        case "3":
            var result = parseFloat(n1) * parseFloat(n2)
            console.log("El resultado es " + result)
            break
        case "4":
            var result = parseFloat(n1) / parseFloat(n2)
            console.log("El resultado es " + result)
            break
        default:
            break
    }