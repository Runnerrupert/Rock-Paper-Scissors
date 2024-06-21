let wins = 0;

let compChoice;
let playerChoice;

let choice = "";

compChoice = Math.floor(Math.random() * 3) ;
console.log(compChoice);

if (compChoice === 0) {
    choice = "Rock";
} else if (compChoice === 1){
    choice = "Paper";
} else {
    choice = "Scissors";
}


