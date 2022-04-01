import { rollerDice } from "./gameApi.js";
import renders from "./pageRenders.js";

export default class Game {

    constructor(rollerDice) {
        this.init(rollerDice);
    }

    init(rollerDice){
        this.isPlayer1 = true;
        this.currScore = 0;
        this.rollerDice = rollerDice;
        this.total = 0;
        this.isFinish = false;
    }

    switchPlayer() {
        this.isPlayer1 = !this.isPlayer1;
    }

    setCurrScore(randArr) {
        this.currScore += randArr.key;
    }
    
    getCurrScore() {
        return this.currScore;
    }

    getRandom() {
        return this.rollerDice[Math.floor(Math.random()*rollerDice.length)];
    }

    resetCurrScore(){
        this.currScore = 0;
    }

    getTotalScore() {
        this.total = Number(document.getElementById(`score--${this.isPlayer1 ? "0" : "1"}`).textContent);
        return this.total;
    }
}
