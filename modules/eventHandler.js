import game from "./classInstance.js"
import renders from "./pageRenders.js"
import {rollerDice} from "./gameApi.js"

const handleDiceEvent = () => {

    if(game.isFinish) {
        return;
    }

    const randomCard = game.getRandom();
    renders.renderImage(randomCard);

    if(_oneRaffle(randomCard)) {
        renders.renderActivePlayer(game.isPlayer1);
        renders.switchAndUpdate();
        return;
    }

    game.setCurrScore(randomCard);

    const totalScores = game.getCurrScore() + game.getTotalScore();

    if(totalScores > 10 || totalScores == 10){
        _looseSetup(totalScores);
        return;
    }

    renders.renderCurrScore(game.getCurrScore());
}

const handleHoldEvent = () => {
    
    if(game.isFinish){
        return;
    }

    renders.renderActivePlayer(game.isPlayer1);
    const totalScore = game.getTotalScore();
    const currScore = game.getCurrScore();
    renders.renderTotalScore(totalScore + currScore);
    renders.switchAndUpdate();
}

const resetGame = () => {
    let player = game.isPlayer1;
    renders.resetRenders(player);
    game.init(rollerDice);
    player = game.isPlayer1;
    renders.resetRenders(player);
    renders.renderActivePlayer();
}

const _oneRaffle = (randomCard) => {
    return randomCard.key === 1;
}

const _looseSetup = (totalScores) => {
    renders.renderTotalScore(totalScores);
    _chooseLooser(totalScores);
    game.isFinish = true;
    game.isPlayer1 = false;
}

const _chooseLooser = (score) => {
    let player = score > 10 ? game.isPlayer1 : !game.isPlayer1;
    renders.renderLooser(player);
}

const eventHndler = {
    handleDiceEvent,
    handleHoldEvent,
    resetGame
}

export default eventHndler;