// TODO: Improve the description & page
function derivativeSetup() {
    dynamicContent.innerHTML = (
        "<p>To get all the factors of a number, use this.</p>" +
        "<input type='text' id='factorsTextfield' placeholder='Enter number here' style='margin-left: 2.5px;'>" +
        "<button id='getFactors' onclick='getFactors($(\"#factorsTextfield\").val());'>Get Factors</button>"
    );
};

// TODO: Add validation for number-only input!
function getDerivative(number) {
    if ($("#factors").length == 0) {
        dynamicContent.innerHTML += "<p id=factors></p>"
    }

    var count = 0;

}
