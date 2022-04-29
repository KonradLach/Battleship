import './style.css';
import {createContainer,createGameBoardUI,updateHeader,restartUI} from './domManip.js';
import {shipFactory, player, computer, gameBoardFactory} from './factories';
import {userPlace,} from './playerPlace';
//initilizes the game
const initGame = () =>{
    //creates a player and a computer
    const player1 = player();
    const computer1 = computer();

    //creates all ships for player and computer
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

    let playerShips = [playerSub,playerCarrier,playerBattleship,playerCruiser,playerDestroyer]
    //creates the UI
    createContainer();
    createGameBoardUI(player1.playerBoard.arrayGetter(),computer1.computerBoard.arrayGetter());
    const restartBtn = document.getElementById('restartBtn');
    restartBtn.addEventListener('click',restartGame)
    userPlace(playerShips,player1,computer1,playerSub)


    computerRandomPlace(computer1,computerSub);
    computerRandomPlace(computer1,computerCarrier);
    computerRandomPlace(computer1,computerBattleship);
    computerRandomPlace(computer1,computerCruiser);
    computerRandomPlace(computer1,computerDestroyer);
    console.log(computer1.computerBoard.arrayGetter());


    updateGameboard(player1,computer1);
    const computerGameboardDiv = document.getElementById('computerGameboard');
    computerGameboardDiv.addEventListener('click',e => {
        playGame(player1,computer1,e)
    })
}


//Randomly places computer ships
const computerRandomPlace = (computer, ship) => {
    //Randomly selects 0 or 1. 0 is horizontal and 1 is vertical
    let randomOrientation = Math.floor(Math.random() * 2);
    //checks to shee if ship would intersect another ship that is already on the board
    const intersectCheck = (computer,ship,row,col,orient)=>{
        if(orient === 'vertical'){
            for(let i = 0;i<ship.length;i++){
                //iterates through the ships length and adding the index to the row because it is placed vertically. 
                //If the element is not empty it returns false
                if(computer.computerBoard.arrayGetter()[row+i][col] !== ''){
                    return false
                }
            }
            return true
        }
        else{
                //iterates through the ships length and adding the index to the column because it is placed horizontally. 
                //If the element is not empty it returns false
            for(let i = 0;i<ship.length;i++){
                if(computer.computerBoard.arrayGetter()[row][col+i] !== ''){
                    return false
                }
            }
            return true
        }
    }
        //places the ship randomly in vertical orientation
    if(randomOrientation === 1){
        
        let row = Math.floor(Math.random() * (10-ship.length));
        let col = Math.floor(Math.random()*10);
        //checks to see if it is interecting. If so then it calls the randomPlace function again
        if(intersectCheck(computer,ship,row,col,'vertical')){
            computer.computerBoard.place(ship,row,col,'vertical');
        }
        else{computerRandomPlace(computer,ship)}

    }
    //places the ship randomly in horizontal orrientation
    else{
        let row = Math.floor(Math.random()*10);
        let col = Math.floor(Math.random() * (10-ship.length));
        
        if(intersectCheck(computer,ship,row,col,'horizontal')){
            computer.computerBoard.place(ship,row,col,'horizontal')
        }
        else{computerRandomPlace(computer,ship)}
    }
}

const playGame = (player1,computer1,e) => {
        if(!gameOver(player1,computer1)) {
        player1.playerAttack(computer1.computerBoard,e)
        computer1.computerRandomAttack(player1.playerBoard)
        }
        updateGameboard(player1,computer1);
}

const gameOver= (player,computer) => {

    if(computer.computerBoard.shipsAliveGetter().length ===0  || player.playerBoard.shipsAliveGetter().length === 0){
        updateHeader('Game Over! Press Restart to play again!')
        return true
    }
    return false
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
            if(computer1.computerBoard.arrayGetter()[i][j] === 'x'){
                gameCell.classList.add('empty')
            }
            else if(computer1.computerBoard.arrayGetter()[i][j] === 'X'){
                gameCell.classList.add('hit')
            }
        }
    }
};

const restartGame = () => {
    restartUI();
    initGame();

}




initGame()



export {shipFactory,gameBoardFactory, player,computer,updateGameboard};