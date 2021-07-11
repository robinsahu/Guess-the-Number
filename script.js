'use strict';

//  Just for examples and learningss

/*

console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉 Correct Number!';
console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').innerHTML = '🎉 Correct !'; // innerHtml can also be used to change the content
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

// document.getElementsByClassName('.guess').value = 23;
// console.log(document.getElementsByClassName('.guess').value, typeof document.getElementsByClassName('.guess').value);


document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value, typeof document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highscore = 0;
document.querySelector('.score').textContent = score;
console.log(secretNumber);

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
};

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess)


    if (!guess) {
        // document.querySelector('.message').textContent = '⛔️ No number!';
        displayMessage('⛔️ No number!');
    }
    else if (guess === secretNumber) {

        // document.querySelector('.message').textContent = '🎉 Correct Number!';
        displayMessage('🎉 Correct Number!');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }

    else if (guess !== secretNumber) {
        if (score > 1) {

            // document.querySelector('.message').textContent =
            // guess > secretNumber ? '📈 Too high!' : '📉 Too low!';
            displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            // document.querySelector('.message').textContent = '💥 You lost the game!';
            displayMessage('💥 You lost the game!');
            document.querySelector('.score').textContent = 0;
        }
    }

    // You can use below code as well but includes repitition

    // else if (guess > secretNumber) {
    //     if (score > 1) {

    //         document.querySelector('.message').textContent = '📈 Too High';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }
    //     else {
    //         document.querySelector('.message').textContent = '💥 You lost the game';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }
    // else if (guess < secretNumber) {
    //     if (score > 1) {

    //         document.querySelector('.message').textContent = '📈 Too Low';
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     }
    //     else {
    //         document.querySelector('.message').textContent = '💥 You lost the game';
    //         document.querySelector('.score').textContent = 0;
    //     }
    // }

});

// you can use funvtion like below as well
/*
const x = function () {
    console.log(document.querySelector('.guess').value);
}
document.querySelector('.check').addEventListener('click', x);
*/

// Coding Challange Again Button

document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20 + 1);
    score = 20;
    document.querySelector('.message').textContent = 'Start Guessing...';
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';

});



