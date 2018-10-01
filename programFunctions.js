// Searches through the available function names and only displays the ones applicable
function searchFunctions() {
    var input, filter, functions, a, i;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    functions = document.getElementsByClassName("func");

    // Hides all function names that don't match the search
    for (i = 0; i < functions.length; i++) {
        if (functions[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            functions[i].style.display = "";
        } else {
            functions[i].style.display = "none";
        }
    }
}

// Toggles the subject menu when the header is clicked
$(".subsection").click(function(event) {
    var element, child, className;
    element = $(this);
    child = element.next("ul");
    className = child.attr("class");

    if (className == "active") {
        child.attr("class", "hidden");
    } else {
        child.attr("class", "active");
    }
});
