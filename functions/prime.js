function primeSetup() {
    dynamicContent.innerHTML = (
        "<p>A prime number is a number that is only divisible by itself and one.</p>" +
        "<p>For example, 3 is only divisible by 3 and 1, so 3 is prime.</p>" +
        "<p>To find if a number is prime (fast), click here.</p>" +
        "<input type='text' id='primeTextfield' placeholder='Enter number here' style='margin-left: 2.5px;'>" +
        "<button id='checkIfPrime' onclick='isPrime($(\"#primeTextfield\").val())'>Check</button>" +
        "<br />" +
        "<p>To get all the factors of a number (slow), use this.</p>" +
        "<input type='text' id='factorsTextfield' placeholder='Enter number here' style='margin-left: 2.5px;'>" +
        "<button id='getFactors' onclick='getFactors($(\"#factorsTextfield\").val());'>Check</button>"
    );
};


// It currently only runs once. TODO: FIX!!!
function isPrime(number) {
    var count = 0;

    for (var divisor = 2; divisor <= Math.sqrt(number); divisor++) {
        if (number % divisor == 0) {
            count++;
            break;
        }
    }

    // TODO: Edit so number can be a bigInteger; IMPORT!
    dynamicContent.innerHTML += "<p id='primeStatus'>"
    // TODO: Make it so both this and factors don't display at the same time. TOGGLE!
    primeStatus = document.getElementById("primeStatus");
    primeStatus.innerHTML =  + number + " is ";
    if (count == 0) {
        primeStatus.innerHTML += "prime.</p>";
    } else {
        primeStatus.innerHTML += "not prime.";
    }
}

// TODO: MAKE THIS MUCH FASTER!
function getFactors(number) {
    var count = 0;
    var divisibleBy = [];

    for (var divisor = 2; divisor <= number; divisor++) {
        if (number % divisor == 0) {
            count++;
            divisibleBy.push(divisor);
        }
    }

    dynamicContent.innerHTML += "<p id='factors'>";
    factors = document.getElementById("factors");
    if (count > 1) {
        factors.innerHTML = number + " can be divided by ";
        if (count >= 2) {
            for (i = 0; i < count; i++) {
              // (i <= count - 2) factors.innetHTML += ? :
                if (i < count - 2) {
                    factors.innerHTML += divisibleBy[i] + ", ";
                } else if (i == count - 2) {
                    factors.innerHTML += divisibleBy[i] + ", and ";
                } else {
                    factors.innerHTML += divisibleBy[i];
                }
            }
        } else {
            factors.innerHTML += divisibleBy[0];
        }
    } else {
        factors.innerHTML = number + " is prime";
    }

    factors.innerHTML += ".</p>";
}
