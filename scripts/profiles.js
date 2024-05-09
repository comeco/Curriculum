// Variable to store the last button clicked
var lastClickedButton = null;
//Variable to store which profile is selected
let profile = null;

const sections = {
    "full": document.getElementsByClassName("full-summary")[0],
    "dev": document.getElementsByClassName("dev-summary")[0],
    "func": document.getElementsByClassName("func-summary")[0],
    "man": document.getElementsByClassName("man-summary")[0]
};

window.onload = function() {
    profile = "full";
    toggleSection("full");
    // Select the first button as default
    if(buttons.length > 0) {
        buttons[0].click();// Trigger click event on the first button
    }
}

function toggleSection(section) {
    for (const key in sections) {
        sections[key].style.display = key === section ? "block" : "none";
    }
    profile = section;
}

document.getElementById("Btn-full-cv").addEventListener("click", function() {
    toggleSection("full");
});

document.getElementById("Btn-dev-cv").addEventListener("click", function() {
    toggleSection("dev");
});

document.getElementById("Btn-func-cv").addEventListener("click", function() {
    toggleSection("func");
});

document.getElementById("Btn-man-cv").addEventListener("click", function() {
    toggleSection("man");
});

//Button highlight


// Function to handle button clicks
function handleButtonClick(event) {
    var clickedButton = event.target;

    // Remove selected class from last clicked button
    if (lastClickedButton) {
        lastClickedButton.classList.remove('selected');
        lastClickedButton.classList.add('not-selected');
    }

    // Add selected class to the clicked button
    clickedButton.classList.remove('not-selected');
    clickedButton.classList.add('selected');

    // Update the last clicked button
    lastClickedButton = clickedButton;
}

// Get all buttons with the "button" class
var buttons = document.querySelectorAll('.button');

// Attach event listeners to each button
buttons.forEach(function(button) {
    button.addEventListener('click', handleButtonClick);
});
