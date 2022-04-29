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

            playerBoard.recieveAttack(row,column);
            return playerBoard.arrayGetter();
        }

    }
    return {computerBoard,computerRandomAttack}
}



/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmFjdG9yeS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyx5QkFBeUI7QUFDN0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHNCQUFzQjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MseUJBQXlCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw2QkFBNkIsd0JBQXdCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsWUFBWTtBQUNaIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZmFjdG9yaWVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiXG5cbi8vRmFjdG9yeSBmdW5jdGlvbiB0byBjcmVhdGUgdGhlIHNoaXBzXG5jb25zdCBzaGlwRmFjdG9yeSA9IChuYW1lLGxlbmd0aCkgPT4ge1xuICAgIC8vY3JlYXRlcyBhbiBhcnJheSB0aGUgc2l6ZSBvZiB0aGUgc2hpcHMgbGVuZ3RoIHRvIGtlZXAgdHJhY2sgb2YgaGl0cy5cbiAgICBjb25zdCBzaGlwSGVhbHRoID0gW107XG4gICAgbGV0IGlzUGxhY2VkID0gZmFsc2U7XG4gICAgY29uc3QgaXNQbGFjZWRTZXR0ZXIgPSAoYXJnKSA9PiBpc1BsYWNlZCA9IGFyZztcbiAgICBjb25zdCBpc1BsYWNlZEdldHRlciA9ICgpID0+IGlzUGxhY2VkO1xuICAgIC8vdXBkYXRlcyB0aGUgc2hpcEhlYWx0aCBhcnJheSB3aXRoIHRoZSBwb3NpdGlvbiB0aGUgc2hpcCBnb3QgaGl0IGluXG4gICAgY29uc3QgaGl0ID0gKCkgPT4ge1xuICAgICAgICBzaGlwSGVhbHRoLnB1c2goJ3gnKVxuICAgICAgICAgICAgcmV0dXJuIHNoaXBIZWFsdGg7XG4gICAgfVxuICAgIC8vaWYgZXZlcnkgdmFsdWUgaW4gdGhlIHNoaXBIZWFsdGggYXJyYXkgaXMgaGl0IHRoaXMgZnVuY3Rpb24gcmV0dXJucyB0aGF0IHRoZSBzaGlwIGlzIHN1bmtcbiAgICBjb25zdCBpc1N1bmsgPSAoKSA9PiB7XG4gICAgICAgIGlmKHNoaXBIZWFsdGgubGVuZ3RoID09PSBsZW5ndGgpe1xuICAgICAgICAgICAgcmV0dXJuIHRydWVcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG4gICAgcmV0dXJuIHtuYW1lLGxlbmd0aCxoaXQsIGlzU3Vuayxpc1BsYWNlZEdldHRlcixpc1BsYWNlZFNldHRlcn1cbn1cblxuLy9GYWN0b3J5IGZ1bmN0aW9uIHRvIGNyZWF0ZSBnYW1lIGJvYXJkXG5jb25zdCBnYW1lQm9hcmRGYWN0b3J5ID0gKCkgPT57XG4gICAgbGV0IGdhbWVBcnJheSA9IFtdO1xuICAgIC8vY3JlYXRlIGVtcHR5IGFycmF5IHRvIGluaXRpYWxpemUgdGhlIGdhbWVcbiAgICBjb25zdCBzdGFydEdhbWUgPSAoKSA9PntcbiAgICAgICAgICAgIGdhbWVBcnJheSA9IFtcbiAgICAgICAgICAgIFsnJywnJywnJywnJywnJywnJywnJywnJywnJywnJ10sXG4gICAgICAgICAgICBbJycsJycsJycsJycsJycsJycsJycsJycsJycsJyddLFxuICAgICAgICAgICAgWycnLCcnLCcnLCcnLCcnLCcnLCcnLCcnLCcnLCcnXSxcbiAgICAgICAgICAgIFsnJywnJywnJywnJywnJywnJywnJywnJywnJywnJ10sXG4gICAgICAgICAgICBbJycsJycsJycsJycsJycsJycsJycsJycsJycsJyddLFxuICAgICAgICAgICAgWycnLCcnLCcnLCcnLCcnLCcnLCcnLCcnLCcnLCcnXSxcbiAgICAgICAgICAgIFsnJywnJywnJywnJywnJywnJywnJywnJywnJywnJ10sXG4gICAgICAgICAgICBbJycsJycsJycsJycsJycsJycsJycsJycsJycsJyddLFxuICAgICAgICAgICAgWycnLCcnLCcnLCcnLCcnLCcnLCcnLCcnLCcnLCcnXSxcbiAgICAgICAgICAgIFsnJywnJywnJywnJywnJywnJywnJywnJywnJywnJ11cbiAgICAgICAgXVxuXG4gICAgfVxuICAgIC8vbGlzdCBvZiBzaGlwcyB0aGF0IGFyZSBzdGlsbCBhbGl2ZVxuICAgIGxldCBzaGlwc0FsaXZlID0gW107XG4gICAgY29uc3Qgc2hpcHNBbGl2ZUdldHRlciA9ICgpID0+IHNoaXBzQWxpdmU7XG4gICAgLy9wbGFjZXMgc2hpcCBpbiByb3cgYW5kIGNvbHVtbiBhbmQgb3JpZW50cyBob3cgdGhlIHBsYXllciB3YW50cyBcbiAgICBjb25zdCBwbGFjZSA9IChzaGlwLHJvdywgY29sdW1uLCBvcmllbnQpID0+IHtcbiAgICAgICAgLy9jaGVja3MgaWYgd2hlcmUgdGhlIHNoaXAgaXMgdG8gYmUgcGxhY2VkIGlzIGVtcHR5XG4gICAgICAgIGNvbnN0IGNhblBsYWNlID0gKCkgPT4ge1xuICAgICAgICAgICAgbGV0IGVtcHR5ID0gdHJ1ZVxuICAgICAgICAgICAgLy9jaGVja2luZyBpZiBzaGlwIGlzIGFscmVhZHkgaW4gdGhlIHNwb3QgbmV3IHNoaXAgaXMgdG8gYmUgcGxhY2VkXG4gICAgICAgICAgICBpZihvcmllbnQgPT09ICdob3Jpem9udGFsJyl7XG4gICAgICAgICAgICAgICAgZm9yKGxldCBpID0gY29sdW1uOyBpPCAoY29sdW1uK3NoaXAubGVuZ3RoKTsgaSsrKXtcbiAgICAgICAgICAgICAgICAgICAgaWYoZ2FtZUFycmF5W3Jvd11baV0gIT09ICcnKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtcHR5ID0gZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gIFxuICAgICAgICAgICAgZWxzZSBpZihvcmllbnQgPT09ICd2ZXJ0aWNhbCcpe1xuICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IHJvdzsgaTwgKHJvdytzaGlwLmxlbmd0aCk7IGkrKyl7XG4gICAgICAgICAgICAgICAgICAgIGlmKGdhbWVBcnJheVtpXVtjb2x1bW5dICE9PSAnJyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbXB0eSA9IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9ICBcbiAgICAgICAgICAgIHJldHVybiBlbXB0eVxuICAgICAgICB9O1xuICAgICAgICAvL2hvcml6b250YWwgb3JyaWVudGF0aW9uIHBsYWNlbWVudFxuICAgICAgICBpZihvcmllbnQgPT09ICdob3Jpem9udGFsJyAgJiYgY2FuUGxhY2UoKSkge1xuICAgICAgICAgICAgZm9yKGxldCBpID0gY29sdW1uOyBpPCAoY29sdW1uK3NoaXAubGVuZ3RoKTsgaSsrKXtcbiAgICAgICAgICAgICAgICBnYW1lQXJyYXlbcm93XVtpXSA9IHNoaXA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzaGlwc0FsaXZlLnB1c2goc2hpcC5uYW1lKVxuICAgICAgICB9XG5cbiAgICAgICAgLy92ZXJ0aWNhbCBvcnJpZW50YXRpb25zIHBsYWNlbWVudFxuICAgICAgICBlbHNlIGlmKG9yaWVudCA9PT0gJ3ZlcnRpY2FsJyAmJiBjYW5QbGFjZSgpKSB7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSByb3c7IGk8KChzaGlwLmxlbmd0aCArIHJvdykpO2krKyl7XG4gICAgICAgICAgICAgICAgZ2FtZUFycmF5W2ldW2NvbHVtbl0gPSBzaGlwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2hpcHNBbGl2ZS5wdXNoKHNoaXAubmFtZSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZ2FtZUFycmF5O1xuICAgIH1cblxuICAgIC8vUmVjaWV2ZXMgY29vcmRpbmF0ZXMgZnJvbSB0aGUgYm9hcmQgdG8gcmVjaWV2ZSBhbiBhdHRhY2tcbiAgICBjb25zdCByZWNpZXZlQXR0YWNrID0gKHJvdyxjb2x1bW4pID0+e1xuICAgICAgICAvL0lmIHRoZSBnYW1lQXJyYXkgaXMgZW1wdHkgcGxhY2UgYSBzbWFsbCB4IGZvciBhIG1pc3NcbiAgICAgICAgaWYoZ2FtZUFycmF5W3Jvd11bY29sdW1uXSA9PT0gJycpe1xuICAgICAgICAgICAgZ2FtZUFycmF5W3Jvd11bY29sdW1uXSA9ICd4J1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICAvL2lmIHRoZXJlIGlzIGEgc2hpcCBhdCB0aGUgY29vcmRpbmF0ZXMgaGl0IHRoZSBib2FyZCBhbmQgcGxhY2UgYSBsYXJnZSBYIHRvIHNob3cgdGhlcmUgaXMgYSBoaXRcbiAgICAgICAgICAgIGdhbWVBcnJheVtyb3ddW2NvbHVtbl0uaGl0KCk7XG4gICAgICAgICAgICAvL2lmIGlzU3VuayByZXR1cm5zIHRydWUgdGhhdCBzaGlwIGdldHMgcG9wcGVkIGZyb20gdGhlIHNoaXBzQWxpdmUgYXJyYXkuXG4gICAgICAgICAgICBpZihnYW1lQXJyYXlbcm93XVtjb2x1bW5dLmlzU3VuaygpKXtcbiAgICAgICAgICAgICAgICBzaGlwc0FsaXZlLnBvcChnYW1lQXJyYXlbcm93XVtjb2x1bW5dLm5hbWUpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBnYW1lQXJyYXlbcm93XVtjb2x1bW5dID0gJ1gnO1xuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGdhbWVBcnJheVxuICAgIH1cbiAgICBcbiAgICBjb25zdCBhcnJheUdldHRlciA9ICgpID0+IGdhbWVBcnJheTtcbiAgICByZXR1cm57c3RhcnRHYW1lLCBwbGFjZSwgcmVjaWV2ZUF0dGFjayxhcnJheUdldHRlciwgc2hpcHNBbGl2ZUdldHRlcn1cbn1cblxuLy9QbGF5ZXIgZmFjdG9yIEZ1bmN0aW9uXG5jb25zdCBwbGF5ZXIgPSAoKSA9PntcbiAgICAvL2NyZWF0ZXMgYSBib2FyZCBmb3IgdGhlIHBsYXllclxuICAgIGxldCBwbGF5ZXJCb2FyZCA9IGdhbWVCb2FyZEZhY3RvcnkoKTtcbiAgICAvL0luaXRpYWxpemVzIHRoZSBib2FyZCBmb3IgdGhlIHBsYXllclxuICAgIHBsYXllckJvYXJkLnN0YXJ0R2FtZSgpO1xuICAgIC8vSGVscGVyIGZ1bmN0aW9uIGZvciB0aGUgcGxhY2UgbWV0aG9kXG4gICAgY29uc3QgcGxheWVyUGxhY2UgPSAoc2hpcCxyb3csY29sdW1uLG9yaWVudCkgPT57XG4gICAgICAgIHJldHVybiBwbGF5ZXJCb2FyZC5wbGFjZShzaGlwLHJvdyxjb2x1bW4sb3JpZW50KTtcbiAgICB9XG5cbiAgICAvL3JlY2lldmVzIGFuIGF0dGFjayBhbmQgdGhlbiBzZW5kcyB0aGF0IGF0dGFjayB0byB0aGUgY29tcHV0ZXJCb2FyZFxuICAgIGNvbnN0IHBsYXllckF0dGFjayA9IChjb21wdXRlckJvYXJkLGUpID0+IHtcbiAgICAgICAgY29uc3Qgcm93ID0gcGFyc2VJbnQoZS50YXJnZXQuaWRbMF0pXG4gICAgICAgIGNvbnN0IGNvbCA9IHBhcnNlSW50KGUudGFyZ2V0LmlkWzFdKVxuICAgICAgICBjb21wdXRlckJvYXJkLnJlY2lldmVBdHRhY2socm93LGNvbCk7XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfSAgIFxuICAgIHJldHVybiB7cGxheWVyQm9hcmQscGxheWVyUGxhY2UscGxheWVyQXR0YWNrfVxufVxuXG4vL2NvbXB1dGVyIGZhY3RvcnkgZnVuY3Rpb25cbmNvbnN0IGNvbXB1dGVyID0gKCkgPT4ge1xuICAgIC8vY3JlYXRlcyBhIGJvYXJkIGZvciB0aGUgY29tcHV0ZXJcbiAgICBsZXQgY29tcHV0ZXJCb2FyZCA9IGdhbWVCb2FyZEZhY3RvcnkoKTtcbiAgICAvL0luaXRpYWxpemVzIHRoZSBib2FyZCBmb3IgdGhlIGNvbXB1dGVyXG4gICAgY29tcHV0ZXJCb2FyZC5zdGFydEdhbWUoKTtcbiAgICAvL1NlbGVjdHMgYSByYW5kb20gY29vcmRpbmF0ZS5cbiAgICBjb25zdCBjb21wdXRlclJhbmRvbUF0dGFjayA9IChwbGF5ZXJCb2FyZCkgPT57XG4gICAgICAgIGxldCByYW5kb21DaG9pY2UgPSAoKSA9PiB7XG4gICAgICAgICAgICBsZXQgcmFuZG9tUm93ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICoxMClcbiAgICAgICAgICAgIGxldCByYW5kb21Db2x1bW4gPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMClcbiAgICAgICAgICAgIHJldHVybiBbcmFuZG9tUm93LCByYW5kb21Db2x1bW5dXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJhbmRvbT0gcmFuZG9tQ2hvaWNlKCk7XG4gICAgICAgIGxldCByb3cgPSByYW5kb21bMF07XG4gICAgICAgIGxldCBjb2x1bW4gPSByYW5kb21bMV07XG4gICAgICAgIGlmKChwbGF5ZXJCb2FyZC5hcnJheUdldHRlcigpW3Jvd11bY29sdW1uXSA9PT0gJ3gnKSB8fCAocGxheWVyQm9hcmQuYXJyYXlHZXR0ZXIoKVtyb3ddW2NvbHVtbl0gPT09ICdYJykpe1xuICAgICAgICAgICAgY29tcHV0ZXJSYW5kb21BdHRhY2socGxheWVyQm9hcmQpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcblxuICAgICAgICAgICAgcGxheWVyQm9hcmQucmVjaWV2ZUF0dGFjayhyb3csY29sdW1uKTtcbiAgICAgICAgICAgIHJldHVybiBwbGF5ZXJCb2FyZC5hcnJheUdldHRlcigpO1xuICAgICAgICB9XG5cbiAgICB9XG4gICAgcmV0dXJuIHtjb21wdXRlckJvYXJkLGNvbXB1dGVyUmFuZG9tQXR0YWNrfVxufVxuXG5cbmV4cG9ydCB7c2hpcEZhY3RvcnksZ2FtZUJvYXJkRmFjdG9yeSwgcGxheWVyLGNvbXB1dGVyfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==