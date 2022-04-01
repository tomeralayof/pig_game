'use strict';

import eventHndler from "./modules/eventHandler.js";

const diceBtn = document.querySelector(".btn--roll");
const resetBtn = document.querySelector(".btn--new");
const holdBtn = document.querySelector(".btn--hold");

diceBtn.addEventListener("click",eventHndler.handleDiceEvent);
holdBtn.addEventListener("click", eventHndler.handleHoldEvent);

/* resetBtn.addEventListener("click", () => {
    game.resetAll();
}) */