var myRecipe = {
    recipeTitle : "brownies", 
    servings : 16, 
    ingredients : ["butter", "sugar", "flour", "eggs", "golden syrup", "cocoa powder", "chocolate"], 
    directions : ["Mix butter and sugar", "Add eggs one at a time", "Mix in golden syrup", "Sieve flour and cocoa powder and stir into mix", "Stir in choclate pieces", "Bake for 50 minutes"],
    letsCook : function(recipeTitle) {
        console.log("I'm hungry! Let's cook " + recipeTitle);
    }
}


myRecipe.letsCook(myRecipe.recipeTitle);















/*   
  1. Copy your object from task-3.4.4 
  
  2. Add a function called letsCook

      - Have it say: "I'm hungry! Let's cook..." with the name of your recipe title.

      - Call your new method.
  
  3. Commit your changes

  4. Push your changes to remote
*/