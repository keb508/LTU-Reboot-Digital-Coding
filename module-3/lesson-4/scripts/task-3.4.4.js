var myRecipe = {
    recipeTitle : "Brownies", 
    servings : 16, 
    ingredients : ["butter", "sugar", "flour", "eggs", "golden syrup", "cocoa powder", "chocolate"], 
    directions : ["Mix butter and sugar", "Add eggs one at a time", "Mix in golden syrup", "Sieve flour and cocoa powder and stir into mix", "Stir in choclate pieces", "Bake for 50 minutes"]
}


 
console.log(myRecipe.recipeTitle);
console.log(myRecipe.servings);
console.log(myRecipe.ingredients);
console.log(myRecipe.directions);

document.write(myRecipe.recipeTitle + '<br/>');
document.write(myRecipe.servings + '<br/>');

var ingredients = myRecipe.ingredients;
for (let i = 0; i < ingredients.length; i++) {
   document.write(ingredients[i] + "<br/>");  
}

var directions = myRecipe.directions;
for (let i = 0; i < directions.length; i++) {
   document.write(directions[i] + "<br/>");  
}


























/*


1. Create an object to hold information on your favourite recipe.

    Recipe properties:
    recipeTitle (a string)
    servings (a number)
    ingredients (an array of strings)
    directions  (an array of strings)


2. Then display the properties on screen.

    * BONUS *

      - Create a loop to list all the ingredients and directions.

3. Commit your changes

4. Push your changes to remote

*/