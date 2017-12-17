function sumOfDigitsSetup() {
    dynamicContent.innerHTML = (
        "<p>This will get the sum of the digits of the number you input.</p>" +
        "<p>If you do not want an exponent on the number, just submit without it or use 1.</p>" +
        "<input type='text' id='sumOfDigitsNumber' placeholder='Enter number here' style='margin-left: 2.5px;'>" +
        "<input type='text' id='sumOfDigitsExponent' placeholder='Enter exponent here' style='margin-left: 2.5px;'>" +
        "<button id='getSumOfDigits' onclick='sumOfDigits($(\"#sumOfDigitsNumber\").val(), $(\"#sumOfDigitsExponent\").val())'>Calculate</button>"
    );
};


// Currently outputs to the side. TODO: Replace so it is only displayed once!
function sumOfDigits(number, power) {
  // TODO: Don't display any 'powered' if one is not entered?
    if (!power) {
      power = 1;
    }

    dynamicContent.innerHTML += "<p id=numberPowered>"
    numberPowered = document.getElementById("numberPowered");

    var powered = bigInt("" + number).pow("" + power);
    powered = powered.toString();
    numberPowered.innerHTML += "Powered: " + powered + "</p>";

    dynamicContent.innerHTML += "<p id=answer>";
    answer = document.getElementById("answer");
    var sum = 0;
    for (i = powered.length - 1; i >= 0; i--) {
        sum += parseInt(powered.charAt(i));
    }

    answer.innerHTML += "Sum: " + sum + "</p>";
}
