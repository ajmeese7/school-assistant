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

$("#toggle").click(function(event) {
    // TODO: Make a second subsection work properly.
    // TODO: Make only the clicked subsection appear
    var element = $(event.target);
    var parentID = $(element).parent().attr("id");
    var className = toggle.getAttribute("class");

    // The second part prevents sub-items from toggling the list
    if (className == "active" && parentID != "subsection") {
        toggle.className = "hidden";

        removeEmptyATag();
    } else {
        toggle.className = "active";
    }
});

// Only removes the first child the first time
var removeEmptyATag = (function() {
    var executed = false;
    return function() {
        if (!executed) {
            executed = true;
            var subsection = document.getElementById("subsection");
            //var empty = subsection.childNodes[0];
            subsection.removeChild(subsection.childNodes[0]);
            //empty.removeChild(empty.childNodes[0]);
        }
    };
})();
