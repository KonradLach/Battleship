import './style.css';
import {createContainer} from './domManip.js';

createContainer();

//Factory function to create the ships
const shipFactory = (name,length) => {
    //creates an array the size of the ships length to keep track of hits.
    let shipHealth = Array.from({length: `${length}`});

    //updates the shipHealth array with the position the ship got hit in
    const hit = (index) => {
        if (index < length){
            shipHealth[index] = 'x'
            return shipHealth;
        };
    }

    //if every value in the shipHealth array is hit this function returns that the ship is sunk
    const isSunk = () => {
        console.log(shipHealth);
        return shipHealth.every(val=> val === shipHealth[0]);
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
                gameArray[row][i] = ship.name;
            }
        }

        //vertical orrientations placement
        else if(orient === 'vertical' && canPlace()) {
            for(let i = row; i<((ship.length + row));i++){
                gameArray[i][column] = ship.name;
            }
        }
        return gameArray;
    }

    const recieveAttack = (row,column) =>{
        if(gameArray[row][column] === ''){
            gameArray[row][column] = 'x'
        }
        return gameArray
    }
    return{startGame, place, recieveAttack}
}

export {shipFactory,gameBoardFactory};