// Searches through the available function names and only displays the ones applicable
function searchFunctions() {
    var input, filter, functions, a, i;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    functions = document.getElementsByClassName("func");

    // Hides all function names that don't match the search
    for (i = 0; i < functions.length; i++) {
        if (functions[i].innerHTML.toUpperCase().indexOf(filter) > -1) {
            functions[i].id = "active";
            functions[i].style.display = "";
        } else {
            functions[i].id = "hidden";
            functions[i].style.display = "none";
        }
    }

    var subsection, child, children, j, toggle;
    subsection = document.getElementsByClassName("subsection");

    // Hides subsections that don't contain any matches to the search
    for (i = 0; i < subsection.length; i++) { // i.e. Chemistry, Mathematics, etc.
        toggle = true;
        child = $(subsection[i]).next("ul"); // List of subsection functions
        children = child.find(".func"); // Actual subsection functions

        // Iterate over children
        for (j = 0; j < children.length; j++) {
            if (children[j].id == "active") {
                toggle = false;
                break;
            }
        }

        if (toggle) {
            subsection[i].id = "hidden";
        } else {
            subsection[i].id = "active";
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
