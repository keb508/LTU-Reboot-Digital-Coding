// fixStart

/*
Create a function that will take a string and will replace any letters that are the same as the first letter with a *
*/

// 1. Identify the first letter of the string
// 2. Loop through the string and identify if any of the other letters are the same.
// 3. If the letters are the same replace the letter with a *
// 4. Return new string.


function fixStart(word) {
    let first = word.charAt(0);

    var newWord = word.replace(/first/g, "*"); //not a thing
      
    console.log(newWord);
 

    }


fixStart('babble');