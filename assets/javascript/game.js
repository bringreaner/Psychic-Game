//comp randomly guesses letter a-z
//create array a-z
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var userWins = 0;
var userLosses = 0;
var userGuesses = [];
var guessesLeft = 9;
var compChoice = randomChoice();


//have computer randomly select one -- stolen from RPS activity 
function randomChoice() {
    return alphabet[Math.floor(Math.random() * alphabet.length)];
    
}
//console.log(compChoice); -- checked to see if it picks a random letter and it works!! -- no longer true.



//results
    //if player guesses correctly, update wins
    //else update losses

function userWon() {
    userWins++;
    resetGame();
    document.getElementById("winsCount").innerHTML = userWins;
    alert("You won! You are Special!");
}

function resetGame() {
    guessesLeft = 9;
    userGuesses = [];
    compChoice = randomChoice();
    console.log(compChoice);
    
}

function userLost() {
    userLosses++;
    resetGame();
    document.getElementById("lossesCount").innerHTML = userLosses;
    alert("You lost! For consolation you should probably look up cat memes.")
}
console.log(compChoice);
//user guesses a letter
document.onkeyup = function (event) {

       
    //take input to see if it matches computer choice
    var userGuess = event.key;

    //add guesses to array
    userGuesses.push(userGuess);
    var stringOfUserGuesses = userGuesses.join(" ");
    document.getElementById("yourGuesses").innerHTML = stringOfUserGuesses;

    if (userGuess == compChoice) {
        userWon();
    }

    else {
        //subtract a guess
        guessesLeft--;
        document.getElementById("guessesCount").innerHTML = guessesLeft;

        //if guesses left = 0, count as loss
        //restart game
        
        if (guessesLeft == 0) {
            userLost();
        }   
    }
}