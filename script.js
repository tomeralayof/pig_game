'use strict';

const dice = document.querySelector(".dice");

const diceBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");
const resetBtn = document.querySelector(".btn--new");

let currentScore,player,isFinished,score;

let init = () => {
    player = 0;
    score = [0,0];
    currentScore = 0;
    isFinished = false;

    _changeById("score--0",0);
    _changeById("score--1",0);

    _changeById("current--0",0);
    _changeById("current--1",0);

    _removeByClassName("player--0","player--winner");
    _removeByClassName("player--1","player--winner");

    _addByClassName("player--0","player--active");

    _removeByClassName("player--1","player--active");
}

setTimeout(()=> {
    init();  
}, 0);

diceBtn.addEventListener("click", ()=> {
    
    if(isFinished) {
        return;
    }
    
    const randomNumber =  Math.floor(Math.random() * (6 - 1 + 1) + 1);
    dice.src = `./images/dice-${randomNumber}.png`;
    
    if(randomNumber != 1) {
        currentScore += randomNumber;
        document.getElementById(`current--${player}`).textContent = currentScore;
        
        let totalScore = currentScore + score[player];
        
        if(totalScore >= 10) {
            _generateWinner(totalScore);
            return;
        }
    }
    
    else {
        _switchUser();
    }
})

holdBtn.addEventListener("click", ()=> {
    
    if (isFinished === true) {
        return;
    }
    
    score[player] += currentScore;
    document.getElementById(`score--${player}`).textContent = score[player];
    currentScore = 0;
    document.getElementById(`current--${player}`).textContent = currentScore;
    _switchUser();
})

resetBtn.addEventListener("click", init);

let _switchUser = () => {
    let currPlayer = document.getElementsByClassName(`player player--${player}`)[0];
    currPlayer.classList.remove("player--active");
    player = player === 1 ? 0 : 1;
    _addByClassName(`player player--${player}`,"player--active");
}

let _changeById = (id,val) => {
    document.getElementById(id).textContent = val;
}

let _addByClassName = (className,addName) => {
    document.getElementsByClassName(className)[0].classList.add(addName);
}

let _generateWinner = (score) => {
    score === 10 ? _defineAsWinner(score) : _defineAsLooser(score);
}

let _defineAsWinner = (totalScore) => {
    _changeById(`score--${player}`,totalScore);
    document.getElementById(`score--${player}`).textContent = totalScore;
    player = (player === 1) ? 0 : 1;
    document.getElementsByClassName(`player--${player}`)[0].classList.add("player--winner");
    isFinished = true;
}

let _defineAsLooser = (totalScore) => {
    _changeById(`score--${player}`,totalScore);
    document.getElementsByClassName(`player--${player}`)[0].classList.add("player--winner");
    isFinished = true;
}

let _removeByClassName = (className,classToRemove) => {
    document.getElementsByClassName(className)[0].classList.remove(classToRemove);
}