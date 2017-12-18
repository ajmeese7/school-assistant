function sumOfDigitsSetup() {
    dynamicContent.innerHTML = (
        "<p>This will get the sum of the digits of the number you input.</p>" +
        "<p>If you do not want an exponent on the number, just submit without it or use 1.</p>" +
        "<input type='text' id='sumOfDigitsNumber' placeholder='Enter number here' style='margin-left: 2.5px;'>" +
        "<input type='text' id='sumOfDigitsExponent' placeholder='Enter exponent here' style='margin-left: 2.5px;'>" +
        "<button id='getSumOfDigits' onclick='sumOfDigits($(\"#sumOfDigitsNumber\").val(), $(\"#sumOfDigitsExponent\").val())'>Calculate</button>"
    );
};


function sumOfDigits(number, power) {
    if ($("#numberPowered").length == 0) {
        dynamicContent.innerHTML += "<p id=numberPowered></p>"
    }

    numberPowered = document.getElementById("numberPowered");
    if (power) {
        var powered = bigInt("" + number).pow("" + power);
        powered = powered.toString();
        numberPowered.innerHTML = "Powered: " + powered;
    } else {
        var powered = number;
        numberPowered.innerHTML = "";
    }

    if ($("#answer").length == 0) {
        dynamicContent.innerHTML += "<p id=answer></p>"
    }

    answer = document.getElementById("answer");
    var sum = 0;
    for (i = powered.length - 1; i >= 0; i--) {
        sum += parseInt(powered.charAt(i));
    }

    answer.innerHTML = "Sum: " + sum;
}
