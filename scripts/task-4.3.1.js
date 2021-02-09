//The Problem

/*

1. Write a program that prints the numbers 1 to 100.
2. For multiples of three print 'fizz' instead of the number.
3. For multiples of five print 'buzz' instead of the number.
4. For multiples of three, five or both print 'fizzbuzz' instead of the number.
5. For numbers that are not multiples of three, five or both just print the number.

*/

// FOR LOOP
// set counter to one
// break when counter reaches 100
// increment counter by one


//IF number MOD 3 === 0 AND number MOD 5 === 0
//  print 'fizzbuzz'
// ELSE IF number MOD 3 === 0
//  print 'fizz'
// ELSE IF number MOD 5 === 0
//  print 'buzz'
// ELSE print number


function fizzBuzz() {
for (let i=1; i <=100 ; i++) {

    if(i % 3 === 0 && i % 5 === 0) {
        console.log('fizzbuzz');
    }
    else if (i % 3 === 0) {
        console.log('fizz'); 
    }
    else if (i % 5 === 0) {
        console.log('buzz');
    }
    else {
        console.log(i);
    }

}
}
fizzBuzz();
