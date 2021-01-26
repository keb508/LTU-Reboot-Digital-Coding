let preTipTotal = 45.50;
let tipPercentage = 17;
let tipTotal = preTipTotal * tipPercentage /100;
let totalBill = preTipTotal + (preTipTotal * tipPercentage /100);
document.write("Your total bill, with tip, is £" + totalBill.toFixed(2) + ". The tip amount is £" + tipTotal.toFixed(2));


