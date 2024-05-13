let secretnum = Math.floor(Math.random() * 100) + 1;
const maxatt = 5;
let attempts = 0;

while (attempts < maxatt) {
  let guess = parseInt(prompt("Guess a number between 1 and 100:"));
  attempts++;

  if (guess === secretnum) {
    alert(`You guessed the number in ${attempts} attempts.`);
    break;
  } else if (guess < secretnum) {
    alert("Too low.");
  } else {
    alert("Too high.");
  }
}

if (attempts === maxatt) {
  alert(`Sorry, you couldn't guess the number. The secret number was ${secretnum}.`);
}
