const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];


const btn = document.getElementById("btn");
const color = document.querySelector(".bgd-color");






btn.addEventListener("click", function () {
  // at the later stage is going to be a concatenation of this # tag that starts hex colors basically and the randomly generated 6 looped numbers
  // recall RGB - RRGGBB - #FF0000
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    // so with every iteration we want to add another number till it adds 6 times
    hexColor += hex[getRandomNumber()];
  }
  color.style.color = hexColor;
  color.textContent = hexColor;
  document.body.style.backgroundColor = hexColor;
});

// This function will generate a random number from 0 to the length of the hex array.
function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}