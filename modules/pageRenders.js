
import game from "./classInstance.js"

let renderImage = (randElem) => {
    document.querySelector(".dice").src = randElem.value;
}

let renderCurrScore = (currScore) => {
    document.getElementById(`current--${game.isPlayer1 ? "0" : "1"}`).textContent = currScore;
}

let renderTotalScore = (totalScore) => {
    document.getElementById(`score--${game.isPlayer1 ? "0" : "1"}`).textContent = totalScore;
}

let switchAndUpdate = () => {
    game.resetCurrScore();
    renderCurrScore(game.getCurrScore());
    game.switchPlayer();
}

let renderActivePlayer = () => {
    const currUserBackground = _activePlayer(game.isPlayer1);
    const nextUserBackground = _activePlayer(!game.isPlayer1);
    currUserBackground.classList.remove("player--active");
    nextUserBackground.classList.add("player--active");
}

let renderLooser = () => {
    const currUserBackground = _activePlayer();
    currUserBackground.classList.remove("player--active");
    currUserBackground.classList.add("player--winner");
}

let removeWinner = () => {
    const currUserBackground = _activePlayer();
    currUserBackground.classList.remove("player--winner");
}


let _activePlayer = () => {
   return document.getElementsByClassName(`player player--${game.isPlayer1 ? "0" : "1"}`)[0];
}

let resetRenders = () => {
    renderCurrScore(0);
    renderTotalScore(0);
    removeWinner();
}

let renders = {
    renderCurrScore,
    renderTotalScore,
    switchAndUpdate,
    renderActivePlayer,
    renderLooser,
    resetRenders,
    renderImage,
    removeWinner
}

export default renders;