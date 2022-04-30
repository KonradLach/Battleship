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


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG9tLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOztVQUFBO1VBQ0E7Ozs7O1dDREE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esb0JBQW9CLGNBQWM7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLG1EQUFtRCxJQUFJO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsbUJBQW1CO0FBQ3BDLHFCQUFxQixzQkFBc0I7QUFDM0Msc0RBQXNELEVBQUUsRUFBRSxFQUFFO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLHFCQUFxQjtBQUN0QyxxQkFBcUIsd0JBQXdCO0FBQzdDLHNEQUFzRCxFQUFFLEVBQUUsRUFBRTtBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvZG9tTWFuaXAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIHJlcXVpcmUgc2NvcGVcbnZhciBfX3dlYnBhY2tfcmVxdWlyZV9fID0ge307XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJjb25zdCBjcmVhdGVFbGVtZW50ID0ge1xuICAgIGNyZWF0ZVNlY3Rpb246IGZ1bmN0aW9uKGlkTmFtZSkge1xuICAgICAgICBsZXQgc2VjdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzZWN0aW9uXCIpO1xuICAgICAgICBzZWN0aW9uLnNldEF0dHJpYnV0ZSgnaWQnLGlkTmFtZSk7XG4gICAgICAgIHJldHVybiBzZWN0aW9uO1xuICAgIH0sXG4gICAgY3JlYXRlRGl2OiBmdW5jdGlvbihpZE5hbWUpe1xuICAgICAgICBsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgZGl2LnNldEF0dHJpYnV0ZSgnaWQnLGlkTmFtZSk7XG4gICAgICAgIHJldHVybiBkaXY7XG4gICAgfSxcbiAgICBjcmVhdGVQYXJhOiBmdW5jdGlvbih0ZXh0KXtcbiAgICAgICAgbGV0IHBhcmEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgcGFyYS50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgICAgIHJldHVybiBwYXJhO1xuICAgIH0sXG4gICAgY3JlYXRlTGk6IGZ1bmN0aW9uKHVsLGFycil7XG4gICAgICAgIGZvcihsZXQgaT0wO2k8IGFyci5sZW5ndGg7aSsrKXtcbiAgICAgICAgICAgIGxldCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgICAgIGxpLmlubmVySFRNTCA9IGFycltpXTtcbiAgICAgICAgICAgIHVsLmFwcGVuZENoaWxkKGxpKVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bDtcbiAgICB9LFxuICAgIGNyZWF0ZUg6IGZ1bmN0aW9uKG51bSx0ZXh0KXtcbiAgICAgICAgY29uc3QgaGVhZGluZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoYGgke251bX1gKTtcbiAgICAgICAgaGVhZGluZy5pbm5lclRleHQgPSB0ZXh0O1xuICAgICAgICByZXR1cm4gaGVhZGluZ1xuICAgIH1cbn1cbmNvbnN0IGNyZWF0ZUNvbnRhaW5lciA9ICgpID0+e1xuICAgIGNvbnN0IG1haW4gPSBjcmVhdGVFbGVtZW50LmNyZWF0ZURpdignbWFpbkNvbnRhaW5lcicpO1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobWFpbik7XG5cbn1cblxuY29uc3QgY3JlYXRlRm9vdGVyID0gKCkgPT4ge1xuICAgIGNvbnN0IGZvb3RlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2Zvb3RlcicpO1xuICAgIGZvb3Rlci5jbGFzc0xpc3QuYWRkKCdmb290ZXInKTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQoY3JlYXRlRWxlbWVudC5jcmVhdGVQYXJhKCdLb25yYWQgTGFjaCcpKTtcbiAgICBjb25zdCBnaXRIdWIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XG4gICAgZ2l0SHViLmhyZWYgPSAnaHR0cHM6Ly9naXRodWIuY29tL0tvbnJhZExhY2gnO1xuICAgIGdpdEh1Yi50YXJnZXQgPSAnX2JsYW5rJztcbiAgICBjb25zdCBnaXRIdWJMb2dvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaScpO1xuICAgIGdpdEh1YkxvZ28uY2xhc3NMaXN0LmFkZCgnZmFiJywnZmEtZ2l0aHViJyk7XG4gICAgZ2l0SHViLmFwcGVuZENoaWxkKGdpdEh1YkxvZ28pO1xuICAgIGZvb3Rlci5hcHBlbmRDaGlsZChnaXRIdWIpO1xuXG5cbiAgICBjb25zdCBsaW5rZWRJbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICBsaW5rZWRJbi5ocmVmID0gJ2h0dHBzOi8vd3d3LmxpbmtlZGluLmNvbS9pbi9rb25yYWQtbGFjaC0zMzg1NzExNjkvJztcbiAgICBsaW5rZWRJbi50YXJnZXQgPSAnX2JsYW5rJztcbiAgICBjb25zdCBsaW5rZWRJbkxvZ28gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpJyk7XG4gICAgbGlua2VkSW5Mb2dvLmNsYXNzTGlzdC5hZGQoJ2ZhYicsJ2ZhLWxpbmtlZGluJyk7XG4gICAgbGlua2VkSW4uYXBwZW5kQ2hpbGQobGlua2VkSW5Mb2dvKTtcbiAgICBmb290ZXIuYXBwZW5kQ2hpbGQobGlua2VkSW4pO1xuICAgIHJldHVybiBmb290ZXJcbn1cbmNvbnN0IGNyZWF0ZUdhbWVCb2FyZFVJID0gKHBsYXllcjEsY29tcHV0ZXIxKSA9PiB7XG4gICAgY29uc3QgbWFpbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluQ29udGFpbmVyJyk7XG4gICAgY29uc3QgdGl0bGUgPSBjcmVhdGVFbGVtZW50LmNyZWF0ZUgoMSxcIkJhdHRsZXNoaXBcIik7XG4gICAgbWFpbi5hcHBlbmRDaGlsZCh0aXRsZSk7XG4gICAgY29uc3QgaGVhZGVyID0gY3JlYXRlRWxlbWVudC5jcmVhdGVIKDEsXCJQbGFjZSB5b3VyIHN1Ym1hcmluZSBhbnl3aGVyZSBvbiB0aGUgcGxheWVyIGJvYXJkXCIpO1xuICAgIGhlYWRlci5zZXRBdHRyaWJ1dGUoJ2lkJywnaGVhZGVyJyk7XG4gICAgY29uc3QgZ2FtZWJvYXJkcyA9IGNyZWF0ZUVsZW1lbnQuY3JlYXRlRGl2KCdnYW1lYm9hcmRzJyk7XG4gICAgY29uc3QgcGxheWVyR2FtZWJvYXJkID0gY3JlYXRlRWxlbWVudC5jcmVhdGVEaXYoJ3BsYXllckdhbWVib2FyZCcpO1xuICAgIGNvbnN0IGNvbXB1dGVyR2FtZWJvYXJkID0gY3JlYXRlRWxlbWVudC5jcmVhdGVEaXYoJ2NvbXB1dGVyR2FtZWJvYXJkJyk7XG4gICAgY29uc3QgcGxheWVySGVhZGVyID0gY3JlYXRlRWxlbWVudC5jcmVhdGVIKDIsJ1BsYXllclxcJ3MgQm9hcmQnKTtcbiAgICBjb25zdCBjb21wdXRlckhlYWRlciA9IGNyZWF0ZUVsZW1lbnQuY3JlYXRlSCgyLCdDb21wdXRlclxcJ3MgQm9hcmQnKTtcbiAgICBjb25zdCBvcmllbnRhdGlvbkJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIG9yaWVudGF0aW9uQnRuLmlubmVyVGV4dCA9ICdIb3Jpem9udGFsJ1xuICAgIG9yaWVudGF0aW9uQnRuLnNldEF0dHJpYnV0ZSgnaWQnLCdvcmllbnRCdG4nKVxuICAgIGNvbnN0IHJlc3RhcnRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICByZXN0YXJ0QnRuLnNldEF0dHJpYnV0ZSgnaWQnLCdyZXN0YXJ0QnRuJyk7XG4gICAgcmVzdGFydEJ0bi50ZXh0Q29udGVudCA9ICdSZXN0YXJ0J1xuICAgIHBsYXllckhlYWRlci5zZXRBdHRyaWJ1dGUoJ2lkJywncGxheWVySGVhZGVyJyk7XG4gICAgY29tcHV0ZXJIZWFkZXIuc2V0QXR0cmlidXRlKCdpZCcsJ2NvbXB1dGVySGVhZGVyJyk7XG4gICAgY29uc3QgYnRuQ29udGFpbmVyID0gY3JlYXRlRWxlbWVudC5jcmVhdGVEaXYoJ2J0bkNvbnRhaW5lcicpO1xuICAgIGZvcihsZXQgaT0wOyBpPChwbGF5ZXIxLmxlbmd0aCk7aSsrKXtcbiAgICAgICAgZm9yKGxldCBqPTA7IGo8KHBsYXllcjFbaV0ubGVuZ3RoKTtqKyspe1xuICAgICAgICAgICAgbGV0IGdhbWVDZWxsID0gY3JlYXRlRWxlbWVudC5jcmVhdGVEaXYoYCR7aX0ke2p9YClcbiAgICAgICAgICAgIGdhbWVDZWxsLmNsYXNzTGlzdC5hZGQoXCJjZWxsXCIpO1xuICAgICAgICAgICAgcGxheWVyR2FtZWJvYXJkLmFwcGVuZENoaWxkKGdhbWVDZWxsKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBmb3IobGV0IGk9MDsgaTwoY29tcHV0ZXIxLmxlbmd0aCk7aSsrKXtcbiAgICAgICAgZm9yKGxldCBqPTA7IGo8KGNvbXB1dGVyMVtpXS5sZW5ndGgpO2orKyl7XG4gICAgICAgICAgICBsZXQgZ2FtZUNlbGwgPSBjcmVhdGVFbGVtZW50LmNyZWF0ZURpdihgJHtpfSR7an1jb21wdXRlcmApXG4gICAgICAgICAgICBnYW1lQ2VsbC5jbGFzc0xpc3QuYWRkKFwiY2VsbFwiKTtcbiAgICAgICAgICAgIGNvbXB1dGVyR2FtZWJvYXJkLmFwcGVuZENoaWxkKGdhbWVDZWxsKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBtYWluLmFwcGVuZENoaWxkKGhlYWRlcilcbiAgICBidG5Db250YWluZXIuYXBwZW5kKG9yaWVudGF0aW9uQnRuLHJlc3RhcnRCdG4pXG4gICAgbWFpbi5hcHBlbmRDaGlsZChidG5Db250YWluZXIpXG4gICAgbWFpbi5hcHBlbmRDaGlsZChnYW1lYm9hcmRzKVxuICAgIGdhbWVib2FyZHMuYXBwZW5kKHBsYXllckhlYWRlcixwbGF5ZXJHYW1lYm9hcmQsY29tcHV0ZXJIZWFkZXIsY29tcHV0ZXJHYW1lYm9hcmQpXG4gICAgbWFpbi5hcHBlbmRDaGlsZChjcmVhdGVGb290ZXIoKSlcbn1cblxuY29uc3QgdXBkYXRlSGVhZGVyID0gKHRleHQpID0+IHtcbiAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyJyk7XG4gICAgaGVhZGVyLnRleHRDb250ZW50ID0gdGV4dDtcbn1cblxuY29uc3QgcmVzdGFydFVJID0gKCkgPT4ge1xuICAgIGNvbnN0IG1haW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbkNvbnRhaW5lcicpO1xuICAgIG1haW4uaW5uZXJIVE1MID0nJ1xufVxuXG5leHBvcnQge2NyZWF0ZUVsZW1lbnQsY3JlYXRlQ29udGFpbmVyLGNyZWF0ZUdhbWVCb2FyZFVJLHVwZGF0ZUhlYWRlciwgcmVzdGFydFVJfTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=