// # math.floor() rounds a number down
// # math.ceil(9.8) rounds a number up

const colors = [
  "green",
  "red",
  "rgba(133,122,200)",
  "#f15025",
  "purple",
  "orange",
  "pink",
  "white",
  "black",
];

const btn = document.getElementById("btn");
const color = document.querySelector(".bgd-color");

btn.addEventListener("click", function () {
  // we want to get a random number from our array, anytime we click the button and we also want to change the span with the class of bgd-color to the text of each selected colors array item

  const randomNumber = getRandomNumber();
  document.body.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
  color.style.color = colors[randomNumber]

});

// The essence of this function is to generate a random number between 0 and the length of our colors array.
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
console.log(getRandomNumber());
