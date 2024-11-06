const colorPickerInput = document.getElementById("color-picker-input");
const body = document.querySelector("body");

// variable to store the selected color
let color;

colorPickerInput.addEventListener("input", (e) => {
  // log the selected color value
  console.log(e.target.value);
  // store the selected color
  color = e.target.value;
});

document.addEventListener("keypress", (e) => {
  //   when enter is pressed,apply the selected color to the background
  if (e.key === "Enter") {
    body.style.backgroundColor = color;
  }
});

// Get reference to the word counter element
const wordCounterText = document.getElementById("word-counter-textarea");
console.log(wordCounterText);
const count = document.getElementById("word-count");
console.log(count);
const btn = document.getElementById("start-count-btn");
console.log(btn);

// Variables to store the word count and textarea value
let wordCounterValue = 0;
let wordCounterTextValue = "";

// listen for clicks on the start counting button
wordCounterText.addEventListener("input", (e) => {
  console.log(e.target.value);
  wordCounterTextValue = e.target.value;
});
btn.addEventListener("click", () => {
  wordCounterValue = wordCounterTextValue.split(" ").length;
  count.textContent = `word count: $(wordCounterValue)`;
  console.log(wordCounterValue)

});
