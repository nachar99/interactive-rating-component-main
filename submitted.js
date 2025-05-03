// this is for my third objective stated above
let selectionStatement = document.getElementById("submitted-rating");
let storedRating = localStorage.getItem("userRating");
selectionStatement.innerHTML = "You selected " + storedRating + " out of 5";