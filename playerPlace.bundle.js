/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/domManip.js":
/*!*************************!*\
  !*** ./src/domManip.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createContainer": () => (/* binding */ createContainer),
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "createGameBoardUI": () => (/* binding */ createGameBoardUI),
/* harmony export */   "restartUI": () => (/* binding */ restartUI),
/* harmony export */   "updateHeader": () => (/* binding */ updateHeader)
/* harmony export */ });
const createElement = {
    createSection: function(idName) {
        let section = document.createElement("section");
        section.setAttribute('id',idName);
        return section;
    },
    createDiv: function(idName){
        let div = document.createElement("div");
        div.setAttribute('id',idName);
        return div;
    },
    createPara: function(text){
        let para = document.createElement("p");
        para.textContent = text;
        return para;
    },
    createLi: function(ul,arr){
        for(let i=0;i< arr.length;i++){
            let li = document.createElement("li");
            li.innerHTML = arr[i];
            ul.appendChild(li)
        }
        return ul;
    },
    createH: function(num,text){
        const heading = document.createElement(`h${num}`);
        heading.innerText = text;
        return heading
    }
}
const createContainer = () =>{
    const main = createElement.createDiv('mainContainer');
    document.body.appendChild(main);

}

const createGameBoardUI = (player1,computer1) => {
    const main = document.getElementById('mainContainer');
    const title = createElement.createH(1,"Battleship");
    main.appendChild(title);
    const header = createElement.createH(1,"Place your submarine anywhere on the player board");
    header.setAttribute('id','header');
    const gameboards = createElement.createDiv('gameboards');
    const playerGameboard = createElement.createDiv('playerGameboard');
    const computerGameboard = createElement.createDiv('computerGameboard');
    const playerHeader = createElement.createH(2,'Player\'s Board');
    const computerHeader = createElement.createH(2,'Computer\'s Board');
    const orientationBtn = document.createElement('button');
    orientationBtn.innerText = 'Horizontal'
    orientationBtn.setAttribute('id','orientBtn')
    const restartBtn = document.createElement('button');
    restartBtn.setAttribute('id','restartBtn');
    restartBtn.textContent = 'Restart'
    playerHeader.setAttribute('id','playerHeader');
    computerHeader.setAttribute('id','computerHeader');
    const btnContainer = createElement.createDiv('btnContainer');
    for(let i=0; i<(player1.length);i++){
        for(let j=0; j<(player1[i].length);j++){
            let gameCell = createElement.createDiv(`${i}${j}`)
            gameCell.classList.add("cell");
            playerGameboard.appendChild(gameCell);
        }
    }
    for(let i=0; i<(computer1.length);i++){
        for(let j=0; j<(computer1[i].length);j++){
            let gameCell = createElement.createDiv(`${i}${j}computer`)
            gameCell.classList.add("cell");
            computerGameboard.appendChild(gameCell);
        }
    }
    main.appendChild(header)
    btnContainer.append(orientationBtn,restartBtn)
    main.appendChild(btnContainer)
    main.appendChild(gameboards)
    gameboards.append(playerHeader,playerGameboard,computerHeader,computerGameboard)
}

const updateHeader = (text) => {
    const header = document.getElementById('header');
    header.textContent = text;
}

const restartUI = () => {
    const main = document.getElementById('mainContainer');
    main.innerHTML =''
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!****************************!*\
  !*** ./src/playerPlace.js ***!
  \****************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isShipPlaced": () => (/* binding */ isShipPlaced),
/* harmony export */   "playerExit": () => (/* binding */ playerExit),
/* harmony export */   "playerHover": () => (/* binding */ playerHover),
/* harmony export */   "userPlace": () => (/* binding */ userPlace)
/* harmony export */ });
/* harmony import */ var _domManip__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./domManip */ "./src/domManip.js");
// import { updateGameboard } from "./index";

// Code to visualize ship placement
const updateGameboard = (player1,computer1) =>{
    for(let i=0; i<(player1.playerBoard.arrayGetter().length);i++){
        for(let j=0; j<(player1.playerBoard.arrayGetter()[i].length);j++){
            
            let gameCell = document.getElementById(`${i}${j}`)
            if(typeof player1.playerBoard.arrayGetter()[i][j] === 'object'){
                let name = player1.playerBoard.arrayGetter()[i][j].name
                gameCell.classList.add(name)
            }
            else if(player1.playerBoard.arrayGetter()[i][j] === 'x'){
                gameCell.classList.add('empty')
            }
            else if(player1.playerBoard.arrayGetter()[i][j] === 'X'){
                gameCell.classList.add('hit')
            }
        }
    }
    for(let i=0; i<(computer1.computerBoard.arrayGetter().length);i++){
        for(let j=0; j<(computer1.computerBoard.arrayGetter()[i].length);j++){
            let gameCell = document.getElementById(`${i}${j}computer`)
            if(computer1.computerBoard.arrayGetter()[i][j] === 'x'){
                gameCell.classList.add('empty')
            }
            else if(computer1.computerBoard.arrayGetter()[i][j] === 'X'){
                gameCell.classList.add('hit')
            }
        }
    }
};
let currentShip;
//playerHover shows an outline of the ship to be placed
const playerHover = (event) => {
    let beginIndex = parseInt(event.target.id);
    let orientationBtn = document.getElementById('orientBtn');
    //Outline if it is Horizontal
    if(orientationBtn.textContent === 'Horizontal'){
        //Determines if the outline would be outside of the allowable range
        if(beginIndex%10>(beginIndex+currentShip.length)%10 && (beginIndex+currentShip.length)%10 !== 0){
        }
        else{
            //interates through the ship length to outline the correct length
            for(let i = 0; i<currentShip.length;i++){
                let index = beginIndex + i;
                //indexs under 10 begin with a 0 so we need to add a string '0' to the index
                if(index < 10){
                    index = '0' + index;
                }
                //gets the correct cells to select
                let currentTar = document.getElementById(`${index}`);
                
                currentTar.classList.add('selected');
            }
        }
    }
    //same as above but everything is multiplied by 10 to make it work for vertical placement
    else{
        console.log(beginIndex + currentShip.length*10)
        if((beginIndex + currentShip.length*10)>110){
        }
        else{
            for(let i = 0; i<currentShip.length*10;i+=10){
                let index = beginIndex + i;
                if(index < 10){
                    index = '0' + index;
                }
                let currentTar = document.getElementById(`${index}`);
                
                currentTar.classList.add('selected');
            }
        }
    }

}
//changes the orient button 
const orientBtn = () => {
    console.log('orient')
    let orientationBtn = document.getElementById('orientBtn');
    let playerBoard = document.getElementById('playerGameboard');
    //changes text when clicked
    if(orientationBtn.textContent === 'Horizontal'){
        orientationBtn.textContent = 'Vertical';
    }
    else{
        orientationBtn.textContent = 'Horizontal';
    }
    //4 lines below remove and add listeners so they update the orientation.
    playerBoard.removeEventListener('mouseout',playerExit);
    playerBoard.removeEventListener('mouseover',playerHover);
    playerBoard.addEventListener('mouseover',playerHover);
    playerBoard.addEventListener('mouseout',playerExit);
    
}
// Code to delete the ship visualization
const playerExit = (event) => {
    let beginIndex = parseInt(event.target.id);
    let orientationBtn = document.getElementById('orientBtn');
    if(orientationBtn.textContent === 'Horizontal'){
        for(let i = 0; i<currentShip.length;i++){
            let index = beginIndex + i;
            
            if(index < 10){
                index = '0' + index
            }
            let currentTar = document.getElementById(`${index}`);
            
            currentTar.classList.remove('selected');
        }
    }
    else{
        for(let i = 0; i<currentShip.length*10;i+=10){
            let index = beginIndex + i;
            
            if(index < 10){
                index = '0' + index
                console.log(index);
            }
            let currentTar = document.getElementById(`${index}`);
            
            currentTar.classList.remove('selected');
        }
    }

}

//Places ship
const userPlace = (ships,player,computer,ship) => {
    const playerBoard = document.getElementById('playerGameboard');
    const orientationBtn = document.getElementById('orientBtn');
    currentShip = ship;

    playerBoard.removeEventListener('mouseout',playerExit);
    playerBoard.removeEventListener('mouseover',playerHover);
    playerBoard.addEventListener('mouseover',playerHover);
    playerBoard.addEventListener('mouseout',playerExit);
    orientationBtn.addEventListener('click', orientBtn);

    playerBoard.addEventListener('click',function(event){
        let element = event.target.id;
        player.playerPlace(ship,parseInt(element[0]),parseInt(element[1]),orientationBtn.textContent.toLowerCase());
        updateGameboard(player,computer);
        ship.isPlacedSetter(true);
        playerExit(event)
        if(isShipPlaced(ships) !== true && player.playerBoard.shipsAliveGetter().includes(ship.name)){
            userPlace(ships,player,computer,isShipPlaced(ships))
            ;(0,_domManip__WEBPACK_IMPORTED_MODULE_0__.updateHeader)(`Place your ${isShipPlaced(ships).name} anywhere on the player board`)
        }
        else if(player.playerBoard.shipsAliveGetter().length<5){
            userPlace(ships,player,computer,ship)
        }
        else if(isShipPlaced(ships)){
            let container = document.getElementById('btnContainer')
            container.removeChild(orientationBtn)
            playerBoard.removeEventListener('mouseout',playerExit);
            playerBoard.removeEventListener('mouseover',playerHover);
            (0,_domManip__WEBPACK_IMPORTED_MODULE_0__.updateHeader)('Click on the computer board to attack!')
        }
    }, {once:true})
}

const isShipPlaced= (arr) => {
    for(let i = 0; i<arr.length;i++){
        if(!arr[i].isPlacedGetter()){

            return arr[i]
        }
    }
    return true
}




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSx3REFBWSxlQUFlLDBCQUEwQjtBQUNqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHVEQUFZO0FBQ3hCO0FBQ0EsS0FBSyxHQUFHLFVBQVU7QUFDbEI7O0FBRUE7QUFDQSxtQkFBbUIsYUFBYTtBQUNoQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb21NYW5pcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9wbGF5ZXJQbGFjZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBjcmVhdGVFbGVtZW50ID0ge1xuICAgIGNyZWF0ZVNlY3Rpb246IGZ1bmN0aW9uKGlkTmFtZSkge1xuICAgICAgICBsZXQgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgICAgICBzZWN0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLGlkTmFtZSk7XG4gICAgICAgIHJldHVybiBzZWN0aW9uO1xuICAgIH0sXG4gICAgY3JlYXRlRGl2OiBmdW5jdGlvbihpZE5hbWUpe1xuICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnaWQnLGlkTmFtZSk7XG4gICAgICAgIHJldHVybiBkaXY7XG4gICAgfSxcbiAgICBjcmVhdGVQYXJhOiBmdW5jdGlvbih0ZXh0KXtcbiAgICAgICAgbGV0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgcGFyYS50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgIHJldHVybiBwYXJhO1xuICAgIH0sXG4gICAgY3JlYXRlTGk6IGZ1bmN0aW9uKHVsLGFycil7XG4gICAgICAgIGZvcihsZXQgaT0wO2k8IGFyci5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgICAgIGxpLmlubmVySFRNTCA9IGFycltpXTtcbiAgICAgICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bDtcbiAgICB9LFxuICAgIGNyZWF0ZUg6IGZ1bmN0aW9uKG51bSx0ZXh0KXtcbiAgICAgICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGgke251bX1gKTtcbiAgICAgICAgaGVhZGluZy5pbm5lclRleHQgPSB0ZXh0O1xuICAgICAgICByZXR1cm4gaGVhZGluZ1xuICAgIH1cbn1cbmNvbnN0IGNyZWF0ZUNvbnRhaW5lciA9ICgpID0+e1xuICAgIGNvbnN0IG1haW4gPSBjcmVhdGVFbGVtZW50LmNyZWF0ZURpdignbWFpbkNvbnRhaW5lcicpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFpbik7XG5cbn1cblxuY29uc3QgY3JlYXRlR2FtZUJvYXJkVUkgPSAocGxheWVyMSxjb21wdXRlcjEpID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Db250YWluZXInKTtcbiAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZUVsZW1lbnQuY3JlYXRlSCgxLFwiQmF0dGxlc2hpcFwiKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBjb25zdCBoZWFkZXIgPSBjcmVhdGVFbGVtZW50LmNyZWF0ZUgoMSxcIlBsYWNlIHlvdXIgc3VibWFyaW5lIGFueXdoZXJlIG9uIHRoZSBwbGF5ZXIgYm9hcmRcIik7XG4gICAgaGVhZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCdoZWFkZXInKTtcbiAgICBjb25zdCBnYW1lYm9hcmRzID0gY3JlYXRlRWxlbWVudC5jcmVhdGVEaXYoJ2dhbWVib2FyZHMnKTtcbiAgICBjb25zdCBwbGF5ZXJHYW1lYm9hcmQgPSBjcmVhdGVFbGVtZW50LmNyZWF0ZURpdigncGxheWVyR2FtZWJvYXJkJyk7XG4gICAgY29uc3QgY29tcHV0ZXJHYW1lYm9hcmQgPSBjcmVhdGVFbGVtZW50LmNyZWF0ZURpdignY29tcHV0ZXJHYW1lYm9hcmQnKTtcbiAgICBjb25zdCBwbGF5ZXJIZWFkZXIgPSBjcmVhdGVFbGVtZW50LmNyZWF0ZUgoMiwnUGxheWVyXFwncyBCb2FyZCcpO1xuICAgIGNvbnN0IGNvbXB1dGVySGVhZGVyID0gY3JlYXRlRWxlbWVudC5jcmVhdGVIKDIsJ0NvbXB1dGVyXFwncyBCb2FyZCcpO1xuICAgIGNvbnN0IG9yaWVudGF0aW9uQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgb3JpZW50YXRpb25CdG4uaW5uZXJUZXh0ID0gJ0hvcml6b250YWwnXG4gICAgb3JpZW50YXRpb25CdG4uc2V0QXR0cmlidXRlKCdpZCcsJ29yaWVudEJ0bicpXG4gICAgY29uc3QgcmVzdGFydEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHJlc3RhcnRCdG4uc2V0QXR0cmlidXRlKCdpZCcsJ3Jlc3RhcnRCdG4nKTtcbiAgICByZXN0YXJ0QnRuLnRleHRDb250ZW50ID0gJ1Jlc3RhcnQnXG4gICAgcGxheWVySGVhZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCdwbGF5ZXJIZWFkZXInKTtcbiAgICBjb21wdXRlckhlYWRlci5zZXRBdHRyaWJ1dGUoJ2lkJywnY29tcHV0ZXJIZWFkZXInKTtcbiAgICBjb25zdCBidG5Db250YWluZXIgPSBjcmVhdGVFbGVtZW50LmNyZWF0ZURpdignYnRuQ29udGFpbmVyJyk7XG4gICAgZm9yKGxldCBpPTA7IGk8KHBsYXllcjEubGVuZ3RoKTtpKyspe1xuICAgICAgICBmb3IobGV0IGo9MDsgajwocGxheWVyMVtpXS5sZW5ndGgpO2orKyl7XG4gICAgICAgICAgICBsZXQgZ2FtZUNlbGwgPSBjcmVhdGVFbGVtZW50LmNyZWF0ZURpdihgJHtpfSR7an1gKVxuICAgICAgICAgICAgZ2FtZUNlbGwuY2xhc3NMaXN0LmFkZChcImNlbGxcIik7XG4gICAgICAgICAgICBwbGF5ZXJHYW1lYm9hcmQuYXBwZW5kQ2hpbGQoZ2FtZUNlbGwpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZvcihsZXQgaT0wOyBpPChjb21wdXRlcjEubGVuZ3RoKTtpKyspe1xuICAgICAgICBmb3IobGV0IGo9MDsgajwoY29tcHV0ZXIxW2ldLmxlbmd0aCk7aisrKXtcbiAgICAgICAgICAgIGxldCBnYW1lQ2VsbCA9IGNyZWF0ZUVsZW1lbnQuY3JlYXRlRGl2KGAke2l9JHtqfWNvbXB1dGVyYClcbiAgICAgICAgICAgIGdhbWVDZWxsLmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpO1xuICAgICAgICAgICAgY29tcHV0ZXJHYW1lYm9hcmQuYXBwZW5kQ2hpbGQoZ2FtZUNlbGwpO1xuICAgICAgICB9XG4gICAgfVxuICAgIG1haW4uYXBwZW5kQ2hpbGQoaGVhZGVyKVxuICAgIGJ0bkNvbnRhaW5lci5hcHBlbmQob3JpZW50YXRpb25CdG4scmVzdGFydEJ0bilcbiAgICBtYWluLmFwcGVuZENoaWxkKGJ0bkNvbnRhaW5lcilcbiAgICBtYWluLmFwcGVuZENoaWxkKGdhbWVib2FyZHMpXG4gICAgZ2FtZWJvYXJkcy5hcHBlbmQocGxheWVySGVhZGVyLHBsYXllckdhbWVib2FyZCxjb21wdXRlckhlYWRlcixjb21wdXRlckdhbWVib2FyZClcbn1cblxuY29uc3QgdXBkYXRlSGVhZGVyID0gKHRleHQpID0+IHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyJyk7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gdGV4dDtcbn1cblxuY29uc3QgcmVzdGFydFVJID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbkNvbnRhaW5lcicpO1xuICAgIG1haW4uaW5uZXJIVE1MID0nJ1xufVxuZXhwb3J0IHtjcmVhdGVFbGVtZW50LGNyZWF0ZUNvbnRhaW5lcixjcmVhdGVHYW1lQm9hcmRVSSx1cGRhdGVIZWFkZXIsIHJlc3RhcnRVSX07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBpbXBvcnQgeyB1cGRhdGVHYW1lYm9hcmQgfSBmcm9tIFwiLi9pbmRleFwiO1xuaW1wb3J0IHt1cGRhdGVIZWFkZXJ9IGZyb20gXCIuL2RvbU1hbmlwXCJcbi8vIENvZGUgdG8gdmlzdWFsaXplIHNoaXAgcGxhY2VtZW50XG5jb25zdCB1cGRhdGVHYW1lYm9hcmQgPSAocGxheWVyMSxjb21wdXRlcjEpID0+e1xuICAgIGZvcihsZXQgaT0wOyBpPChwbGF5ZXIxLnBsYXllckJvYXJkLmFycmF5R2V0dGVyKCkubGVuZ3RoKTtpKyspe1xuICAgICAgICBmb3IobGV0IGo9MDsgajwocGxheWVyMS5wbGF5ZXJCb2FyZC5hcnJheUdldHRlcigpW2ldLmxlbmd0aCk7aisrKXtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IGdhbWVDZWxsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aX0ke2p9YClcbiAgICAgICAgICAgIGlmKHR5cGVvZiBwbGF5ZXIxLnBsYXllckJvYXJkLmFycmF5R2V0dGVyKClbaV1bal0gPT09ICdvYmplY3QnKXtcbiAgICAgICAgICAgICAgICBsZXQgbmFtZSA9IHBsYXllcjEucGxheWVyQm9hcmQuYXJyYXlHZXR0ZXIoKVtpXVtqXS5uYW1lXG4gICAgICAgICAgICAgICAgZ2FtZUNlbGwuY2xhc3NMaXN0LmFkZChuYW1lKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZihwbGF5ZXIxLnBsYXllckJvYXJkLmFycmF5R2V0dGVyKClbaV1bal0gPT09ICd4Jyl7XG4gICAgICAgICAgICAgICAgZ2FtZUNlbGwuY2xhc3NMaXN0LmFkZCgnZW1wdHknKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZihwbGF5ZXIxLnBsYXllckJvYXJkLmFycmF5R2V0dGVyKClbaV1bal0gPT09ICdYJyl7XG4gICAgICAgICAgICAgICAgZ2FtZUNlbGwuY2xhc3NMaXN0LmFkZCgnaGl0JylcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IobGV0IGk9MDsgaTwoY29tcHV0ZXIxLmNvbXB1dGVyQm9hcmQuYXJyYXlHZXR0ZXIoKS5sZW5ndGgpO2krKyl7XG4gICAgICAgIGZvcihsZXQgaj0wOyBqPChjb21wdXRlcjEuY29tcHV0ZXJCb2FyZC5hcnJheUdldHRlcigpW2ldLmxlbmd0aCk7aisrKXtcbiAgICAgICAgICAgIGxldCBnYW1lQ2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2l9JHtqfWNvbXB1dGVyYClcbiAgICAgICAgICAgIGlmKGNvbXB1dGVyMS5jb21wdXRlckJvYXJkLmFycmF5R2V0dGVyKClbaV1bal0gPT09ICd4Jyl7XG4gICAgICAgICAgICAgICAgZ2FtZUNlbGwuY2xhc3NMaXN0LmFkZCgnZW1wdHknKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZihjb21wdXRlcjEuY29tcHV0ZXJCb2FyZC5hcnJheUdldHRlcigpW2ldW2pdID09PSAnWCcpe1xuICAgICAgICAgICAgICAgIGdhbWVDZWxsLmNsYXNzTGlzdC5hZGQoJ2hpdCcpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xubGV0IGN1cnJlbnRTaGlwO1xuLy9wbGF5ZXJIb3ZlciBzaG93cyBhbiBvdXRsaW5lIG9mIHRoZSBzaGlwIHRvIGJlIHBsYWNlZFxuY29uc3QgcGxheWVySG92ZXIgPSAoZXZlbnQpID0+IHtcbiAgICBsZXQgYmVnaW5JbmRleCA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC5pZCk7XG4gICAgbGV0IG9yaWVudGF0aW9uQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29yaWVudEJ0bicpO1xuICAgIC8vT3V0bGluZSBpZiBpdCBpcyBIb3Jpem9udGFsXG4gICAgaWYob3JpZW50YXRpb25CdG4udGV4dENvbnRlbnQgPT09ICdIb3Jpem9udGFsJyl7XG4gICAgICAgIC8vRGV0ZXJtaW5lcyBpZiB0aGUgb3V0bGluZSB3b3VsZCBiZSBvdXRzaWRlIG9mIHRoZSBhbGxvd2FibGUgcmFuZ2VcbiAgICAgICAgaWYoYmVnaW5JbmRleCUxMD4oYmVnaW5JbmRleCtjdXJyZW50U2hpcC5sZW5ndGgpJTEwICYmIChiZWdpbkluZGV4K2N1cnJlbnRTaGlwLmxlbmd0aCklMTAgIT09IDApe1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICAvL2ludGVyYXRlcyB0aHJvdWdoIHRoZSBzaGlwIGxlbmd0aCB0byBvdXRsaW5lIHRoZSBjb3JyZWN0IGxlbmd0aFxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaTxjdXJyZW50U2hpcC5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBiZWdpbkluZGV4ICsgaTtcbiAgICAgICAgICAgICAgICAvL2luZGV4cyB1bmRlciAxMCBiZWdpbiB3aXRoIGEgMCBzbyB3ZSBuZWVkIHRvIGFkZCBhIHN0cmluZyAnMCcgdG8gdGhlIGluZGV4XG4gICAgICAgICAgICAgICAgaWYoaW5kZXggPCAxMCl7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID0gJzAnICsgaW5kZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vZ2V0cyB0aGUgY29ycmVjdCBjZWxscyB0byBzZWxlY3RcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFRhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2luZGV4fWApO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGN1cnJlbnRUYXIuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvL3NhbWUgYXMgYWJvdmUgYnV0IGV2ZXJ5dGhpbmcgaXMgbXVsdGlwbGllZCBieSAxMCB0byBtYWtlIGl0IHdvcmsgZm9yIHZlcnRpY2FsIHBsYWNlbWVudFxuICAgIGVsc2V7XG4gICAgICAgIGNvbnNvbGUubG9nKGJlZ2luSW5kZXggKyBjdXJyZW50U2hpcC5sZW5ndGgqMTApXG4gICAgICAgIGlmKChiZWdpbkluZGV4ICsgY3VycmVudFNoaXAubGVuZ3RoKjEwKT4xMTApe1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpPGN1cnJlbnRTaGlwLmxlbmd0aCoxMDtpKz0xMCl7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gYmVnaW5JbmRleCArIGk7XG4gICAgICAgICAgICAgICAgaWYoaW5kZXggPCAxMCl7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID0gJzAnICsgaW5kZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50VGFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aW5kZXh9YCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY3VycmVudFRhci5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59XG4vL2NoYW5nZXMgdGhlIG9yaWVudCBidXR0b24gXG5jb25zdCBvcmllbnRCdG4gPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ29yaWVudCcpXG4gICAgbGV0IG9yaWVudGF0aW9uQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29yaWVudEJ0bicpO1xuICAgIGxldCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXJHYW1lYm9hcmQnKTtcbiAgICAvL2NoYW5nZXMgdGV4dCB3aGVuIGNsaWNrZWRcbiAgICBpZihvcmllbnRhdGlvbkJ0bi50ZXh0Q29udGVudCA9PT0gJ0hvcml6b250YWwnKXtcbiAgICAgICAgb3JpZW50YXRpb25CdG4udGV4dENvbnRlbnQgPSAnVmVydGljYWwnO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgICBvcmllbnRhdGlvbkJ0bi50ZXh0Q29udGVudCA9ICdIb3Jpem9udGFsJztcbiAgICB9XG4gICAgLy80IGxpbmVzIGJlbG93IHJlbW92ZSBhbmQgYWRkIGxpc3RlbmVycyBzbyB0aGV5IHVwZGF0ZSB0aGUgb3JpZW50YXRpb24uXG4gICAgcGxheWVyQm9hcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLHBsYXllckV4aXQpO1xuICAgIHBsYXllckJvYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicscGxheWVySG92ZXIpO1xuICAgIHBsYXllckJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicscGxheWVySG92ZXIpO1xuICAgIHBsYXllckJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JyxwbGF5ZXJFeGl0KTtcbiAgICBcbn1cbi8vIENvZGUgdG8gZGVsZXRlIHRoZSBzaGlwIHZpc3VhbGl6YXRpb25cbmNvbnN0IHBsYXllckV4aXQgPSAoZXZlbnQpID0+IHtcbiAgICBsZXQgYmVnaW5JbmRleCA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC5pZCk7XG4gICAgbGV0IG9yaWVudGF0aW9uQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29yaWVudEJ0bicpO1xuICAgIGlmKG9yaWVudGF0aW9uQnRuLnRleHRDb250ZW50ID09PSAnSG9yaXpvbnRhbCcpe1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpPGN1cnJlbnRTaGlwLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gYmVnaW5JbmRleCArIGk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKGluZGV4IDwgMTApe1xuICAgICAgICAgICAgICAgIGluZGV4ID0gJzAnICsgaW5kZXhcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBjdXJyZW50VGFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aW5kZXh9YCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGN1cnJlbnRUYXIuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNle1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpPGN1cnJlbnRTaGlwLmxlbmd0aCoxMDtpKz0xMCl7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSBiZWdpbkluZGV4ICsgaTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYoaW5kZXggPCAxMCl7XG4gICAgICAgICAgICAgICAgaW5kZXggPSAnMCcgKyBpbmRleFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBjdXJyZW50VGFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aW5kZXh9YCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGN1cnJlbnRUYXIuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG4vL1BsYWNlcyBzaGlwXG5jb25zdCB1c2VyUGxhY2UgPSAoc2hpcHMscGxheWVyLGNvbXB1dGVyLHNoaXApID0+IHtcbiAgICBjb25zdCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXJHYW1lYm9hcmQnKTtcbiAgICBjb25zdCBvcmllbnRhdGlvbkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcmllbnRCdG4nKTtcbiAgICBjdXJyZW50U2hpcCA9IHNoaXA7XG5cbiAgICBwbGF5ZXJCb2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW91dCcscGxheWVyRXhpdCk7XG4gICAgcGxheWVyQm9hcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJyxwbGF5ZXJIb3Zlcik7XG4gICAgcGxheWVyQm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJyxwbGF5ZXJIb3Zlcik7XG4gICAgcGxheWVyQm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLHBsYXllckV4aXQpO1xuICAgIG9yaWVudGF0aW9uQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3JpZW50QnRuKTtcblxuICAgIHBsYXllckJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbihldmVudCl7XG4gICAgICAgIGxldCBlbGVtZW50ID0gZXZlbnQudGFyZ2V0LmlkO1xuICAgICAgICBwbGF5ZXIucGxheWVyUGxhY2Uoc2hpcCxwYXJzZUludChlbGVtZW50WzBdKSxwYXJzZUludChlbGVtZW50WzFdKSxvcmllbnRhdGlvbkJ0bi50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgdXBkYXRlR2FtZWJvYXJkKHBsYXllcixjb21wdXRlcik7XG4gICAgICAgIHNoaXAuaXNQbGFjZWRTZXR0ZXIodHJ1ZSk7XG4gICAgICAgIHBsYXllckV4aXQoZXZlbnQpXG4gICAgICAgIGlmKGlzU2hpcFBsYWNlZChzaGlwcykgIT09IHRydWUgJiYgcGxheWVyLnBsYXllckJvYXJkLnNoaXBzQWxpdmVHZXR0ZXIoKS5pbmNsdWRlcyhzaGlwLm5hbWUpKXtcbiAgICAgICAgICAgIHVzZXJQbGFjZShzaGlwcyxwbGF5ZXIsY29tcHV0ZXIsaXNTaGlwUGxhY2VkKHNoaXBzKSlcbiAgICAgICAgICAgIHVwZGF0ZUhlYWRlcihgUGxhY2UgeW91ciAke2lzU2hpcFBsYWNlZChzaGlwcykubmFtZX0gYW55d2hlcmUgb24gdGhlIHBsYXllciBib2FyZGApXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihwbGF5ZXIucGxheWVyQm9hcmQuc2hpcHNBbGl2ZUdldHRlcigpLmxlbmd0aDw1KXtcbiAgICAgICAgICAgIHVzZXJQbGFjZShzaGlwcyxwbGF5ZXIsY29tcHV0ZXIsc2hpcClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGlzU2hpcFBsYWNlZChzaGlwcykpe1xuICAgICAgICAgICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG5Db250YWluZXInKVxuICAgICAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKG9yaWVudGF0aW9uQnRuKVxuICAgICAgICAgICAgcGxheWVyQm9hcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLHBsYXllckV4aXQpO1xuICAgICAgICAgICAgcGxheWVyQm9hcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJyxwbGF5ZXJIb3Zlcik7XG4gICAgICAgICAgICB1cGRhdGVIZWFkZXIoJ0NsaWNrIG9uIHRoZSBjb21wdXRlciBib2FyZCB0byBhdHRhY2shJylcbiAgICAgICAgfVxuICAgIH0sIHtvbmNlOnRydWV9KVxufVxuXG5jb25zdCBpc1NoaXBQbGFjZWQ9IChhcnIpID0+IHtcbiAgICBmb3IobGV0IGkgPSAwOyBpPGFyci5sZW5ndGg7aSsrKXtcbiAgICAgICAgaWYoIWFycltpXS5pc1BsYWNlZEdldHRlcigpKXtcblxuICAgICAgICAgICAgcmV0dXJuIGFycltpXVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlXG59XG5cblxuXG5leHBvcnQge3BsYXllckhvdmVyLHBsYXllckV4aXQsdXNlclBsYWNlLGlzU2hpcFBsYWNlZH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=