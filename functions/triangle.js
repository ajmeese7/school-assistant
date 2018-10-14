function triangle() {
  dynamicContent.innerHTML = (
    "<p>Side a: </p>" +
      "<input type='text' id='a' placeholder='Enter number here' style='margin-left: 2.5px;'>" +
    "<p>Side b: </p>" +
      "<input type='text' id='b' placeholder='Enter number here' style='margin-left: 2.5px;'>" +
    "<p>Side c: </p>" +
      "<input type='text' id='c' placeholder='Enter number here' style='margin-left: 2.5px;'>" +
    "<button onclick='triangleResults($(\"#a\").val(), $(\"#b\").val(), $(\"#c\").val())'>Calculate</button>"
  );
};

// This way I don't have to put `results.innerHTML =` multiple times
function triangleResults(a, b, c) {
  if ($("#result").length == 0) {
      dynamicContent.innerHTML += "<p id=result></p>";
  }

  // TODO: Add validation for number-only input!
  result.innerHTML = sideValidation(a, b, c);
}

// TODO: Improve page styling! Pretty ugly right now
function sideValidation(a, b, c) {
  var result = document.getElementById("result");
  var sideArray = [a, b, c];
  sideArray.sort((a, b) => (a - b));

  // Sides from smallest to largest
  var a = Number(sideArray[0]);
  var b = Number(sideArray[1]);
  var c = Number(sideArray[2]);

  // Makes sure all input fields are filled out
  if (a && b && c) {
    if (a < 0) {
      return "Only positive side lengths are allowed.";
    } else if (a * b * c == 0) {
      // TODO: Improve this message?
      return "A triangle cannot have an area of 0.";
    } else if ((a + b) < c) {
        return "Side lengths " + a + ", " + b + ", and " + c + " do NOT form a triangle.";
    } else {
      return triangleClassification(a, b, c);
    }
  } else {
    return "Please fill out all fields.";
  }
}

function triangleClassification(a, b, c) {
  // Detection using the Triangle Inequality Theorum
  var partOne = "Side lengths " + a + ", " + b + ", and " + c + " form a";
  var partTwo;
  if (a === b && b === c) {
    partTwo = "n equilateral";
  } else if (a === b || b === c) {
    partTwo = "n isosceles";
  } else {
    partTwo = " scalene"
  }

  partTwo += " triangle.";
  return partOne + partTwo;
}
