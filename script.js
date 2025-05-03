// I want to achieve three things in JS ,
// 1- have a button change color when clicked and stay on it until its unclicked or a diferrent button is clicked.
// 2- when submit is clicked the program takes the user to sumbitted.html .
// 3- in the submitted page I want the user to see his choice there. this will be done in submitted.js

// this first section is for my first objective.
const buttons = document.querySelectorAll(".buttons");

let selectedButton = null;
let selectedRating = null;

function resetColor() {
    buttons.forEach(btn => {
        btn.style.backgroundColor = "hsl(213, 19%, 18%)";
        btn.style.color = "hsl(217, 12%, 63%)";
    });
}

function changeColor(event) {
    if (event.target.dataset.value === selectedButton) {
        resetColor();
        selectedButton = null;
        selectedRating = null;
    }
    else {
        resetColor();
        event.target.style.backgroundColor = "white"
        event.target.style.color = "hsl(216, 12%, 8%)"
        selectedRating = event.target.dataset.value;
        selectedButton = event.target.dataset.value;
    }
}

buttons.forEach(btn => {
    btn.addEventListener("click", changeColor);
});

// this is for my second objective stated above.
let submitButton = document.getElementById("submit");

function changePage() {
    if (selectedRating === null) {
        alert("Please select a rating");
        return;
    }
    else {
        localStorage.setItem("userRating", selectedRating);
        window.location.href = "submitted.html";
    }
}


submitButton.addEventListener("click", changePage);

