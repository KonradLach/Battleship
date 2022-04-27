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
    let isPlaced = false;
    const isPlacedSetter = (arg) => isPlaced = arg;
    const isPlacedGetter = () => isPlaced;
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
    return {name,length,hit, isSunk,isPlacedGetter,isPlacedSetter}
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
    const shipsAliveGetter = () => shipsAlive;
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
            shipsAlive.push(ship.name)
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
        return playerBoard.place(ship,row,column,orient);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjdG9yeS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyx5QkFBeUI7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHNCQUFzQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MseUJBQXlCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkIsd0JBQXdCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFlBQVk7QUFDWiIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2ZhY3Rvcmllcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIlxuXG4vL0ZhY3RvcnkgZnVuY3Rpb24gdG8gY3JlYXRlIHRoZSBzaGlwc1xuY29uc3Qgc2hpcEZhY3RvcnkgPSAobmFtZSxsZW5ndGgpID0+IHtcbiAgICAvL2NyZWF0ZXMgYW4gYXJyYXkgdGhlIHNpemUgb2YgdGhlIHNoaXBzIGxlbmd0aCB0byBrZWVwIHRyYWNrIG9mIGhpdHMuXG4gICAgY29uc3Qgc2hpcEhlYWx0aCA9IFtdO1xuICAgIGxldCBpc1BsYWNlZCA9IGZhbHNlO1xuICAgIGNvbnN0IGlzUGxhY2VkU2V0dGVyID0gKGFyZykgPT4gaXNQbGFjZWQgPSBhcmc7XG4gICAgY29uc3QgaXNQbGFjZWRHZXR0ZXIgPSAoKSA9PiBpc1BsYWNlZDtcbiAgICAvL3VwZGF0ZXMgdGhlIHNoaXBIZWFsdGggYXJyYXkgd2l0aCB0aGUgcG9zaXRpb24gdGhlIHNoaXAgZ290IGhpdCBpblxuICAgIGNvbnN0IGhpdCA9ICgpID0+IHtcbiAgICAgICAgc2hpcEhlYWx0aC5wdXNoKCd4JylcbiAgICAgICAgICAgIHJldHVybiBzaGlwSGVhbHRoO1xuICAgIH1cbiAgICAvL2lmIGV2ZXJ5IHZhbHVlIGluIHRoZSBzaGlwSGVhbHRoIGFycmF5IGlzIGhpdCB0aGlzIGZ1bmN0aW9uIHJldHVybnMgdGhhdCB0aGUgc2hpcCBpcyBzdW5rXG4gICAgY29uc3QgaXNTdW5rID0gKCkgPT4ge1xuICAgICAgICBpZihzaGlwSGVhbHRoLmxlbmd0aCA9PT0gbGVuZ3RoKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuICAgIHJldHVybiB7bmFtZSxsZW5ndGgsaGl0LCBpc1N1bmssaXNQbGFjZWRHZXR0ZXIsaXNQbGFjZWRTZXR0ZXJ9XG59XG5cbi8vRmFjdG9yeSBmdW5jdGlvbiB0byBjcmVhdGUgZ2FtZSBib2FyZFxuY29uc3QgZ2FtZUJvYXJkRmFjdG9yeSA9ICgpID0+e1xuICAgIGxldCBnYW1lQXJyYXkgPSBbXTtcbiAgICAvL2NyZWF0ZSBlbXB0eSBhcnJheSB0byBpbml0aWFsaXplIHRoZSBnYW1lXG4gICAgY29uc3Qgc3RhcnRHYW1lID0gKCkgPT57XG4gICAgICAgICAgICBnYW1lQXJyYXkgPSBbXG4gICAgICAgICAgICBbJycsJycsJycsJycsJycsJycsJycsJycsJycsJyddLFxuICAgICAgICAgICAgWycnLCcnLCcnLCcnLCcnLCcnLCcnLCcnLCcnLCcnXSxcbiAgICAgICAgICAgIFsnJywnJywnJywnJywnJywnJywnJywnJywnJywnJ10sXG4gICAgICAgICAgICBbJycsJycsJycsJycsJycsJycsJycsJycsJycsJyddLFxuICAgICAgICAgICAgWycnLCcnLCcnLCcnLCcnLCcnLCcnLCcnLCcnLCcnXSxcbiAgICAgICAgICAgIFsnJywnJywnJywnJywnJywnJywnJywnJywnJywnJ10sXG4gICAgICAgICAgICBbJycsJycsJycsJycsJycsJycsJycsJycsJycsJyddLFxuICAgICAgICAgICAgWycnLCcnLCcnLCcnLCcnLCcnLCcnLCcnLCcnLCcnXSxcbiAgICAgICAgICAgIFsnJywnJywnJywnJywnJywnJywnJywnJywnJywnJ10sXG4gICAgICAgICAgICBbJycsJycsJycsJycsJycsJycsJycsJycsJycsJyddXG4gICAgICAgIF1cblxuICAgIH1cbiAgICAvL2xpc3Qgb2Ygc2hpcHMgdGhhdCBhcmUgc3RpbGwgYWxpdmVcbiAgICBsZXQgc2hpcHNBbGl2ZSA9IFtdO1xuICAgIGNvbnN0IHNoaXBzQWxpdmVHZXR0ZXIgPSAoKSA9PiBzaGlwc0FsaXZlO1xuICAgIC8vcGxhY2VzIHNoaXAgaW4gcm93IGFuZCBjb2x1bW4gYW5kIG9yaWVudHMgaG93IHRoZSBwbGF5ZXIgd2FudHMgXG4gICAgY29uc3QgcGxhY2UgPSAoc2hpcCxyb3csIGNvbHVtbiwgb3JpZW50KSA9PiB7XG4gICAgICAgIC8vY2hlY2tzIGlmIHdoZXJlIHRoZSBzaGlwIGlzIHRvIGJlIHBsYWNlZCBpcyBlbXB0eVxuICAgICAgICBjb25zdCBjYW5QbGFjZSA9ICgpID0+IHtcbiAgICAgICAgICAgIGxldCBlbXB0eSA9IHRydWVcbiAgICAgICAgICAgIC8vY2hlY2tpbmcgaWYgc2hpcCBpcyBhbHJlYWR5IGluIHRoZSBzcG90IG5ldyBzaGlwIGlzIHRvIGJlIHBsYWNlZFxuICAgICAgICAgICAgaWYob3JpZW50ID09PSAnaG9yaXpvbnRhbCcpe1xuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IGNvbHVtbjsgaTwgKGNvbHVtbitzaGlwLmxlbmd0aCk7IGkrKyl7XG4gICAgICAgICAgICAgICAgICAgIGlmKGdhbWVBcnJheVtyb3ddW2ldICE9PSAnJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbXB0eSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ICBcbiAgICAgICAgICAgIGVsc2UgaWYob3JpZW50ID09PSAndmVydGljYWwnKXtcbiAgICAgICAgICAgICAgICBmb3IobGV0IGkgPSByb3c7IGk8IChyb3crc2hpcC5sZW5ndGgpOyBpKyspe1xuICAgICAgICAgICAgICAgICAgICBpZihnYW1lQXJyYXlbaV1bY29sdW1uXSAhPT0gJycpe1xuICAgICAgICAgICAgICAgICAgICAgICAgZW1wdHkgPSBmYWxzZVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSAgXG4gICAgICAgICAgICByZXR1cm4gZW1wdHlcbiAgICAgICAgfTtcbiAgICAgICAgLy9ob3Jpem9udGFsIG9ycmllbnRhdGlvbiBwbGFjZW1lbnRcbiAgICAgICAgaWYob3JpZW50ID09PSAnaG9yaXpvbnRhbCcgICYmIGNhblBsYWNlKCkpIHtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IGNvbHVtbjsgaTwgKGNvbHVtbitzaGlwLmxlbmd0aCk7IGkrKyl7XG4gICAgICAgICAgICAgICAgZ2FtZUFycmF5W3Jvd11baV0gPSBzaGlwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2hpcHNBbGl2ZS5wdXNoKHNoaXAubmFtZSlcbiAgICAgICAgfVxuXG4gICAgICAgIC8vdmVydGljYWwgb3JyaWVudGF0aW9ucyBwbGFjZW1lbnRcbiAgICAgICAgZWxzZSBpZihvcmllbnQgPT09ICd2ZXJ0aWNhbCcgJiYgY2FuUGxhY2UoKSkge1xuICAgICAgICAgICAgZm9yKGxldCBpID0gcm93OyBpPCgoc2hpcC5sZW5ndGggKyByb3cpKTtpKyspe1xuICAgICAgICAgICAgICAgIGdhbWVBcnJheVtpXVtjb2x1bW5dID0gc2hpcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNoaXBzQWxpdmUucHVzaChzaGlwLm5hbWUpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdhbWVBcnJheTtcbiAgICB9XG5cbiAgICAvL1JlY2lldmVzIGNvb3JkaW5hdGVzIGZyb20gdGhlIGJvYXJkIHRvIHJlY2lldmUgYW4gYXR0YWNrXG4gICAgY29uc3QgcmVjaWV2ZUF0dGFjayA9IChyb3csY29sdW1uKSA9PntcbiAgICAgICAgLy9JZiB0aGUgZ2FtZUFycmF5IGlzIGVtcHR5IHBsYWNlIGEgc21hbGwgeCBmb3IgYSBtaXNzXG4gICAgICAgIGlmKGdhbWVBcnJheVtyb3ddW2NvbHVtbl0gPT09ICcnKXtcbiAgICAgICAgICAgIGdhbWVBcnJheVtyb3ddW2NvbHVtbl0gPSAneCdcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgLy9pZiB0aGVyZSBpcyBhIHNoaXAgYXQgdGhlIGNvb3JkaW5hdGVzIGhpdCB0aGUgYm9hcmQgYW5kIHBsYWNlIGEgbGFyZ2UgWCB0byBzaG93IHRoZXJlIGlzIGEgaGl0XG4gICAgICAgICAgICBnYW1lQXJyYXlbcm93XVtjb2x1bW5dLmhpdCgpO1xuICAgICAgICAgICAgLy9pZiBpc1N1bmsgcmV0dXJucyB0cnVlIHRoYXQgc2hpcCBnZXRzIHBvcHBlZCBmcm9tIHRoZSBzaGlwc0FsaXZlIGFycmF5LlxuICAgICAgICAgICAgaWYoZ2FtZUFycmF5W3Jvd11bY29sdW1uXS5pc1N1bmsoKSl7XG4gICAgICAgICAgICAgICAgc2hpcHNBbGl2ZS5wb3AoZ2FtZUFycmF5W3Jvd11bY29sdW1uXS5uYW1lKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZ2FtZUFycmF5W3Jvd11bY29sdW1uXSA9ICdYJztcbiAgICAgICAgICAgIFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBnYW1lQXJyYXlcbiAgICB9XG4gICAgXG4gICAgY29uc3QgYXJyYXlHZXR0ZXIgPSAoKSA9PiBnYW1lQXJyYXk7XG4gICAgcmV0dXJue3N0YXJ0R2FtZSwgcGxhY2UsIHJlY2lldmVBdHRhY2ssYXJyYXlHZXR0ZXIsIHNoaXBzQWxpdmVHZXR0ZXJ9XG59XG5cbi8vUGxheWVyIGZhY3RvciBGdW5jdGlvblxuY29uc3QgcGxheWVyID0gKCkgPT57XG4gICAgLy9jcmVhdGVzIGEgYm9hcmQgZm9yIHRoZSBwbGF5ZXJcbiAgICBsZXQgcGxheWVyQm9hcmQgPSBnYW1lQm9hcmRGYWN0b3J5KCk7XG4gICAgLy9Jbml0aWFsaXplcyB0aGUgYm9hcmQgZm9yIHRoZSBwbGF5ZXJcbiAgICBwbGF5ZXJCb2FyZC5zdGFydEdhbWUoKTtcbiAgICAvL0hlbHBlciBmdW5jdGlvbiBmb3IgdGhlIHBsYWNlIG1ldGhvZFxuICAgIGNvbnN0IHBsYXllclBsYWNlID0gKHNoaXAscm93LGNvbHVtbixvcmllbnQpID0+e1xuICAgICAgICByZXR1cm4gcGxheWVyQm9hcmQucGxhY2Uoc2hpcCxyb3csY29sdW1uLG9yaWVudCk7XG4gICAgfVxuXG4gICAgLy9yZWNpZXZlcyBhbiBhdHRhY2sgYW5kIHRoZW4gc2VuZHMgdGhhdCBhdHRhY2sgdG8gdGhlIGNvbXB1dGVyQm9hcmRcbiAgICBjb25zdCBwbGF5ZXJBdHRhY2sgPSAoY29tcHV0ZXJCb2FyZCxlKSA9PiB7XG4gICAgICAgIGNvbnN0IHJvdyA9IHBhcnNlSW50KGUudGFyZ2V0LmlkWzBdKVxuICAgICAgICBjb25zdCBjb2wgPSBwYXJzZUludChlLnRhcmdldC5pZFsxXSlcbiAgICAgICAgY29tcHV0ZXJCb2FyZC5yZWNpZXZlQXR0YWNrKHJvdyxjb2wpO1xuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gICBcbiAgICByZXR1cm4ge3BsYXllckJvYXJkLHBsYXllclBsYWNlLHBsYXllckF0dGFja31cbn1cblxuLy9jb21wdXRlciBmYWN0b3J5IGZ1bmN0aW9uXG5jb25zdCBjb21wdXRlciA9ICgpID0+IHtcbiAgICAvL2NyZWF0ZXMgYSBib2FyZCBmb3IgdGhlIGNvbXB1dGVyXG4gICAgbGV0IGNvbXB1dGVyQm9hcmQgPSBnYW1lQm9hcmRGYWN0b3J5KCk7XG4gICAgLy9Jbml0aWFsaXplcyB0aGUgYm9hcmQgZm9yIHRoZSBjb21wdXRlclxuICAgIGNvbXB1dGVyQm9hcmQuc3RhcnRHYW1lKCk7XG4gICAgLy9TZWxlY3RzIGEgcmFuZG9tIGNvb3JkaW5hdGUuXG4gICAgY29uc3QgY29tcHV0ZXJSYW5kb21BdHRhY2sgPSAocGxheWVyQm9hcmQpID0+e1xuICAgICAgICBsZXQgcmFuZG9tQ2hvaWNlID0gKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHJhbmRvbVJvdyA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqMTApXG4gICAgICAgICAgICBsZXQgcmFuZG9tQ29sdW1uID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApXG4gICAgICAgICAgICByZXR1cm4gW3JhbmRvbVJvdywgcmFuZG9tQ29sdW1uXVxuICAgICAgICB9XG4gICAgICAgIGxldCByYW5kb209IHJhbmRvbUNob2ljZSgpO1xuICAgICAgICBsZXQgcm93ID0gcmFuZG9tWzBdO1xuICAgICAgICBsZXQgY29sdW1uID0gcmFuZG9tWzFdO1xuICAgICAgICBpZigocGxheWVyQm9hcmQuYXJyYXlHZXR0ZXIoKVtyb3ddW2NvbHVtbl0gPT09ICd4JykgfHwgKHBsYXllckJvYXJkLmFycmF5R2V0dGVyKClbcm93XVtjb2x1bW5dID09PSAnWCcpKXtcbiAgICAgICAgICAgIGNvbXB1dGVyUmFuZG9tQXR0YWNrKHBsYXllckJvYXJkKVxuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwbGF5ZXJCb2FyZC5hcnJheUdldHRlcigpW3Jvd11bY29sdW1uXSlcbiAgICAgICAgICAgIHBsYXllckJvYXJkLnJlY2lldmVBdHRhY2socm93LGNvbHVtbik7XG4gICAgICAgICAgICByZXR1cm4gcGxheWVyQm9hcmQuYXJyYXlHZXR0ZXIoKTtcbiAgICAgICAgfVxuXG4gICAgfVxuICAgIHJldHVybiB7Y29tcHV0ZXJCb2FyZCxjb21wdXRlclJhbmRvbUF0dGFja31cbn1cblxuXG5leHBvcnQge3NoaXBGYWN0b3J5LGdhbWVCb2FyZEZhY3RvcnksIHBsYXllcixjb21wdXRlcn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=