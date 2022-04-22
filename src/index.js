import './style.css';
import {createElement} from './domManip.js';


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


    const recieveAttack = (row,column) =>{
        if(gameArray[row][column] === ''){
            gameArray[row][column] = 'x'
        }
        else{
            gameArray[row][column].hit();
            if(gameArray[row][column].isSunk()){
                shipsAlive.pop(gameArray[row][column].name)
            }
            gameArray[row][column] = 'X';
            
        }
        return gameArray
    }
    const arrayGetter = () => gameArray;
    return{startGame, place, recieveAttack,arrayGetter}
}

const player = () =>{
    let playerBoard = gameBoardFactory();
    playerBoard.startGame();
    const playerPlace = (ship,row,column,orient) =>{
        playerBoard.place(ship,row,column,orient);
        return playerBoard
    }
    const playerAttack = (computerBoard,e) => {
        const row = parseInt(e.target.id[0])
        // let row = prompt('Choose row 0-10');
        const col = parseInt(e.target.id[1])
        // let col = prompt('Choose column 0-10');
        console.log(computerBoard.arrayGetter())
        computerBoard.recieveAttack(row,col);
        return true
    }   
    return {playerBoard,playerPlace,playerAttack}
}

const computer = () => {
    let computerBoard = gameBoardFactory();
    computerBoard.startGame();
    const computerRandomAttack = (playerBoard) =>{
        let randomChoice = () => {
            let randomRow = Math.floor(Math.random() *10)
            let randomColumn = Math.floor(Math.random() * 10)
            return [randomRow, randomColumn]
        }
        let random= randomChoice();
        let row = random[0];
        let column = random[1];
        playerBoard.recieveAttack(row,column);
        return playerBoard.arrayGetter();
    }
    return {computerBoard,computerRandomAttack}
}

const initGame = () =>{
    const player1 = player();
    const computer1 = computer();
    const playerSub = shipFactory("submarine",3);
    const playerCarrier = shipFactory("carrier",5);
    const playerBattleship = shipFactory('battleship',4);
    const playerCruiser = shipFactory('cruiser',3);
    const playerDestroyer = shipFactory('destroyer', 2);
    const computerSub = shipFactory("submarine",3);
    const computerCarrier = shipFactory("carrier",5);
    const computerBattleship = shipFactory('battleship',4);
    const computerCruiser = shipFactory('cruiser',3);
    const computerDestroyer = shipFactory('destroyer', 2);
    createContainer();
    createGameBoardUI(player1.playerBoard.arrayGetter(),computer1.computerBoard.arrayGetter());
    
    player1.playerPlace(playerSub,0,0,'horizontal');
    player1.playerPlace(playerCarrier,1,0,'horizontal');
    player1.playerPlace(playerBattleship,2,0,'horizontal');
    player1.playerPlace(playerCruiser,4,0,'horizontal');
    player1.playerPlace(playerDestroyer,5,0,'horizontal');
    computer1.computerBoard.place(computerSub,0,0,'horizontal');
    computer1.computerBoard.place(computerCarrier,1,0,'horizontal');
    computer1.computerBoard.place(computerBattleship,2,0,'horizontal');
    computer1.computerBoard.place(computerCruiser,3,0,'horizontal');
    computer1.computerBoard.place(computerDestroyer,4,0,'horizontal');
    updateGameboard(player1,computer1);
    const playerGameboardDiv = document.getElementById('playerGameboard');
    playerGameboardDiv.addEventListener('click',e => {
        playGame(player1,computer1,e)
    })
    }

const playGame = (player1,computer1,e) => {
    player1.playerAttack(computer1.computerBoard,e)
    computer1.computerRandomAttack(player1.playerBoard)
    updateGameboard(player1,computer1);

}

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
            if(typeof computer1.computerBoard.arrayGetter()[i][j] === 'object'){
                gameCell.innerHTML = computer1.computerBoard.arrayGetter()[i][j].name
            }
            else{
                gameCell.innerHTML = computer1.computerBoard.arrayGetter()[i][j];
            }
        }
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

initGame()

export {shipFactory,gameBoardFactory, player,computer};