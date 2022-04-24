/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!**************************!*\
  !*** ./src/factories.js ***!
  \**************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "computer": () => (/* binding */ computer),
/* harmony export */   "gameBoardFactory": () => (/* binding */ gameBoardFactory),
/* harmony export */   "player": () => (/* binding */ player),
/* harmony export */   "shipFactory": () => (/* binding */ shipFactory)
/* harmony export */ });


//Factory function to create the ships
const shipFactory = (name,length) => {
    //creates an array the size of the ships length to keep track of hits.
    const shipHealth = [];

    //updates the shipHealth array with the position the ship got hit in
    const hit = () => {
        shipHealth.push('x')
            return shipHealth;
    }
    //if every value in the shipHealth array is hit this function returns that the ship is sunk
    const isSunk = () => {
        if(shipHealth.length === length){
            return true
        }
        return false
    }
    return {name,length,hit, isSunk}
}

//Factory function to create game board
const gameBoardFactory = () =>{
    let gameArray = [];
    //create empty array to initialize the game
    const startGame = () =>{
            gameArray = [
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','','']
        ]

    }
    //list of ships that are still alive
    let shipsAlive = [];

    //places ship in row and column and orients how the player wants 
    const place = (ship,row, column, orient) => {
        //checks if where the ship is to be placed is empty
        const canPlace = () => {
            let empty = true
            //checking if ship is already in the spot new ship is to be placed
            if(orient === 'horizontal'){
                for(let i = column; i< (column+ship.length); i++){
                    if(gameArray[row][i] !== ''){
                        empty = false
                    }
                }
            }  
            else if(orient === 'vertical'){
                for(let i = row; i< (row+ship.length); i++){
                    if(gameArray[i][column] !== ''){
                        empty = false
                    }
                }
            }  
            return empty
        };
        //horizontal orrientation placement
        if(orient === 'horizontal'  && canPlace()) {
            for(let i = column; i< (column+ship.length); i++){
                gameArray[row][i] = ship;
            }
            shipsAlive.push(ship.name)
        }

        //vertical orrientations placement
        else if(orient === 'vertical' && canPlace()) {
            for(let i = row; i<((ship.length + row));i++){
                gameArray[i][column] = ship;
            }
        }
        return gameArray;
    }

    //Recieves coordinates from the board to recieve an attack
    const recieveAttack = (row,column) =>{
        //If the gameArray is empty place a small x for a miss
        if(gameArray[row][column] === ''){
            gameArray[row][column] = 'x'
        }
        else{
            //if there is a ship at the coordinates hit the board and place a large X to show there is a hit
            gameArray[row][column].hit();
            //if isSunk returns true that ship gets popped from the shipsAlive array.
            if(gameArray[row][column].isSunk()){
                shipsAlive.pop(gameArray[row][column].name)
            }
            gameArray[row][column] = 'X';
            
        }
        return gameArray
    }
    const shipsAliveGetter = () => shipsAlive;
    const arrayGetter = () => gameArray;
    return{startGame, place, recieveAttack,arrayGetter, shipsAliveGetter}
}

//Player factor Function
const player = () =>{
    //creates a board for the player
    let playerBoard = gameBoardFactory();
    //Initializes the board for the player
    playerBoard.startGame();
    //Helper function for the place method
    const playerPlace = (ship,row,column,orient) =>{
        playerBoard.place(ship,row,column,orient);
        return playerBoard
    }

    //recieves an attack and then sends that attack to the computerBoard
    const playerAttack = (computerBoard,e) => {
        const row = parseInt(e.target.id[0])
        const col = parseInt(e.target.id[1])
        computerBoard.recieveAttack(row,col);
        return true
    }   
    return {playerBoard,playerPlace,playerAttack}
}

//computer factory function
const computer = () => {
    //creates a board for the computer
    let computerBoard = gameBoardFactory();
    //Initializes the board for the computer
    computerBoard.startGame();
    //Selects a random coordinate.
    const computerRandomAttack = (playerBoard) =>{
        let randomChoice = () => {
            let randomRow = Math.floor(Math.random() *10)
            let randomColumn = Math.floor(Math.random() * 10)
            return [randomRow, randomColumn]
        }
        let random= randomChoice();
        let row = random[0];
        let column = random[1];
        if((playerBoard.arrayGetter()[row][column] === 'x') || (playerBoard.arrayGetter()[row][column] === 'X')){
            computerRandomAttack(playerBoard)
        }
        else{
            console.log(playerBoard.arrayGetter()[row][column])
            playerBoard.recieveAttack(row,column);
            return playerBoard.arrayGetter();
        }

    }
    return {computerBoard,computerRandomAttack}
}



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjdG9yeS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyx5QkFBeUI7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHNCQUFzQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MseUJBQXlCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkIsd0JBQXdCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWiIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ZhY3Rvcmllcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlxuXG4vL0ZhY3RvcnkgZnVuY3Rpb24gdG8gY3JlYXRlIHRoZSBzaGlwc1xuY29uc3Qgc2hpcEZhY3RvcnkgPSAobmFtZSxsZW5ndGgpID0+IHtcbiAgICAvL2NyZWF0ZXMgYW4gYXJyYXkgdGhlIHNpemUgb2YgdGhlIHNoaXBzIGxlbmd0aCB0byBrZWVwIHRyYWNrIG9mIGhpdHMuXG4gICAgY29uc3Qgc2hpcEhlYWx0aCA9IFtdO1xuXG4gICAgLy91cGRhdGVzIHRoZSBzaGlwSGVhbHRoIGFycmF5IHdpdGggdGhlIHBvc2l0aW9uIHRoZSBzaGlwIGdvdCBoaXQgaW5cbiAgICBjb25zdCBoaXQgPSAoKSA9PiB7XG4gICAgICAgIHNoaXBIZWFsdGgucHVzaCgneCcpXG4gICAgICAgICAgICByZXR1cm4gc2hpcEhlYWx0aDtcbiAgICB9XG4gICAgLy9pZiBldmVyeSB2YWx1ZSBpbiB0aGUgc2hpcEhlYWx0aCBhcnJheSBpcyBoaXQgdGhpcyBmdW5jdGlvbiByZXR1cm5zIHRoYXQgdGhlIHNoaXAgaXMgc3Vua1xuICAgIGNvbnN0IGlzU3VuayA9ICgpID0+IHtcbiAgICAgICAgaWYoc2hpcEhlYWx0aC5sZW5ndGggPT09IGxlbmd0aCl7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbiAgICByZXR1cm4ge25hbWUsbGVuZ3RoLGhpdCwgaXNTdW5rfVxufVxuXG4vL0ZhY3RvcnkgZnVuY3Rpb24gdG8gY3JlYXRlIGdhbWUgYm9hcmRcbmNvbnN0IGdhbWVCb2FyZEZhY3RvcnkgPSAoKSA9PntcbiAgICBsZXQgZ2FtZUFycmF5ID0gW107XG4gICAgLy9jcmVhdGUgZW1wdHkgYXJyYXkgdG8gaW5pdGlhbGl6ZSB0aGUgZ2FtZVxuICAgIGNvbnN0IHN0YXJ0R2FtZSA9ICgpID0+e1xuICAgICAgICAgICAgZ2FtZUFycmF5ID0gW1xuICAgICAgICAgICAgWycnLCcnLCcnLCcnLCcnLCcnLCcnLCcnLCcnLCcnXSxcbiAgICAgICAgICAgIFsnJywnJywnJywnJywnJywnJywnJywnJywnJywnJ10sXG4gICAgICAgICAgICBbJycsJycsJycsJycsJycsJycsJycsJycsJycsJyddLFxuICAgICAgICAgICAgWycnLCcnLCcnLCcnLCcnLCcnLCcnLCcnLCcnLCcnXSxcbiAgICAgICAgICAgIFsnJywnJywnJywnJywnJywnJywnJywnJywnJywnJ10sXG4gICAgICAgICAgICBbJycsJycsJycsJycsJycsJycsJycsJycsJycsJyddLFxuICAgICAgICAgICAgWycnLCcnLCcnLCcnLCcnLCcnLCcnLCcnLCcnLCcnXSxcbiAgICAgICAgICAgIFsnJywnJywnJywnJywnJywnJywnJywnJywnJywnJ10sXG4gICAgICAgICAgICBbJycsJycsJycsJycsJycsJycsJycsJycsJycsJyddLFxuICAgICAgICAgICAgWycnLCcnLCcnLCcnLCcnLCcnLCcnLCcnLCcnLCcnXVxuICAgICAgICBdXG5cbiAgICB9XG4gICAgLy9saXN0IG9mIHNoaXBzIHRoYXQgYXJlIHN0aWxsIGFsaXZlXG4gICAgbGV0IHNoaXBzQWxpdmUgPSBbXTtcblxuICAgIC8vcGxhY2VzIHNoaXAgaW4gcm93IGFuZCBjb2x1bW4gYW5kIG9yaWVudHMgaG93IHRoZSBwbGF5ZXIgd2FudHMgXG4gICAgY29uc3QgcGxhY2UgPSAoc2hpcCxyb3csIGNvbHVtbiwgb3JpZW50KSA9PiB7XG4gICAgICAgIC8vY2hlY2tzIGlmIHdoZXJlIHRoZSBzaGlwIGlzIHRvIGJlIHBsYWNlZCBpcyBlbXB0eVxuICAgICAgICBjb25zdCBjYW5QbGFjZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGxldCBlbXB0eSA9IHRydWVcbiAgICAgICAgICAgIC8vY2hlY2tpbmcgaWYgc2hpcCBpcyBhbHJlYWR5IGluIHRoZSBzcG90IG5ldyBzaGlwIGlzIHRvIGJlIHBsYWNlZFxuICAgICAgICAgICAgaWYob3JpZW50ID09PSAnaG9yaXpvbnRhbCcpe1xuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IGNvbHVtbjsgaTwgKGNvbHVtbitzaGlwLmxlbmd0aCk7IGkrKyl7XG4gICAgICAgICAgICAgICAgICAgIGlmKGdhbWVBcnJheVtyb3ddW2ldICE9PSAnJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbXB0eSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ICBcbiAgICAgICAgICAgIGVsc2UgaWYob3JpZW50ID09PSAndmVydGljYWwnKXtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSByb3c7IGk8IChyb3crc2hpcC5sZW5ndGgpOyBpKyspe1xuICAgICAgICAgICAgICAgICAgICBpZihnYW1lQXJyYXlbaV1bY29sdW1uXSAhPT0gJycpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZW1wdHkgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSAgXG4gICAgICAgICAgICByZXR1cm4gZW1wdHlcbiAgICAgICAgfTtcbiAgICAgICAgLy9ob3Jpem9udGFsIG9ycmllbnRhdGlvbiBwbGFjZW1lbnRcbiAgICAgICAgaWYob3JpZW50ID09PSAnaG9yaXpvbnRhbCcgICYmIGNhblBsYWNlKCkpIHtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IGNvbHVtbjsgaTwgKGNvbHVtbitzaGlwLmxlbmd0aCk7IGkrKyl7XG4gICAgICAgICAgICAgICAgZ2FtZUFycmF5W3Jvd11baV0gPSBzaGlwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2hpcHNBbGl2ZS5wdXNoKHNoaXAubmFtZSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8vdmVydGljYWwgb3JyaWVudGF0aW9ucyBwbGFjZW1lbnRcbiAgICAgICAgZWxzZSBpZihvcmllbnQgPT09ICd2ZXJ0aWNhbCcgJiYgY2FuUGxhY2UoKSkge1xuICAgICAgICAgICAgZm9yKGxldCBpID0gcm93OyBpPCgoc2hpcC5sZW5ndGggKyByb3cpKTtpKyspe1xuICAgICAgICAgICAgICAgIGdhbWVBcnJheVtpXVtjb2x1bW5dID0gc2hpcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZ2FtZUFycmF5O1xuICAgIH1cblxuICAgIC8vUmVjaWV2ZXMgY29vcmRpbmF0ZXMgZnJvbSB0aGUgYm9hcmQgdG8gcmVjaWV2ZSBhbiBhdHRhY2tcbiAgICBjb25zdCByZWNpZXZlQXR0YWNrID0gKHJvdyxjb2x1bW4pID0+e1xuICAgICAgICAvL0lmIHRoZSBnYW1lQXJyYXkgaXMgZW1wdHkgcGxhY2UgYSBzbWFsbCB4IGZvciBhIG1pc3NcbiAgICAgICAgaWYoZ2FtZUFycmF5W3Jvd11bY29sdW1uXSA9PT0gJycpe1xuICAgICAgICAgICAgZ2FtZUFycmF5W3Jvd11bY29sdW1uXSA9ICd4J1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICAvL2lmIHRoZXJlIGlzIGEgc2hpcCBhdCB0aGUgY29vcmRpbmF0ZXMgaGl0IHRoZSBib2FyZCBhbmQgcGxhY2UgYSBsYXJnZSBYIHRvIHNob3cgdGhlcmUgaXMgYSBoaXRcbiAgICAgICAgICAgIGdhbWVBcnJheVtyb3ddW2NvbHVtbl0uaGl0KCk7XG4gICAgICAgICAgICAvL2lmIGlzU3VuayByZXR1cm5zIHRydWUgdGhhdCBzaGlwIGdldHMgcG9wcGVkIGZyb20gdGhlIHNoaXBzQWxpdmUgYXJyYXkuXG4gICAgICAgICAgICBpZihnYW1lQXJyYXlbcm93XVtjb2x1bW5dLmlzU3VuaygpKXtcbiAgICAgICAgICAgICAgICBzaGlwc0FsaXZlLnBvcChnYW1lQXJyYXlbcm93XVtjb2x1bW5dLm5hbWUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBnYW1lQXJyYXlbcm93XVtjb2x1bW5dID0gJ1gnO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdhbWVBcnJheVxuICAgIH1cbiAgICBjb25zdCBzaGlwc0FsaXZlR2V0dGVyID0gKCkgPT4gc2hpcHNBbGl2ZTtcbiAgICBjb25zdCBhcnJheUdldHRlciA9ICgpID0+IGdhbWVBcnJheTtcbiAgICByZXR1cm57c3RhcnRHYW1lLCBwbGFjZSwgcmVjaWV2ZUF0dGFjayxhcnJheUdldHRlciwgc2hpcHNBbGl2ZUdldHRlcn1cbn1cblxuLy9QbGF5ZXIgZmFjdG9yIEZ1bmN0aW9uXG5jb25zdCBwbGF5ZXIgPSAoKSA9PntcbiAgICAvL2NyZWF0ZXMgYSBib2FyZCBmb3IgdGhlIHBsYXllclxuICAgIGxldCBwbGF5ZXJCb2FyZCA9IGdhbWVCb2FyZEZhY3RvcnkoKTtcbiAgICAvL0luaXRpYWxpemVzIHRoZSBib2FyZCBmb3IgdGhlIHBsYXllclxuICAgIHBsYXllckJvYXJkLnN0YXJ0R2FtZSgpO1xuICAgIC8vSGVscGVyIGZ1bmN0aW9uIGZvciB0aGUgcGxhY2UgbWV0aG9kXG4gICAgY29uc3QgcGxheWVyUGxhY2UgPSAoc2hpcCxyb3csY29sdW1uLG9yaWVudCkgPT57XG4gICAgICAgIHBsYXllckJvYXJkLnBsYWNlKHNoaXAscm93LGNvbHVtbixvcmllbnQpO1xuICAgICAgICByZXR1cm4gcGxheWVyQm9hcmRcbiAgICB9XG5cbiAgICAvL3JlY2lldmVzIGFuIGF0dGFjayBhbmQgdGhlbiBzZW5kcyB0aGF0IGF0dGFjayB0byB0aGUgY29tcHV0ZXJCb2FyZFxuICAgIGNvbnN0IHBsYXllckF0dGFjayA9IChjb21wdXRlckJvYXJkLGUpID0+IHtcbiAgICAgICAgY29uc3Qgcm93ID0gcGFyc2VJbnQoZS50YXJnZXQuaWRbMF0pXG4gICAgICAgIGNvbnN0IGNvbCA9IHBhcnNlSW50KGUudGFyZ2V0LmlkWzFdKVxuICAgICAgICBjb21wdXRlckJvYXJkLnJlY2lldmVBdHRhY2socm93LGNvbCk7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfSAgIFxuICAgIHJldHVybiB7cGxheWVyQm9hcmQscGxheWVyUGxhY2UscGxheWVyQXR0YWNrfVxufVxuXG4vL2NvbXB1dGVyIGZhY3RvcnkgZnVuY3Rpb25cbmNvbnN0IGNvbXB1dGVyID0gKCkgPT4ge1xuICAgIC8vY3JlYXRlcyBhIGJvYXJkIGZvciB0aGUgY29tcHV0ZXJcbiAgICBsZXQgY29tcHV0ZXJCb2FyZCA9IGdhbWVCb2FyZEZhY3RvcnkoKTtcbiAgICAvL0luaXRpYWxpemVzIHRoZSBib2FyZCBmb3IgdGhlIGNvbXB1dGVyXG4gICAgY29tcHV0ZXJCb2FyZC5zdGFydEdhbWUoKTtcbiAgICAvL1NlbGVjdHMgYSByYW5kb20gY29vcmRpbmF0ZS5cbiAgICBjb25zdCBjb21wdXRlclJhbmRvbUF0dGFjayA9IChwbGF5ZXJCb2FyZCkgPT57XG4gICAgICAgIGxldCByYW5kb21DaG9pY2UgPSAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgcmFuZG9tUm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICoxMClcbiAgICAgICAgICAgIGxldCByYW5kb21Db2x1bW4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcbiAgICAgICAgICAgIHJldHVybiBbcmFuZG9tUm93LCByYW5kb21Db2x1bW5dXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJhbmRvbT0gcmFuZG9tQ2hvaWNlKCk7XG4gICAgICAgIGxldCByb3cgPSByYW5kb21bMF07XG4gICAgICAgIGxldCBjb2x1bW4gPSByYW5kb21bMV07XG4gICAgICAgIGlmKChwbGF5ZXJCb2FyZC5hcnJheUdldHRlcigpW3Jvd11bY29sdW1uXSA9PT0gJ3gnKSB8fCAocGxheWVyQm9hcmQuYXJyYXlHZXR0ZXIoKVtyb3ddW2NvbHVtbl0gPT09ICdYJykpe1xuICAgICAgICAgICAgY29tcHV0ZXJSYW5kb21BdHRhY2socGxheWVyQm9hcmQpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHBsYXllckJvYXJkLmFycmF5R2V0dGVyKClbcm93XVtjb2x1bW5dKVxuICAgICAgICAgICAgcGxheWVyQm9hcmQucmVjaWV2ZUF0dGFjayhyb3csY29sdW1uKTtcbiAgICAgICAgICAgIHJldHVybiBwbGF5ZXJCb2FyZC5hcnJheUdldHRlcigpO1xuICAgICAgICB9XG5cbiAgICB9XG4gICAgcmV0dXJuIHtjb21wdXRlckJvYXJkLGNvbXB1dGVyUmFuZG9tQXR0YWNrfVxufVxuXG5cbmV4cG9ydCB7c2hpcEZhY3RvcnksZ2FtZUJvYXJkRmFjdG9yeSwgcGxheWVyLGNvbXB1dGVyfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==