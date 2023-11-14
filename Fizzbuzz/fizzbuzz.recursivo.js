function fizzbuzz(num1 = 1){
    if(num1 == 100)
        return num1;
        else {
            if (num1 % 3 === 0 && num1 % 5 != 0) {
                console.log("Fizz")
            }
            else if ((num1 % 5) == 0 && (num1 % 3 != 0)) {
                console.log("Buzz")
            }
            else if(num1 % 3 == 0 && num1 % 5 == 0){
                console.log("FizzBuzz")
            }
            else {
                console.log(num1)
            }
        }
    return fizzbuzz(num1+1)
}


fizzbuzz()