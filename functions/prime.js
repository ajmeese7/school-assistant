function primeSetup() {
    dynamicContent.innerHTML = (
        "<p>A prime number is a number that is only divisible by itself and one.</p>" +
        "<p>For example, 3 is only divisible by 3 and 1, so 3 is prime.</p>" +
        "<input type='text' id='primeTextfield' placeholder='Enter number here' style='margin-left: 2.5px;'>" +
        "<button id='checkIfPrime' onclick='isPrime($(\"#primeTextfield\").val())'>Check</button>"
    );
};

// TODO: Add validation for number-only input!
// It currently only runs once. TODO: FIX!!!
function isPrime(number) {
    // TODO: Edit so number can be a bigInteger; IMPORT!
    if ($("#primeStatus").length == 0) {
        dynamicContent.innerHTML += "<p id=primeStatus></p>"
    }

    var count = 0;
    for (var divisor = 2; divisor <= Math.sqrt(number); divisor++) {
        if (number % divisor == 0) {
            count++;
            break;
        }
    }

    primeStatus = document.getElementById("primeStatus");
    primeStatus.innerHTML =  + number + " is ";
    if (count == 0 && number != 0) {
        primeStatus.innerHTML += "prime.";
    } else {
        primeStatus.innerHTML += "not prime.";
    }
}
