function calculator(number1, number2, operator) {

    var result = "";

    switch(operator) {
        case "+":
            result = number1 + number2;
            console.log(number1 + " + " + number2 + " = " + result);
             break;
             
        case "-":
            result = number1 - number2;
            console.log(number1 + " - " + number2 + " = " + result);
            break;
        
        case "*":
            result = number1 * number2;
            console.log(number1 + " * " +  number2 + " = " + result);
            break;
                     
        case "/":
            result = number1 / number2;
            console.log(number1 + " / " + number2 + " = " + result);
            break;
                         
        default:
            console.log("This cannot be calculated.");
            break;
    }
}

calculator(3,8,"+");
calculator(7,7,"*");

























