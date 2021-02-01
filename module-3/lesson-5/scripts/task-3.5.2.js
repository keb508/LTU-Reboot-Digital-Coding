function foodDiscount(arr) {
    var totalPrice = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i].type === 'food') {
            arr[i].price = arr[i].price * 0.8;
        }
        totalPrice += arr[i].price * arr[i].quantity;
    }
    console.log('£' + totalPrice.toFixed(2));
}

foodDiscount(shoppingCart);