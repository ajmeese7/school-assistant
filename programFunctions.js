// Searches through the available function names and only displays the ones applicable
function searchFunctions() {
    var input, filter, ul, li, a, i;
    input = document.getElementById("search");
    filter = input.value.toUpperCase();
    ul = document.getElementById("functionList");
    li = ul.getElementsByTagName("li");

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        // Should I make it go in order or would that be (more) inefficient?
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
}

// Toggles the subject menu when the header is clicked
$(".subsection").click(function(event) {
    var element = $(this);
    var child = element.next("ul");
    console.log(child);
    var className = child.attr("class");

    if (className == "active") {
        child.attr("class", "hidden");
    } else {
        child.attr("class", "active");
    }
});
