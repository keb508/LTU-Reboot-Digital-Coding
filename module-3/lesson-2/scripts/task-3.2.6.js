var temperature = 20;
var weather = "storm";

if (temperature < 0 || weather == "storm") {
    document.write("Stay inside!");
} else if (temperature < 30) {
    document.write("Put on a coat and hat!");
} else if 
(temperature < 50 || weather == "rain") {
    document.write("Put on a coat!");
} else {
    document.write("Have fun in the sun!");
}