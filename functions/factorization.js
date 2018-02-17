// TODO: Improve the description & page
function factorizationSetup() {
    dynamicContent.innerHTML = (
        "<p>To get all the factors of a number, use this.</p>" +
        "<p>This method is currently slow and could use improving.</p>" +
        "<input type='text' id='factorsTextfield' placeholder='Enter number here' style='margin-left: 2.5px;'>" +
        "<button id='getFactors' onclick='getFactors($(\"#factorsTextfield\").val());'>Get Factors</button>"
    );
};

// TODO: Add validation for number-only input!
function getFactors(number) {
    if ($("#factors").length == 0) {
        dynamicContent.innerHTML += "<p id=factors></p>"
    }

    // TODO: MAKE THIS MUCH FASTER!
    var count = 0;
    var divisibleBy = [];
    for (var divisor = 1; divisor <= number; divisor++) {
        if (number % divisor == 0) {
            count++;
            divisibleBy.push(divisor);
        }
    }

    factors = document.getElementById("factors");
    if (count > 2) {
        factors.innerHTML = number + " can be divided by ";
        if (count >= 2) {
            for (i = 0; i < count; i++) {
                if (i < count - 2) {
                    factors.innerHTML += divisibleBy[i] + ", ";
                } else if (i == count - 2) {
                    factors.innerHTML += divisibleBy[i] + ", and ";
                } else {
                    factors.innerHTML += divisibleBy[i] + '.';
                }
            }
        } else {
            factors.innerHTML += divisibleBy[0] + '.';
        }
    } else {
        if (number == 0) {
            factors.innerHTML = number + " is divisible by everything.";
        } else {
            factors.innerHTML = number + " is prime.";
        }
    }
}
