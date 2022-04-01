
import { rollerDice } from "./gameApi.js";

export default class Game {

    constructor(rollerDice) {
        this.isPlayer1 = true;
        this.currScore = 0;
        this.rollerDice = rollerDice;
        this.total = 0;
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

    resetAll() {
        this.currScore = 0;
        this.total = 0;
    }
}
