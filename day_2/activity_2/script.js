// Generate a random number between 1 and 10.
// Guess what the random generated number is
// Check if the user's input is a valid number
// Check if the guess is correct.

const randomNum = Math.floor(Math.random() *10);
const promptGuess = prompt("Guess the number between 1 and 10:");
const parsedGuess = parseInt(promptGuess);
if (isNaN(parsedGuess) || parsedGuess > 10) {
  console.log("Please enter a valid number.");
} else {
  if (parsedGuess === randomNum) {
    console.log("Tingning ning! Correct!!");
  } else {
    console.log(`Haha! You are wrong. It's ${randomNum}.`);
  }
}