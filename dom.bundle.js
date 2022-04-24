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
    const gameboards = createElement.createDiv('gameboards');
    const playerGameboard = createElement.createDiv('playerGameboard');
    const computerGameboard = createElement.createDiv('computerGameboard');
    const playerHeader = createElement.createH(2,'Player\'s Board');
    const computerHeader = createElement.createH(2,'Computer\'s Header')
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
    main.appendChild(gameboards)
    gameboards.append(playerHeader,playerGameboard,computerHeader,computerGameboard)

}


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLG9CQUFvQixjQUFjO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxtREFBbUQsSUFBSTtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsbUJBQW1CO0FBQ3BDLHFCQUFxQixzQkFBc0I7QUFDM0Msc0RBQXNELEVBQUUsRUFBRSxFQUFFO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHFCQUFxQjtBQUN0QyxxQkFBcUIsd0JBQXdCO0FBQzdDLHNEQUFzRCxFQUFFLEVBQUUsRUFBRTtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9kb21NYW5pcC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNvbnN0IGNyZWF0ZUVsZW1lbnQgPSB7XG4gICAgY3JlYXRlU2VjdGlvbjogZnVuY3Rpb24oaWROYW1lKSB7XG4gICAgICAgIGxldCBzZWN0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNlY3Rpb25cIik7XG4gICAgICAgIHNlY3Rpb24uc2V0QXR0cmlidXRlKCdpZCcsaWROYW1lKTtcbiAgICAgICAgcmV0dXJuIHNlY3Rpb247XG4gICAgfSxcbiAgICBjcmVhdGVEaXY6IGZ1bmN0aW9uKGlkTmFtZSl7XG4gICAgICAgIGxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBkaXYuc2V0QXR0cmlidXRlKCdpZCcsaWROYW1lKTtcbiAgICAgICAgcmV0dXJuIGRpdjtcbiAgICB9LFxuICAgIGNyZWF0ZVBhcmE6IGZ1bmN0aW9uKHRleHQpe1xuICAgICAgICBsZXQgcGFyYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgICAgICBwYXJhLnRleHRDb250ZW50ID0gdGV4dDtcbiAgICAgICAgcmV0dXJuIHBhcmE7XG4gICAgfSxcbiAgICBjcmVhdGVMaTogZnVuY3Rpb24odWwsYXJyKXtcbiAgICAgICAgZm9yKGxldCBpPTA7aTwgYXJyLmxlbmd0aDtpKyspe1xuICAgICAgICAgICAgbGV0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICAgICAgbGkuaW5uZXJIVE1MID0gYXJyW2ldO1xuICAgICAgICAgICAgdWwuYXBwZW5kQ2hpbGQobGkpXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVsO1xuICAgIH0sXG4gICAgY3JlYXRlSDogZnVuY3Rpb24obnVtLHRleHQpe1xuICAgICAgICBjb25zdCBoZWFkaW5nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChgaCR7bnVtfWApO1xuICAgICAgICBoZWFkaW5nLmlubmVyVGV4dCA9IHRleHQ7XG4gICAgICAgIHJldHVybiBoZWFkaW5nXG4gICAgfVxufVxuY29uc3QgY3JlYXRlQ29udGFpbmVyID0gKCkgPT57XG4gICAgY29uc3QgbWFpbiA9IGNyZWF0ZUVsZW1lbnQuY3JlYXRlRGl2KCdtYWluQ29udGFpbmVyJyk7XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChtYWluKTtcbiAgICBjb25zdCBoZWFkZXIgPSBjcmVhdGVFbGVtZW50LmNyZWF0ZUgoMSxcIkJhdHRsZXNoaXBcIik7XG4gICAgbWFpbi5hcHBlbmRDaGlsZChoZWFkZXIpO1xufVxuXG5jb25zdCBjcmVhdGVHYW1lQm9hcmRVSSA9IChwbGF5ZXIxLGNvbXB1dGVyMSkgPT4ge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbkNvbnRhaW5lcicpO1xuICAgIGNvbnN0IGdhbWVib2FyZHMgPSBjcmVhdGVFbGVtZW50LmNyZWF0ZURpdignZ2FtZWJvYXJkcycpO1xuICAgIGNvbnN0IHBsYXllckdhbWVib2FyZCA9IGNyZWF0ZUVsZW1lbnQuY3JlYXRlRGl2KCdwbGF5ZXJHYW1lYm9hcmQnKTtcbiAgICBjb25zdCBjb21wdXRlckdhbWVib2FyZCA9IGNyZWF0ZUVsZW1lbnQuY3JlYXRlRGl2KCdjb21wdXRlckdhbWVib2FyZCcpO1xuICAgIGNvbnN0IHBsYXllckhlYWRlciA9IGNyZWF0ZUVsZW1lbnQuY3JlYXRlSCgyLCdQbGF5ZXJcXCdzIEJvYXJkJyk7XG4gICAgY29uc3QgY29tcHV0ZXJIZWFkZXIgPSBjcmVhdGVFbGVtZW50LmNyZWF0ZUgoMiwnQ29tcHV0ZXJcXCdzIEhlYWRlcicpXG4gICAgcGxheWVySGVhZGVyLnNldEF0dHJpYnV0ZSgnaWQnLCdwbGF5ZXJIZWFkZXInKTtcbiAgICBjb21wdXRlckhlYWRlci5zZXRBdHRyaWJ1dGUoJ2lkJywnY29tcHV0ZXJIZWFkZXInKTtcbiAgICBmb3IobGV0IGk9MDsgaTwocGxheWVyMS5sZW5ndGgpO2krKyl7XG4gICAgICAgIGZvcihsZXQgaj0wOyBqPChwbGF5ZXIxW2ldLmxlbmd0aCk7aisrKXtcbiAgICAgICAgICAgIGxldCBnYW1lQ2VsbCA9IGNyZWF0ZUVsZW1lbnQuY3JlYXRlRGl2KGAke2l9JHtqfWApXG4gICAgICAgICAgICBnYW1lQ2VsbC5jbGFzc0xpc3QuYWRkKFwiY2VsbFwiKTtcbiAgICAgICAgICAgIHBsYXllckdhbWVib2FyZC5hcHBlbmRDaGlsZChnYW1lQ2VsbCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZm9yKGxldCBpPTA7IGk8KGNvbXB1dGVyMS5sZW5ndGgpO2krKyl7XG4gICAgICAgIGZvcihsZXQgaj0wOyBqPChjb21wdXRlcjFbaV0ubGVuZ3RoKTtqKyspe1xuICAgICAgICAgICAgbGV0IGdhbWVDZWxsID0gY3JlYXRlRWxlbWVudC5jcmVhdGVEaXYoYCR7aX0ke2p9Y29tcHV0ZXJgKVxuICAgICAgICAgICAgZ2FtZUNlbGwuY2xhc3NMaXN0LmFkZChcImNlbGxcIik7XG4gICAgICAgICAgICBjb21wdXRlckdhbWVib2FyZC5hcHBlbmRDaGlsZChnYW1lQ2VsbCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbWFpbi5hcHBlbmRDaGlsZChnYW1lYm9hcmRzKVxuICAgIGdhbWVib2FyZHMuYXBwZW5kKHBsYXllckhlYWRlcixwbGF5ZXJHYW1lYm9hcmQsY29tcHV0ZXJIZWFkZXIsY29tcHV0ZXJHYW1lYm9hcmQpXG5cbn1cblxuZXhwb3J0IHtjcmVhdGVFbGVtZW50LGNyZWF0ZUNvbnRhaW5lcixjcmVhdGVHYW1lQm9hcmRVSX07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9