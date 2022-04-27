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
/*!*************************!*\
  !*** ./src/domManip.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "createContainer": () => (/* binding */ createContainer),
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "createGameBoardUI": () => (/* binding */ createGameBoardUI)
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
    const header = createElement.createH(1,"Battleship");
    main.appendChild(header);
}

const createGameBoardUI = (player1,computer1) => {
    const main = document.getElementById('mainContainer');
    const header = createElement.createH(1,"Place your Submarine anywhere");
    header.setAttribute('id','header');
    const gameboards = createElement.createDiv('gameboards');
    const playerGameboard = createElement.createDiv('playerGameboard');
    const computerGameboard = createElement.createDiv('computerGameboard');
    const playerHeader = createElement.createH(2,'Player\'s Board');
    const computerHeader = createElement.createH(2,'Computer\'s Header');
    const orientationBtn = document.createElement('button');
    orientationBtn.innerText = 'Horizontal'
    orientationBtn.setAttribute('id','orientBtn')
    playerHeader.setAttribute('id','playerHeader');
    computerHeader.setAttribute('id','computerHeader');
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
    main.appendChild(orientationBtn)
    main.appendChild(gameboards)
    gameboards.append(playerHeader,playerGameboard,computerHeader,computerGameboard)

}


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLG9CQUFvQixjQUFjO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxtREFBbUQsSUFBSTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLG1CQUFtQjtBQUNwQyxxQkFBcUIsc0JBQXNCO0FBQzNDLHNEQUFzRCxFQUFFLEVBQUUsRUFBRTtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQixxQkFBcUI7QUFDdEMscUJBQXFCLHdCQUF3QjtBQUM3QyxzREFBc0QsRUFBRSxFQUFFLEVBQUU7QUFDNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsInNvdXJjZXMiOlsid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2RvbU1hbmlwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc3QgY3JlYXRlRWxlbWVudCA9IHtcbiAgICBjcmVhdGVTZWN0aW9uOiBmdW5jdGlvbihpZE5hbWUpIHtcbiAgICAgICAgbGV0IHNlY3Rpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2VjdGlvblwiKTtcbiAgICAgICAgc2VjdGlvbi5zZXRBdHRyaWJ1dGUoJ2lkJyxpZE5hbWUpO1xuICAgICAgICByZXR1cm4gc2VjdGlvbjtcbiAgICB9LFxuICAgIGNyZWF0ZURpdjogZnVuY3Rpb24oaWROYW1lKXtcbiAgICAgICAgbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGRpdi5zZXRBdHRyaWJ1dGUoJ2lkJyxpZE5hbWUpO1xuICAgICAgICByZXR1cm4gZGl2O1xuICAgIH0sXG4gICAgY3JlYXRlUGFyYTogZnVuY3Rpb24odGV4dCl7XG4gICAgICAgIGxldCBwYXJhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIHBhcmEudGV4dENvbnRlbnQgPSB0ZXh0O1xuICAgICAgICByZXR1cm4gcGFyYTtcbiAgICB9LFxuICAgIGNyZWF0ZUxpOiBmdW5jdGlvbih1bCxhcnIpe1xuICAgICAgICBmb3IobGV0IGk9MDtpPCBhcnIubGVuZ3RoO2krKyl7XG4gICAgICAgICAgICBsZXQgbGkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlcIik7XG4gICAgICAgICAgICBsaS5pbm5lckhUTUwgPSBhcnJbaV07XG4gICAgICAgICAgICB1bC5hcHBlbmRDaGlsZChsaSlcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdWw7XG4gICAgfSxcbiAgICBjcmVhdGVIOiBmdW5jdGlvbihudW0sdGV4dCl7XG4gICAgICAgIGNvbnN0IGhlYWRpbmcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGBoJHtudW19YCk7XG4gICAgICAgIGhlYWRpbmcuaW5uZXJUZXh0ID0gdGV4dDtcbiAgICAgICAgcmV0dXJuIGhlYWRpbmdcbiAgICB9XG59XG5jb25zdCBjcmVhdGVDb250YWluZXIgPSAoKSA9PntcbiAgICBjb25zdCBtYWluID0gY3JlYXRlRWxlbWVudC5jcmVhdGVEaXYoJ21haW5Db250YWluZXInKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG1haW4pO1xuICAgIGNvbnN0IGhlYWRlciA9IGNyZWF0ZUVsZW1lbnQuY3JlYXRlSCgxLFwiQmF0dGxlc2hpcFwiKTtcbiAgICBtYWluLmFwcGVuZENoaWxkKGhlYWRlcik7XG59XG5cbmNvbnN0IGNyZWF0ZUdhbWVCb2FyZFVJID0gKHBsYXllcjEsY29tcHV0ZXIxKSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluQ29udGFpbmVyJyk7XG4gICAgY29uc3QgaGVhZGVyID0gY3JlYXRlRWxlbWVudC5jcmVhdGVIKDEsXCJQbGFjZSB5b3VyIFN1Ym1hcmluZSBhbnl3aGVyZVwiKTtcbiAgICBoZWFkZXIuc2V0QXR0cmlidXRlKCdpZCcsJ2hlYWRlcicpO1xuICAgIGNvbnN0IGdhbWVib2FyZHMgPSBjcmVhdGVFbGVtZW50LmNyZWF0ZURpdignZ2FtZWJvYXJkcycpO1xuICAgIGNvbnN0IHBsYXllckdhbWVib2FyZCA9IGNyZWF0ZUVsZW1lbnQuY3JlYXRlRGl2KCdwbGF5ZXJHYW1lYm9hcmQnKTtcbiAgICBjb25zdCBjb21wdXRlckdhbWVib2FyZCA9IGNyZWF0ZUVsZW1lbnQuY3JlYXRlRGl2KCdjb21wdXRlckdhbWVib2FyZCcpO1xuICAgIGNvbnN0IHBsYXllckhlYWRlciA9IGNyZWF0ZUVsZW1lbnQuY3JlYXRlSCgyLCdQbGF5ZXJcXCdzIEJvYXJkJyk7XG4gICAgY29uc3QgY29tcHV0ZXJIZWFkZXIgPSBjcmVhdGVFbGVtZW50LmNyZWF0ZUgoMiwnQ29tcHV0ZXJcXCdzIEhlYWRlcicpO1xuICAgIGNvbnN0IG9yaWVudGF0aW9uQnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgb3JpZW50YXRpb25CdG4uaW5uZXJUZXh0ID0gJ0hvcml6b250YWwnXG4gICAgb3JpZW50YXRpb25CdG4uc2V0QXR0cmlidXRlKCdpZCcsJ29yaWVudEJ0bicpXG4gICAgcGxheWVySGVhZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCdwbGF5ZXJIZWFkZXInKTtcbiAgICBjb21wdXRlckhlYWRlci5zZXRBdHRyaWJ1dGUoJ2lkJywnY29tcHV0ZXJIZWFkZXInKTtcbiAgICBmb3IobGV0IGk9MDsgaTwocGxheWVyMS5sZW5ndGgpO2krKyl7XG4gICAgICAgIGZvcihsZXQgaj0wOyBqPChwbGF5ZXIxW2ldLmxlbmd0aCk7aisrKXtcbiAgICAgICAgICAgIGxldCBnYW1lQ2VsbCA9IGNyZWF0ZUVsZW1lbnQuY3JlYXRlRGl2KGAke2l9JHtqfWApXG4gICAgICAgICAgICBnYW1lQ2VsbC5jbGFzc0xpc3QuYWRkKFwiY2VsbFwiKTtcbiAgICAgICAgICAgIHBsYXllckdhbWVib2FyZC5hcHBlbmRDaGlsZChnYW1lQ2VsbCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yKGxldCBpPTA7IGk8KGNvbXB1dGVyMS5sZW5ndGgpO2krKyl7XG4gICAgICAgIGZvcihsZXQgaj0wOyBqPChjb21wdXRlcjFbaV0ubGVuZ3RoKTtqKyspe1xuICAgICAgICAgICAgbGV0IGdhbWVDZWxsID0gY3JlYXRlRWxlbWVudC5jcmVhdGVEaXYoYCR7aX0ke2p9Y29tcHV0ZXJgKVxuICAgICAgICAgICAgZ2FtZUNlbGwuY2xhc3NMaXN0LmFkZChcImNlbGxcIik7XG4gICAgICAgICAgICBjb21wdXRlckdhbWVib2FyZC5hcHBlbmRDaGlsZChnYW1lQ2VsbCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbWFpbi5hcHBlbmRDaGlsZChoZWFkZXIpXG4gICAgbWFpbi5hcHBlbmRDaGlsZChvcmllbnRhdGlvbkJ0bilcbiAgICBtYWluLmFwcGVuZENoaWxkKGdhbWVib2FyZHMpXG4gICAgZ2FtZWJvYXJkcy5hcHBlbmQocGxheWVySGVhZGVyLHBsYXllckdhbWVib2FyZCxjb21wdXRlckhlYWRlcixjb21wdXRlckdhbWVib2FyZClcblxufVxuXG5leHBvcnQge2NyZWF0ZUVsZW1lbnQsY3JlYXRlQ29udGFpbmVyLGNyZWF0ZUdhbWVCb2FyZFVJfTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=