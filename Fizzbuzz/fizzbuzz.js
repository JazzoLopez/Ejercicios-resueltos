/*
    Programa que imprime los numeros del 1 al 100, los multiplos de 3 los cambie por la palabra fizz, los multiplos de 5 que cambie por buzz y los que compartan ser multiplos de 3 y 5 al mismo tiempo cambiar por fizzbuzz
*/

for (let i = 1; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log("fizzbuzz")
    }
    else {
        if ((i % 3) === 0 && (i % 5 != 0)) {
            console.log("fizz")
        }
        else if ((i % 5) == 0 && (i % 3 != 0)) {
            console.log("buzz") 
        }
        else {
            console.log(i)
        }
    }
}
