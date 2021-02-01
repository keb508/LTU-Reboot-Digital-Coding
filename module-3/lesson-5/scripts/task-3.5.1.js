function fullPrice(arr) {
    var totalPrice = 0;
    for (let i = 0; i < arr.length; i++) {
       totalPrice += arr[i].price * arr[i].quantity;
    }
    console.log('£' + totalPrice.toFixed(2));
}

fullPrice(shoppingCart);

