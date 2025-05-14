# Frontend Mentor - Interactive rating component solution

This is a solution to the [Interactive rating component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-rating-component-koxpeBUmI). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Select and submit a number rating
- See the "Thank you" card state after submitting a rating

### Screenshot

![](.\images\FireShot Capture 006 - Frontend Mentor - Interactive rating component - [127.0.0.1].png")
![](.\images\FireShot Capture 007 - Frontend Mentor - Interactive rating component - [127.0.0.1].png")
![](.\images\FireShot Capture 008 - Frontend Mentor - Interactive rating component - [127.0.0.1].png")
![](.\images\FireShot Capture 009 - Frontend Mentor - Interactive rating component - [127.0.0.1].png")

### Links

- Solution URL: [Add solution URL here](https://github.com/nachar99/interactive-rating-component-main)
- Live Site URL: [Add live site URL here](https://interactive-rating-component-main-ten-xi.vercel.app/)

### Built with

- Semantic HTML5 markup
- CSS custom fonts via `@font-face` (Overpass)
- Flexbox for layout and centering
- JavaScript DOM manipulation & event listeners
- `localStorage` for persisting user selection

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

- **Custom fonts with `@font-face`:** I embedded the Overpass variable font (normal and italic) to ensure consistent typography across the rating component and thank-you page.

  ```css
  @font-face {
    font-family: "Overpass";
    src: url(assets/font/Overpass-VariableFont_wght.ttf);
    font-style: normal;
    font-weight: 400 700;
  }
  @font-face {
    font-family: "Overpass";
    src: url(assets/font/Overpass-Italic-VariableFont_wght.ttf);
    font-style: italic;
    font-weight: 400 700;
  }
  ```

- **Flexbox centering and spacing:** I used Flexbox on the `.box-position` and `.box` containers to center the component on-screen and manage consistent vertical gaps.

  ```css
  .box-position {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 32px;
    width: 100%;
    height: 100%;
  }
  ```

- **Button state management with JavaScript:** I added click handlers to each rating button to reset all buttons’ styles, then highlight the clicked button and store its value, ensuring only one button stays active at a time.

  ```js
  const buttons = document.querySelectorAll(".buttons");
  let selectedRating = null;

  function resetColor() {
    buttons.forEach((btn) => {
      btn.style.backgroundColor = "hsl(213, 19%, 18%)";
      btn.style.color = "hsl(217, 12%, 63%)";
    });
  }

  function changeColor(event) {
    resetColor();
    event.target.style.backgroundColor = "white";
    event.target.style.color = "hsl(216, 12%, 8%)";
    selectedRating = event.target.dataset.value;
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", changeColor);
  });
  ```

- **Page navigation & `localStorage`:** I implemented a submit handler that saves the selected rating to `localStorage` and redirects to `submitted.html`, including an alert if no rating is chosen.

  ```js
  const submitButton = document.getElementById("submit");
  submitButton.addEventListener("click", function () {
    if (!selectedRating) {
      alert("Please select a rating");
      return;
    }
    localStorage.setItem("userRating", selectedRating);
    window.location.href = "submitted.html";
  });
  ```

- **Dynamic content rendering on thank-you page:** I retrieved the stored rating from `localStorage` and injected it into the DOM to display a personalized confirmation message.

  ```js
  const storedRating = localStorage.getItem("userRating");
  document.getElementById(
    "submitted-rating"
  ).textContent = `You selected ${storedRating} out of 5`;
  ```

## Author

- Website - [Abdulrahman Al-Nachar](https://github.com/nachar99)
- Frontend Mentor - [@nachar99](https://www.frontendmentor.io/profile/nachar99)
