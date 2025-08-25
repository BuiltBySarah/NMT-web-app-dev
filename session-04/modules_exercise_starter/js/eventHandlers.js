//Method to handle buttons
function handleClick(buttonId, clickType) {
    let button = document.getElementById(buttonId);

    if (clickType === "click") {
        button.addEventListener("click", function() {
            alert("Button Clicked!")
        })
    } else if (clickType === "mouseover") {
        button.addEventListener(clickType, function() {
            alert("Button Hovered Over!")
        })
    } else if (clickType === "dblclick") {
        button.addEventListener(clickType, function() {
            alert("Button Double Clicked!")
        })
    } else {
        document.getElementById("postContainer").innerHTML = "Not a valid click event."
    }
}

handleClick("button1", "click");
handleClick("button2", "mouseover");
handleClick("button3", "dblclick");