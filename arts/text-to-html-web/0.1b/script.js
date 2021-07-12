function compile() {
    var input = document.getElementById("input");
    var output = document.getElementById("output");
    var title = document.getElementById("title");   
    var newlined = input.value.replace("\n","<br>\n");
    console.log("declar checked, printing");
    output.value = "<!DOCTYPE html>\n<html>\n<head>\n<title>\n" + title.value + "\n</title>\n</head>\n<body>\n" + newlined + "\n</body>\n</html>"
    console.log("declar checked, printed");
}

function displayAbout() {
    // Hi code-lurker! This is simply a placeholder for designing the About box
    alert("Text To HTML Web\nWritten in 2021\nBy MonaSoft");
}