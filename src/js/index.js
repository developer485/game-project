require('../sass/main.scss');

import base from './base';

// bot();
const start = () => {
    const winner = base.winner;
    const rock = base.rock;
    const paper = base.paper;
    const scissor = base.scissor;
    const scoreTie = base.scoreTie;
    const playerScore = base.playerScore;
    const computerScore = base.computerScore;
    const computerRender = base.computerRender;
    
    // const player = document.querySelector('.player');
    // const computer = document.querySelector('.computer');

    // play
    const playGame = () => {
        const allItems = document.querySelectorAll('.col-1-of-3 ');
        const computerOptions = ["rock", "paper", "scissor"];
        
        allItems.forEach(item => {
            item.addEventListener("click", function() {
                const computerNumber = Math.floor(Math.random() * 3);
                const computerRandomItem = computerOptions[computerNumber];
    
                // Get ClassName
                const currentChoice = this.childNodes[1].className;
         
                computerRender.innerHTML = `<div class="col-1-of-3">
                                                <div class="${computerRandomItem}"></div>
                                                <p>${computerRandomItem}</p>
                                            </div>`;

                // call check function
                setTimeout(() => { 
                    checkHands(currentChoice, computerRandomItem);  
                }, 1000);
            })
        });
    }

    const checkHands = (playerChoice, computerItem) => {
        if (playerChoice === computerItem) {
            console.log('Round Tie');
            scoreTie.innerHTML++;
            winner.textContent = 'Round Tie';
            return;
        }

        if (playerChoice === 'rock') {
            if (computerItem === 'paper') { 
                computerScore.innerHTML++;
                console.log('Computer wins');
                winner.textContent = 'Computer Wins';
                return;
            } else {
                playerScore.innerHTML++;
                console.log('Player wins');
                winner.textContent = 'Player Wins';
                return;
            }
        }

        if (playerChoice === 'paper') {
            if (computerItem === 'scissor') {
                computerScore.innerHTML++;
                console.log('Computer Wins');
                winner.textContent = 'Computer Wins';
                return;
            } else {
                playerScore.innerHTML++
                console.log('Player Wins');
                winner.textContent = 'Player Wins';
                return;
            }
        }

        if (playerChoice === 'scissor') {
            if (computerItem === 'rock') {
                computerScore.innerHTML++;
                console.log('Computer Wins');
                winner.textContent = 'Computer Wins';
                return;
            } else {
                playerScore.innerHTML++
                console.log('Player Wins');
                winner.textContent = 'Player Wins';
                return;
            }
        }
    }

    playGame();



    // // Play Match
    // const startMatch = () => {
    //     const allItems = document.querySelectorAll('.col-1-of-3');
    //     const player = document.querySelector('.player');
    //     const computer = document.querySelector('.computer');
        
    //     // Computer Options
    //     const computerOptions = [rock, paper, scissor];

    //     // allItems.forEach(option => {
    //     //     option.addEventListener("click", function() {
    //     //         // Computer choice
    //     //         const randomNumber = Math.floor((Math.random() * 3));
    //     //         const computerRandomItem = computerOptions[randomNumber];
    //     //         // Check for Compare
    //     //     });
    //     // });
    // }
 
    // const checkHands = () => {

    // }

    // startMatch();
    
    // function createComputerElement(item) {
    //     const html = `<div class="col-1-of-3"><div class="${item}"></div></div>`;
    //     computerRender.insertAdjacentHTML('beforeend', html);
    // }

    // window.addEventListener('click', function(e) {
    //     if (rock.contains(e.target)) {
    //         if (e.target === randomItem) {
    //             alert('Matched');
    //             scoreTie.innerHTML++;  
    //             createComputerElement(randomItem);
    //         } else if (randomItem === paper) {
    //             alert('Computer has selected Paper');
    //             computerScore.innerHTML++;
    //             createComputerElement(randomItem);
    //         } else if (randomItem === scissor) {
    //             alert('Player wins the round ');
    //             playerScore.innerHTML++;
    //             createComputerElement(randomItem);
    //         }
    //     } 
    //     else if (paper.contains(e.target)) {
    //         if (e.target === randomItem) {
    //             alert('Matched');
    //             scoreTie.innerHTML++;
    //         } else if (randomItem === scissor) {
    //             alert('Computer Wins selected scissor');
    //             computerScore.innerHTML++;
    //         } else if (randomItem === rock) {
    //             alert('Player Wins');
    //             playerScore.innerHTML++;
    //         }
    //     } 
    //     else if (scissor.contains(e.target)) {
    //         if (e.target === randomItem) {
    //             alert('Matched');
    //             scoreTie.innerHTML++;
    //         } else if (randomItem === rock) {
    //             alert('Computer Wins selected Rock');
    //             computerScore.innerHTML++;
    //         } else if (randomItem === paper) {
    //             alert('Player Wins');
    //             playerScore.innerHTML++;
    //         } 
    //     }
    // });
}

start();
 
   