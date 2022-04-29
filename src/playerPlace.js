import { updateGameboard } from "./index";
import {updateHeader} from "./domManip"
// Code to visualize ship placement

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
        if(beginIndex%10>(beginIndex+currentShip.length)%10 && (beginIndex+currentShip.length)%10 !== 0){
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
            updateHeader(`Place your ${isShipPlaced(ships).name} anywhere on the player board`)
        }
        else if(player.playerBoard.shipsAliveGetter().length<5){
            userPlace(ships,player,computer,ship)
        }
        else if(isShipPlaced(ships)){
            let container = document.getElementById('btnContainer')
            container.removeChild(orientationBtn)
            playerBoard.removeEventListener('mouseout',playerExit);
            playerBoard.removeEventListener('mouseover',playerHover);
            updateHeader('Click on the computer board to attack!')
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



export {playerHover,playerExit,userPlace,isShipPlaced}