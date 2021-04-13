// things to do
// When press button, change score

// when score is reached, display winner and disable +1 buttons
// reset starts game over

// Score Tracker
const p1Count = document.querySelector('#p1Display');
const p2Count = document.querySelector('#p2Display');

// Buttons
const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#reset');

// Play to score
const playTo = document.querySelector("#playto");

let winningScore = 3;
let gameOver = false;
let p1Score = 0;
let p2Score = 0;

playTo.addEventListener('change', function () {
    winningScore = this.value;
})

// button functionality 
p1Button.addEventListener('click', function () {
    if (!gameOver) {
        p1Count.innerText = parseInt(p1Count.innerText) + 1;
        p1Score += 1;
        if (p1Score === winningScore) {
            gameOver = true;
            p1Score.display.classList.add('winner');
            p2Score.display.classList.add('loser');
        }
    }
})

p2Button.addEventListener('click', function () {
    if (!gameOver) {
        p2Count.innerText = parseInt(p2Count.innerText) + 1;
        p2Score += 1;
        if (p2Score === winningScore) {
            gameOver = true;
            p2count.display.classList.add('winner');
            p1Count.display.classList.add('loser');
        }
    }
})

resetButton.addEventListener('click', function () {
    p1Count.innerText = 0;
    p2Count.innerText = 0;
    gameOver = false;
    p1Score = 0;
    p2Score = 0;
    p2Count.classList.remove('winner', 'loser');
    p1Count.classList.remove('loser', 'winner');
})






function winner(score) {
    if (score === winningScore) {
        gameOver = true;
        console.log('game over')
    }
}