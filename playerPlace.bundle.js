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

const createFooter = () => {
    const footer = document.createElement('footer');
    footer.classList.add('footer');
    footer.appendChild(createElement.createPara('Konrad Lach'));
    const gitHub = document.createElement('a');
    gitHub.href = 'https://github.com/KonradLach';
    gitHub.target = '_blank';
    const gitHubLogo = document.createElement('i');
    gitHubLogo.classList.add('fab','fa-github');
    gitHub.appendChild(gitHubLogo);
    footer.appendChild(gitHub);


    const linkedIn = document.createElement('a');
    linkedIn.href = 'https://www.linkedin.com/in/konrad-lach-338571169/';
    linkedIn.target = '_blank';
    const linkedInLogo = document.createElement('i');
    linkedInLogo.classList.add('fab','fa-linkedin');
    linkedIn.appendChild(linkedInLogo);
    footer.appendChild(linkedIn);
    return footer
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
    main.appendChild(createFooter())
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBO0FBQ0Esd0RBQXdELE1BQU07QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLHdEQUFZLGVBQWUsMEJBQTBCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksdURBQVk7QUFDeEI7QUFDQSxLQUFLLEdBQUcsVUFBVTtBQUNsQjs7QUFFQTtBQUNBLG1CQUFtQixhQUFhO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbU1hbmlwLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3BsYXllclBsYWNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGNyZWF0ZUVsZW1lbnQgPSB7XG4gICAgY3JlYXRlU2VjdGlvbjogZnVuY3Rpb24oaWROYW1lKSB7XG4gICAgICAgIGxldCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgICAgIHNlY3Rpb24uc2V0QXR0cmlidXRlKCdpZCcsaWROYW1lKTtcbiAgICAgICAgcmV0dXJuIHNlY3Rpb247XG4gICAgfSxcbiAgICBjcmVhdGVEaXY6IGZ1bmN0aW9uKGlkTmFtZSl7XG4gICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCdpZCcsaWROYW1lKTtcbiAgICAgICAgcmV0dXJuIGRpdjtcbiAgICB9LFxuICAgIGNyZWF0ZVBhcmE6IGZ1bmN0aW9uKHRleHQpe1xuICAgICAgICBsZXQgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBwYXJhLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAgICAgcmV0dXJuIHBhcmE7XG4gICAgfSxcbiAgICBjcmVhdGVMaTogZnVuY3Rpb24odWwsYXJyKXtcbiAgICAgICAgZm9yKGxldCBpPTA7aTwgYXJyLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICAgICAgbGkuaW5uZXJIVE1MID0gYXJyW2ldO1xuICAgICAgICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVsO1xuICAgIH0sXG4gICAgY3JlYXRlSDogZnVuY3Rpb24obnVtLHRleHQpe1xuICAgICAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgaCR7bnVtfWApO1xuICAgICAgICBoZWFkaW5nLmlubmVyVGV4dCA9IHRleHQ7XG4gICAgICAgIHJldHVybiBoZWFkaW5nXG4gICAgfVxufVxuY29uc3QgY3JlYXRlQ29udGFpbmVyID0gKCkgPT57XG4gICAgY29uc3QgbWFpbiA9IGNyZWF0ZUVsZW1lbnQuY3JlYXRlRGl2KCdtYWluQ29udGFpbmVyJyk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluKTtcblxufVxuXG5jb25zdCBjcmVhdGVGb290ZXIgPSAoKSA9PiB7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9vdGVyJyk7XG4gICAgZm9vdGVyLmNsYXNzTGlzdC5hZGQoJ2Zvb3RlcicpO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChjcmVhdGVFbGVtZW50LmNyZWF0ZVBhcmEoJ0tvbnJhZCBMYWNoJykpO1xuICAgIGNvbnN0IGdpdEh1YiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBnaXRIdWIuaHJlZiA9ICdodHRwczovL2dpdGh1Yi5jb20vS29ucmFkTGFjaCc7XG4gICAgZ2l0SHViLnRhcmdldCA9ICdfYmxhbmsnO1xuICAgIGNvbnN0IGdpdEh1YkxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgZ2l0SHViTG9nby5jbGFzc0xpc3QuYWRkKCdmYWInLCdmYS1naXRodWInKTtcbiAgICBnaXRIdWIuYXBwZW5kQ2hpbGQoZ2l0SHViTG9nbyk7XG4gICAgZm9vdGVyLmFwcGVuZENoaWxkKGdpdEh1Yik7XG5cblxuICAgIGNvbnN0IGxpbmtlZEluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xuICAgIGxpbmtlZEluLmhyZWYgPSAnaHR0cHM6Ly93d3cubGlua2VkaW4uY29tL2luL2tvbnJhZC1sYWNoLTMzODU3MTE2OS8nO1xuICAgIGxpbmtlZEluLnRhcmdldCA9ICdfYmxhbmsnO1xuICAgIGNvbnN0IGxpbmtlZEluTG9nbyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2knKTtcbiAgICBsaW5rZWRJbkxvZ28uY2xhc3NMaXN0LmFkZCgnZmFiJywnZmEtbGlua2VkaW4nKTtcbiAgICBsaW5rZWRJbi5hcHBlbmRDaGlsZChsaW5rZWRJbkxvZ28pO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChsaW5rZWRJbik7XG4gICAgcmV0dXJuIGZvb3RlclxufVxuY29uc3QgY3JlYXRlR2FtZUJvYXJkVUkgPSAocGxheWVyMSxjb21wdXRlcjEpID0+IHtcbiAgICBjb25zdCBtYWluID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW5Db250YWluZXInKTtcbiAgICBjb25zdCB0aXRsZSA9IGNyZWF0ZUVsZW1lbnQuY3JlYXRlSCgxLFwiQmF0dGxlc2hpcFwiKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKHRpdGxlKTtcbiAgICBjb25zdCBoZWFkZXIgPSBjcmVhdGVFbGVtZW50LmNyZWF0ZUgoMSxcIlBsYWNlIHlvdXIgc3VibWFyaW5lIGFueXdoZXJlIG9uIHRoZSBwbGF5ZXIgYm9hcmRcIik7XG4gICAgaGVhZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCdoZWFkZXInKTtcbiAgICBjb25zdCBnYW1lYm9hcmRzID0gY3JlYXRlRWxlbWVudC5jcmVhdGVEaXYoJ2dhbWVib2FyZHMnKTtcbiAgICBjb25zdCBwbGF5ZXJHYW1lYm9hcmQgPSBjcmVhdGVFbGVtZW50LmNyZWF0ZURpdigncGxheWVyR2FtZWJvYXJkJyk7XG4gICAgY29uc3QgY29tcHV0ZXJHYW1lYm9hcmQgPSBjcmVhdGVFbGVtZW50LmNyZWF0ZURpdignY29tcHV0ZXJHYW1lYm9hcmQnKTtcbiAgICBjb25zdCBwbGF5ZXJIZWFkZXIgPSBjcmVhdGVFbGVtZW50LmNyZWF0ZUgoMiwnUGxheWVyXFwncyBCb2FyZCcpO1xuICAgIGNvbnN0IGNvbXB1dGVySGVhZGVyID0gY3JlYXRlRWxlbWVudC5jcmVhdGVIKDIsJ0NvbXB1dGVyXFwncyBCb2FyZCcpO1xuICAgIGNvbnN0IG9yaWVudGF0aW9uQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgb3JpZW50YXRpb25CdG4uaW5uZXJUZXh0ID0gJ0hvcml6b250YWwnXG4gICAgb3JpZW50YXRpb25CdG4uc2V0QXR0cmlidXRlKCdpZCcsJ29yaWVudEJ0bicpXG4gICAgY29uc3QgcmVzdGFydEJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIHJlc3RhcnRCdG4uc2V0QXR0cmlidXRlKCdpZCcsJ3Jlc3RhcnRCdG4nKTtcbiAgICByZXN0YXJ0QnRuLnRleHRDb250ZW50ID0gJ1Jlc3RhcnQnXG4gICAgcGxheWVySGVhZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCdwbGF5ZXJIZWFkZXInKTtcbiAgICBjb21wdXRlckhlYWRlci5zZXRBdHRyaWJ1dGUoJ2lkJywnY29tcHV0ZXJIZWFkZXInKTtcbiAgICBjb25zdCBidG5Db250YWluZXIgPSBjcmVhdGVFbGVtZW50LmNyZWF0ZURpdignYnRuQ29udGFpbmVyJyk7XG4gICAgZm9yKGxldCBpPTA7IGk8KHBsYXllcjEubGVuZ3RoKTtpKyspe1xuICAgICAgICBmb3IobGV0IGo9MDsgajwocGxheWVyMVtpXS5sZW5ndGgpO2orKyl7XG4gICAgICAgICAgICBsZXQgZ2FtZUNlbGwgPSBjcmVhdGVFbGVtZW50LmNyZWF0ZURpdihgJHtpfSR7an1gKVxuICAgICAgICAgICAgZ2FtZUNlbGwuY2xhc3NMaXN0LmFkZChcImNlbGxcIik7XG4gICAgICAgICAgICBwbGF5ZXJHYW1lYm9hcmQuYXBwZW5kQ2hpbGQoZ2FtZUNlbGwpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGZvcihsZXQgaT0wOyBpPChjb21wdXRlcjEubGVuZ3RoKTtpKyspe1xuICAgICAgICBmb3IobGV0IGo9MDsgajwoY29tcHV0ZXIxW2ldLmxlbmd0aCk7aisrKXtcbiAgICAgICAgICAgIGxldCBnYW1lQ2VsbCA9IGNyZWF0ZUVsZW1lbnQuY3JlYXRlRGl2KGAke2l9JHtqfWNvbXB1dGVyYClcbiAgICAgICAgICAgIGdhbWVDZWxsLmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpO1xuICAgICAgICAgICAgY29tcHV0ZXJHYW1lYm9hcmQuYXBwZW5kQ2hpbGQoZ2FtZUNlbGwpO1xuICAgICAgICB9XG4gICAgfVxuICAgIG1haW4uYXBwZW5kQ2hpbGQoaGVhZGVyKVxuICAgIGJ0bkNvbnRhaW5lci5hcHBlbmQob3JpZW50YXRpb25CdG4scmVzdGFydEJ0bilcbiAgICBtYWluLmFwcGVuZENoaWxkKGJ0bkNvbnRhaW5lcilcbiAgICBtYWluLmFwcGVuZENoaWxkKGdhbWVib2FyZHMpXG4gICAgZ2FtZWJvYXJkcy5hcHBlbmQocGxheWVySGVhZGVyLHBsYXllckdhbWVib2FyZCxjb21wdXRlckhlYWRlcixjb21wdXRlckdhbWVib2FyZClcbiAgICBtYWluLmFwcGVuZENoaWxkKGNyZWF0ZUZvb3RlcigpKVxufVxuXG5jb25zdCB1cGRhdGVIZWFkZXIgPSAodGV4dCkgPT4ge1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXInKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSB0ZXh0O1xufVxuXG5jb25zdCByZXN0YXJ0VUkgPSAoKSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluQ29udGFpbmVyJyk7XG4gICAgbWFpbi5pbm5lckhUTUwgPScnXG59XG5cbmV4cG9ydCB7Y3JlYXRlRWxlbWVudCxjcmVhdGVDb250YWluZXIsY3JlYXRlR2FtZUJvYXJkVUksdXBkYXRlSGVhZGVyLCByZXN0YXJ0VUl9OyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHt1cGRhdGVIZWFkZXJ9IGZyb20gXCIuL2RvbU1hbmlwXCJcblxuLy8gQ29kZSB0byB2aXN1YWxpemUgc2hpcCBwbGFjZW1lbnRcblxuY29uc3QgdXBkYXRlR2FtZWJvYXJkID0gKHBsYXllcjEsY29tcHV0ZXIxKSA9PntcbiAgICBmb3IobGV0IGk9MDsgaTwocGxheWVyMS5wbGF5ZXJCb2FyZC5hcnJheUdldHRlcigpLmxlbmd0aCk7aSsrKXtcbiAgICAgICAgZm9yKGxldCBqPTA7IGo8KHBsYXllcjEucGxheWVyQm9hcmQuYXJyYXlHZXR0ZXIoKVtpXS5sZW5ndGgpO2orKyl7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGxldCBnYW1lQ2VsbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2l9JHtqfWApXG4gICAgICAgICAgICBpZih0eXBlb2YgcGxheWVyMS5wbGF5ZXJCb2FyZC5hcnJheUdldHRlcigpW2ldW2pdID09PSAnb2JqZWN0Jyl7XG4gICAgICAgICAgICAgICAgbGV0IG5hbWUgPSBwbGF5ZXIxLnBsYXllckJvYXJkLmFycmF5R2V0dGVyKClbaV1bal0ubmFtZVxuICAgICAgICAgICAgICAgIGdhbWVDZWxsLmNsYXNzTGlzdC5hZGQobmFtZSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYocGxheWVyMS5wbGF5ZXJCb2FyZC5hcnJheUdldHRlcigpW2ldW2pdID09PSAneCcpe1xuICAgICAgICAgICAgICAgIGdhbWVDZWxsLmNsYXNzTGlzdC5hZGQoJ2VtcHR5JylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYocGxheWVyMS5wbGF5ZXJCb2FyZC5hcnJheUdldHRlcigpW2ldW2pdID09PSAnWCcpe1xuICAgICAgICAgICAgICAgIGdhbWVDZWxsLmNsYXNzTGlzdC5hZGQoJ2hpdCcpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yKGxldCBpPTA7IGk8KGNvbXB1dGVyMS5jb21wdXRlckJvYXJkLmFycmF5R2V0dGVyKCkubGVuZ3RoKTtpKyspe1xuICAgICAgICBmb3IobGV0IGo9MDsgajwoY29tcHV0ZXIxLmNvbXB1dGVyQm9hcmQuYXJyYXlHZXR0ZXIoKVtpXS5sZW5ndGgpO2orKyl7XG4gICAgICAgICAgICBsZXQgZ2FtZUNlbGwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgJHtpfSR7an1jb21wdXRlcmApXG4gICAgICAgICAgICBpZihjb21wdXRlcjEuY29tcHV0ZXJCb2FyZC5hcnJheUdldHRlcigpW2ldW2pdID09PSAneCcpe1xuICAgICAgICAgICAgICAgIGdhbWVDZWxsLmNsYXNzTGlzdC5hZGQoJ2VtcHR5JylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoY29tcHV0ZXIxLmNvbXB1dGVyQm9hcmQuYXJyYXlHZXR0ZXIoKVtpXVtqXSA9PT0gJ1gnKXtcbiAgICAgICAgICAgICAgICBnYW1lQ2VsbC5jbGFzc0xpc3QuYWRkKCdoaXQnKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufTtcblxubGV0IGN1cnJlbnRTaGlwO1xuLy9wbGF5ZXJIb3ZlciBzaG93cyBhbiBvdXRsaW5lIG9mIHRoZSBzaGlwIHRvIGJlIHBsYWNlZFxuY29uc3QgcGxheWVySG92ZXIgPSAoZXZlbnQpID0+IHtcbiAgICBsZXQgYmVnaW5JbmRleCA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC5pZCk7XG4gICAgbGV0IG9yaWVudGF0aW9uQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29yaWVudEJ0bicpO1xuICAgIC8vT3V0bGluZSBpZiBpdCBpcyBIb3Jpem9udGFsXG4gICAgaWYob3JpZW50YXRpb25CdG4udGV4dENvbnRlbnQgPT09ICdIb3Jpem9udGFsJyl7XG4gICAgICAgIC8vRGV0ZXJtaW5lcyBpZiB0aGUgb3V0bGluZSB3b3VsZCBiZSBvdXRzaWRlIG9mIHRoZSBhbGxvd2FibGUgcmFuZ2VcbiAgICAgICAgaWYoYmVnaW5JbmRleCUxMD4oYmVnaW5JbmRleCtjdXJyZW50U2hpcC5sZW5ndGgpJTEwICYmIChiZWdpbkluZGV4K2N1cnJlbnRTaGlwLmxlbmd0aCklMTAgIT09IDApe1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICAvL2ludGVyYXRlcyB0aHJvdWdoIHRoZSBzaGlwIGxlbmd0aCB0byBvdXRsaW5lIHRoZSBjb3JyZWN0IGxlbmd0aFxuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaTxjdXJyZW50U2hpcC5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgICAgICBsZXQgaW5kZXggPSBiZWdpbkluZGV4ICsgaTtcbiAgICAgICAgICAgICAgICAvL2luZGV4cyB1bmRlciAxMCBiZWdpbiB3aXRoIGEgMCBzbyB3ZSBuZWVkIHRvIGFkZCBhIHN0cmluZyAnMCcgdG8gdGhlIGluZGV4XG4gICAgICAgICAgICAgICAgaWYoaW5kZXggPCAxMCl7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID0gJzAnICsgaW5kZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vZ2V0cyB0aGUgY29ycmVjdCBjZWxscyB0byBzZWxlY3RcbiAgICAgICAgICAgICAgICBsZXQgY3VycmVudFRhciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGAke2luZGV4fWApO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGN1cnJlbnRUYXIuY2xhc3NMaXN0LmFkZCgnc2VsZWN0ZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvL3NhbWUgYXMgYWJvdmUgYnV0IGV2ZXJ5dGhpbmcgaXMgbXVsdGlwbGllZCBieSAxMCB0byBtYWtlIGl0IHdvcmsgZm9yIHZlcnRpY2FsIHBsYWNlbWVudFxuICAgIGVsc2V7XG4gICAgICAgIGNvbnNvbGUubG9nKGJlZ2luSW5kZXggKyBjdXJyZW50U2hpcC5sZW5ndGgqMTApXG4gICAgICAgIGlmKChiZWdpbkluZGV4ICsgY3VycmVudFNoaXAubGVuZ3RoKjEwKT4xMTApe1xuICAgICAgICB9XG4gICAgICAgIGVsc2V7XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpPGN1cnJlbnRTaGlwLmxlbmd0aCoxMDtpKz0xMCl7XG4gICAgICAgICAgICAgICAgbGV0IGluZGV4ID0gYmVnaW5JbmRleCArIGk7XG4gICAgICAgICAgICAgICAgaWYoaW5kZXggPCAxMCl7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4ID0gJzAnICsgaW5kZXg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBjdXJyZW50VGFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aW5kZXh9YCk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY3VycmVudFRhci5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59XG4vL2NoYW5nZXMgdGhlIG9yaWVudCBidXR0b24gXG5jb25zdCBvcmllbnRCdG4gPSAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coJ29yaWVudCcpXG4gICAgbGV0IG9yaWVudGF0aW9uQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29yaWVudEJ0bicpO1xuICAgIGxldCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXJHYW1lYm9hcmQnKTtcbiAgICAvL2NoYW5nZXMgdGV4dCB3aGVuIGNsaWNrZWRcbiAgICBpZihvcmllbnRhdGlvbkJ0bi50ZXh0Q29udGVudCA9PT0gJ0hvcml6b250YWwnKXtcbiAgICAgICAgb3JpZW50YXRpb25CdG4udGV4dENvbnRlbnQgPSAnVmVydGljYWwnO1xuICAgIH1cbiAgICBlbHNle1xuICAgICAgICBvcmllbnRhdGlvbkJ0bi50ZXh0Q29udGVudCA9ICdIb3Jpem9udGFsJztcbiAgICB9XG4gICAgLy80IGxpbmVzIGJlbG93IHJlbW92ZSBhbmQgYWRkIGxpc3RlbmVycyBzbyB0aGV5IHVwZGF0ZSB0aGUgb3JpZW50YXRpb24uXG4gICAgcGxheWVyQm9hcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLHBsYXllckV4aXQpO1xuICAgIHBsYXllckJvYXJkLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicscGxheWVySG92ZXIpO1xuICAgIHBsYXllckJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3ZlcicscGxheWVySG92ZXIpO1xuICAgIHBsYXllckJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlb3V0JyxwbGF5ZXJFeGl0KTtcbiAgICBcbn1cbi8vIENvZGUgdG8gZGVsZXRlIHRoZSBzaGlwIHZpc3VhbGl6YXRpb25cbmNvbnN0IHBsYXllckV4aXQgPSAoZXZlbnQpID0+IHtcbiAgICBsZXQgYmVnaW5JbmRleCA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC5pZCk7XG4gICAgbGV0IG9yaWVudGF0aW9uQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ29yaWVudEJ0bicpO1xuICAgIGlmKG9yaWVudGF0aW9uQnRuLnRleHRDb250ZW50ID09PSAnSG9yaXpvbnRhbCcpe1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpPGN1cnJlbnRTaGlwLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgbGV0IGluZGV4ID0gYmVnaW5JbmRleCArIGk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKGluZGV4IDwgMTApe1xuICAgICAgICAgICAgICAgIGluZGV4ID0gJzAnICsgaW5kZXhcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBjdXJyZW50VGFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aW5kZXh9YCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGN1cnJlbnRUYXIuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBlbHNle1xuICAgICAgICBmb3IobGV0IGkgPSAwOyBpPGN1cnJlbnRTaGlwLmxlbmd0aCoxMDtpKz0xMCl7XG4gICAgICAgICAgICBsZXQgaW5kZXggPSBiZWdpbkluZGV4ICsgaTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYoaW5kZXggPCAxMCl7XG4gICAgICAgICAgICAgICAgaW5kZXggPSAnMCcgKyBpbmRleFxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGluZGV4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBjdXJyZW50VGFyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYCR7aW5kZXh9YCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGN1cnJlbnRUYXIuY2xhc3NMaXN0LnJlbW92ZSgnc2VsZWN0ZWQnKTtcbiAgICAgICAgfVxuICAgIH1cblxufVxuXG4vL1BsYWNlcyBzaGlwXG5jb25zdCB1c2VyUGxhY2UgPSAoc2hpcHMscGxheWVyLGNvbXB1dGVyLHNoaXApID0+IHtcbiAgICBjb25zdCBwbGF5ZXJCb2FyZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwbGF5ZXJHYW1lYm9hcmQnKTtcbiAgICBjb25zdCBvcmllbnRhdGlvbkJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdvcmllbnRCdG4nKTtcbiAgICBjdXJyZW50U2hpcCA9IHNoaXA7XG5cbiAgICBwbGF5ZXJCb2FyZC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZW91dCcscGxheWVyRXhpdCk7XG4gICAgcGxheWVyQm9hcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJyxwbGF5ZXJIb3Zlcik7XG4gICAgcGxheWVyQm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJyxwbGF5ZXJIb3Zlcik7XG4gICAgcGxheWVyQm9hcmQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLHBsYXllckV4aXQpO1xuICAgIG9yaWVudGF0aW9uQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgb3JpZW50QnRuKTtcblxuICAgIHBsYXllckJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJyxmdW5jdGlvbihldmVudCl7XG4gICAgICAgIGxldCBlbGVtZW50ID0gZXZlbnQudGFyZ2V0LmlkO1xuICAgICAgICBwbGF5ZXIucGxheWVyUGxhY2Uoc2hpcCxwYXJzZUludChlbGVtZW50WzBdKSxwYXJzZUludChlbGVtZW50WzFdKSxvcmllbnRhdGlvbkJ0bi50ZXh0Q29udGVudC50b0xvd2VyQ2FzZSgpKTtcbiAgICAgICAgdXBkYXRlR2FtZWJvYXJkKHBsYXllcixjb21wdXRlcik7XG4gICAgICAgIHNoaXAuaXNQbGFjZWRTZXR0ZXIodHJ1ZSk7XG4gICAgICAgIHBsYXllckV4aXQoZXZlbnQpXG4gICAgICAgIGlmKGlzU2hpcFBsYWNlZChzaGlwcykgIT09IHRydWUgJiYgcGxheWVyLnBsYXllckJvYXJkLnNoaXBzQWxpdmVHZXR0ZXIoKS5pbmNsdWRlcyhzaGlwLm5hbWUpKXtcbiAgICAgICAgICAgIHVzZXJQbGFjZShzaGlwcyxwbGF5ZXIsY29tcHV0ZXIsaXNTaGlwUGxhY2VkKHNoaXBzKSlcbiAgICAgICAgICAgIHVwZGF0ZUhlYWRlcihgUGxhY2UgeW91ciAke2lzU2hpcFBsYWNlZChzaGlwcykubmFtZX0gYW55d2hlcmUgb24gdGhlIHBsYXllciBib2FyZGApXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZihwbGF5ZXIucGxheWVyQm9hcmQuc2hpcHNBbGl2ZUdldHRlcigpLmxlbmd0aDw1KXtcbiAgICAgICAgICAgIHVzZXJQbGFjZShzaGlwcyxwbGF5ZXIsY29tcHV0ZXIsc2hpcClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGlzU2hpcFBsYWNlZChzaGlwcykpe1xuICAgICAgICAgICAgbGV0IGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidG5Db250YWluZXInKVxuICAgICAgICAgICAgY29udGFpbmVyLnJlbW92ZUNoaWxkKG9yaWVudGF0aW9uQnRuKVxuICAgICAgICAgICAgcGxheWVyQm9hcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdXQnLHBsYXllckV4aXQpO1xuICAgICAgICAgICAgcGxheWVyQm9hcmQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VvdmVyJyxwbGF5ZXJIb3Zlcik7XG4gICAgICAgICAgICB1cGRhdGVIZWFkZXIoJ0NsaWNrIG9uIHRoZSBjb21wdXRlciBib2FyZCB0byBhdHRhY2shJylcbiAgICAgICAgfVxuICAgIH0sIHtvbmNlOnRydWV9KVxufVxuXG5jb25zdCBpc1NoaXBQbGFjZWQ9IChhcnIpID0+IHtcbiAgICBmb3IobGV0IGkgPSAwOyBpPGFyci5sZW5ndGg7aSsrKXtcbiAgICAgICAgaWYoIWFycltpXS5pc1BsYWNlZEdldHRlcigpKXtcblxuICAgICAgICAgICAgcmV0dXJuIGFycltpXVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlXG59XG5cblxuXG5leHBvcnQge3BsYXllckhvdmVyLHBsYXllckV4aXQsdXNlclBsYWNlLGlzU2hpcFBsYWNlZH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=