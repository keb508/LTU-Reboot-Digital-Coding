function drinkOrder(size,drink) {

  let d = drink.toLowerCase();
    
    switch(d) {
        
        case "cola":
         console.log("You have ordered a " + size + " " + d);
          break;
        
          case "orange":
        console.log("You have ordered a " + size + " " + d);
          break;
        
          case "lemonade":
        console.log("You have ordered a " + size + " " + d);
            break;

        default:
            console.log("You cannot order this drink.")
      }
}

drinkOrder("small", "milk");
drinkOrder("large","Lemonade");












/*

  1. Create a function named drinkOrder

  2. Add 2 arguments for “size” and “drink”

  3. Use a switch statement to determine where the functional code needs to be written

  4. Create a message in each case statement to be returned.

  5. Console.log the returned message
*/