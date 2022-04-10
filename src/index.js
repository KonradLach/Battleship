import './style.css';
import {createContainer} from './domManip.js';

createContainer();

const shipFactory = (name,length) => {
    let shipHealth = Array.from({length: `${length}`});
    const hit = (index) => {
        if (index < length){
            shipHealth[index] = 'x'
            return shipHealth;
        };
    }
    const isSunk = () => {
        console.log(shipHealth);
        return shipHealth.every(val=> val === shipHealth[0]);
    }
    return {name,length,hit, isSunk}
}

const gameBoardFactory = () =>{
    let gameBoardSize = 10;
    let gameArray = [];
    const startGame = () =>{
        for(let i=0; i<(gameBoardSize * gameBoardSize);i++){
            gameArray.push('');
        }    
    }

    return gameBoard
}
console.log("Hello");
const sub = shipFactory('Submarine',3);
export {shipFactory};