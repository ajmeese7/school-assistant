function sumOfDigits(number, power) {
    var powered = bigInt("" + number).pow("" + power);
    powered = powered.toString();
    console.log("Powered: " + powered);

    var sum = 0;
    for (i = powered.length - 1; i >= 0; i--) {
        sum += parseInt(powered.charAt(i));
    }

    console.log("Sum: " + sum);
}
