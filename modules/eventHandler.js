import game from "./classInstance.js"
import renders from "./pageRenders.js"
import {rollerDice} from "./gameApi.js"

let handleDiceEvent = () => {

    if(game.isFinish) {
        return;
    }

    let randomCard = game.getRandom();
    renders.renderImage(randomCard);

    if(_oneRaffle(randomCard)) {
        renders.renderActivePlayer();
        renders.switchAndUpdate();
        return;
    }

    game.setCurrScore(randomCard);

    let totalScores = game.getCurrScore() + game.getTotalScore();

    if(totalScores > 10 || totalScores == 10){
        _looseSetup(totalScores);
        return;
    }

    renders.renderCurrScore(game.getCurrScore());
}

let handleHoldEvent = () => {
    
    if(game.isFinish){
        return;
    }

    renders.renderActivePlayer();
    let totalScore = game.getTotalScore();
    let currScore = game.getCurrScore();
    renders.renderTotalScore(totalScore + currScore);
    renders.switchAndUpdate();
}

let resetGame = () => {

    renders.resetRenders();
    game.init(rollerDice);
    renders.resetRenders();
    renders.renderActivePlayer();
}


let _oneRaffle = (randomCard) => {
    return randomCard.key === 1;
}

let _looseSetup = (totalScores) => {
    renders.renderTotalScore(totalScores);
    _chooseLooser(totalScores);
    game.isFinish = true;
    game.isPlayer1 = false;
}

let _chooseLooser = (score) => {
    game.isPlayer1 = score > 10 ? game.isPlayer1 : !game.isPlayer1;
    renders.renderLooser();
}

let eventHndler = {
    handleDiceEvent,
    handleHoldEvent,
    resetGame
}

export default eventHndler;

