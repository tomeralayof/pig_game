import { rollerDice  } from "./gameApi.js";
import Game from "./GameData.js";

let game = new Game(rollerDice);

    let switchAndUpdate = () => {
    game.resetCurrScore();
    document.getElementById(`current--${game.isPlayer1 ? "0" : "1"}`).textContent = game.getCurrScore();
    game.switchPlayer();
}
 
let handleDiceEvent = () => {
    let randomCard = game.getRandom();
    document.querySelector(".dice").src = randomCard.value;

    if(randomCard.key === 1) {
        switchAndUpdate();
        return;
    }

    game.setCurrScore(randomCard);
    document.getElementById(`current--${game.isPlayer1 ? "0" : "1"}`).textContent = game.getCurrScore();

    if (game.getCurrScore() === 100) {
        console.log('there is a winner');
    }

    else if((game.getCurrScore() > 100)) {
        console.log('there is a looser');
    }
}

let handleHoldEvent = () => {
    let totalScore = Number(document.getElementById(`score--${game.isPlayer1 ? "0" : "1"}`).textContent);
    let currScore = game.getCurrScore();
    document.getElementById(`score--${game.isPlayer1 ? "0" : "1"}`).textContent = totalScore + currScore;
    switchAndUpdate();
}

let eventHndler = {
    handleDiceEvent,
    handleHoldEvent,
}

export default eventHndler;