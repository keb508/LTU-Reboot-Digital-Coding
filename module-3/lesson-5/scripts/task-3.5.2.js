function foodDiscount(arr) {
    var totalPrice = 0;
    for (let i = 0; i < arr.length; i++) {
        let discount = (arr[i].type === 'food' ? 20 : 0) 
        
        totalPrice += (arr[i].price * arr[i].quantity) * (1 - discount/100);
    }
    console.log('£' + totalPrice.toFixed(2));
}

foodDiscount(shoppingCart);