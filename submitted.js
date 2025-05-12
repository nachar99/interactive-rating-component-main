// this is for my third objective stated in the script.js
let selectionStatement = document.getElementById("submitted-rating");
let storedRating = localStorage.getItem("userRating");
selectionStatement.innerHTML = "You selected " + storedRating + " out of 5";