// question 1
const btn = document.querySelector(".btn");
const buttonLog = function () {
  console.log("I'm a button");
};

btn.addEventListener("click", buttonLog);

// question 2
const countCharactersButton = document.querySelector(".button");
let input = document.querySelector("input");
let count = document.querySelector(".count");

countCharactersButton.addEventListener("click", function () {
  count.innerHTML = input.value.trim().length;
});
