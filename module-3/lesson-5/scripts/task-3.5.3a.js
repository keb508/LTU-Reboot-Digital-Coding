function foodDiscount(arr, discountAmount, type) {
    var totalPrice = 0;
    for (let i = 0; i < arr.length; i++) {
        let discount = (arr[i].type === type ? discountAmount/100 : 0) 
        if (type === "any") {
            discount = discountAmount/100;
        }
        totalPrice += (arr[i].price * arr[i].quantity) * (1 - discount);
    }

    console.log('£' + totalPrice.toFixed(2));
}


foodDiscount(shoppingCart,10,'any');














/*
1. Take your function from the previous task 3.5.2 and copy it into your javascript file
  
2. Add 2 extra arguments to the function for “discountAmount” and “type”

3. Replace the logic that takes off 20% for object.type == “food” for object.type == type and allow the 20% to be the {discountAmount}%

4. Create logic so that if type == “any” all products have a discount applied

4. Return the totalPrice Variable
*/