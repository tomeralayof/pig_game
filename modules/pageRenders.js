
import game from "./classInstance.js"

const renderImage = (randElem) => {
    document.querySelector(".dice").src = randElem.value;
}

const renderCurrScore = (currScore) => {
    document.getElementById(`current--${game.isPlayer1 ? "0" : "1"}`).textContent = currScore;
}

const renderTotalScore = (totalScore) => {
    document.getElementById(`score--${game.isPlayer1 ? "0" : "1"}`).textContent = totalScore;
}

const switchAndUpdate = () => {
    game.resetCurrScore();
    renderCurrScore(game.getCurrScore());
    game.switchPlayer();
}

const renderActivePlayer = (player) => {
    const current = _getElement(player);
    const nextPlayer = _getElement(!player);
    _classRemove(current,"player--active");
    nextPlayer.classList.add("player--active");
}

const renderLooser = (player) => {
    const currUserBackground = _getElement(player);
    _classRemove(currUserBackground,"player--active");
    currUserBackground.classList.add("player--winner");
}

const resetRenders = (player) => {
    renderCurrScore(0);
    renderTotalScore(0);
    _removeWinner(player);
}

const _getElement = (player) => {
    return document.getElementsByClassName(`player player--${player ? "0" : "1"}`)[0];
}

const _classRemove = (currentElem,className) => {
    currentElem.classList.remove(className);
}

const _removeWinner = (player) => {
    const currUserBackground = _getElement(player);
    _classRemove(currUserBackground,"player--winner");
}

let renders = {
    renderCurrScore,
    renderTotalScore,
    switchAndUpdate,
    renderActivePlayer,
    renderLooser,
    resetRenders,
    renderImage,
}

export default renders;