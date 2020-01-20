const button = document.querySelector('#button');
const mainText = document.querySelector('#mainText');
const and = document.querySelector('#and');
const cpuText = document.querySelector('#cpuText');
const playAgain = document.querySelector('#playAgain');
const conclusionText = document.querySelector('#conclusion');
const ROCK = 'ROCK'
const PAPER = 'PAPER'
const SCISSORS = 'SCISSORS'
let PLAYER_HAND;
let CPU_HAND;
let CONCLUSION;

button.addEventListener('click', startGame = () => {
    console.log('Game is Starting....');
    button.style.display = 'none';
    SelectHand();
    selectCpuHand();
    decideWinner();
    insertCaption(PLAYER_HAND, CPU_HAND);
    console.log(`your hand is ${PLAYER_HAND} and CPU hand is ${CPU_HAND}, so the conclusion is you ${CONCLUSION}`);
})

playAgain.addEventListener('click', replay);

function replay() {
    resetCaption();
    PLAYER_HAND = null;
    CPU_HAND = null;
    CONCLUSION = null;
    startGame();
}

function resetCaption() {
    mainText.style.display = 'none';
    and.style.display = 'none';
    cpuText.style.display = 'none';
    conclusionText.style.display = 'none';
    playAgain.style.display = 'none';
}

function displayBlock() {
    mainText.style.display = 'block';
    and.style.display = 'block';
    cpuText.style.display = 'block';
    conclusionText.style.display = 'block';
    playAgain.style.display = 'block';
}

insertCaption = (PLAYER_HAND, CPU_HAND) => {
    mainText.innerHTML = `You choose ${PLAYER_HAND}`;
    and.innerHTML = 'and';
    cpuText.innerHTML = `The CPU choose ${CPU_HAND}`;
    conclusionText.innerHTML = `${CONCLUSION}`;
    mainText.style.color = 'rgba(255, 255, 255, 1)';
    and.style.color = 'rgba(255, 255, 255, 1)';
    cpuText.style.color = 'rgba(255, 255, 255, 1)';
    conclusionText.style.color = 'rgba(255, 255, 255, 1)';
    playAgain.style.transform = 'translateY(50%)';
}

SelectHand = () => {
    let playerHand = prompt('Please Select Your Hand, Rock, Paper, or Scissors?').toUpperCase();
    if (playerHand === ROCK) {
        PLAYER_HAND = ROCK;
    } else if (playerHand === PAPER) {
        PLAYER_HAND = PAPER;
    } else if (playerHand === SCISSORS) {
        PLAYER_HAND = SCISSORS;
    } else {
        alert("You didn't input the right hand!");
        SelectHand();
    }
}

selectCpuHand = () => {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 0) {
        console.log('CPU chose Rock');
        CPU_HAND = ROCK;
    } else if (randomNumber == 1) {
        console.log('CPU chose Paper');
        CPU_HAND = PAPER;
    } else {
        console.log('CPU chose Scissors')
        CPU_HAND = SCISSORS;
    };
}

decideWinner = () => {
    if (PLAYER_HAND == CPU_HAND) {
        CONCLUSION = 'DRAW';
    } else if (PLAYER_HAND != CPU_HAND) {
        switch (PLAYER_HAND) {
            case ROCK: if (CPU_HAND == PAPER) {
                CONCLUSION = 'WIN';
            } else if (CPU_HAND == SCISSORS) {
                CONCLUSION = 'LOSE'
            }
            case PAPER: if (CPU_HAND == SCISSORS) {
                CONCLUSION = 'WIN';
            } else if (CPU_HAND == ROCK) {
                CONCLUSION = 'LOSE'
            }
            case SCISSORS: if (CPU_HAND == ROCK) {
                CONCLUSION = 'WIN';
            } else if (CPU_HAND == PAPER) {
                CONCLUSION = 'LOSE'
            }
        }
    }
}