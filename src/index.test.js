import {shipFactory, gameBoardFactory,player, computer} from "./index.js";
describe('Ship Factory tests', () => {

    test('Ship factory produces ship', () => {
        expect(shipFactory("Submarine",3).name).toEqual('Submarine');
    });
    test('Ship hit works', () => {
        expect(shipFactory("Submarine",3).hit()).toEqual(['x'])
    });
    test('Ship sunk works',() =>{
        let sub = shipFactory("Submarine",3);
        sub.hit();
        sub.hit();
        sub.hit();
        expect(sub.isSunk()).toEqual(true);
    })

});

describe('Gameboard Factory Tests', () => {

    test('Gameboard doesn\'t overflow on horizontal',() =>{
        const board = gameBoardFactory();
        board.startGame();
        expect(board.place(shipFactory('Submarine', 3),0,9,'horizontal')).toEqual([
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','','']])
    })

    test('RecieveAttack works and logs hit on empty map', () =>{
        const board = gameBoardFactory();
        board.startGame();
        board.recieveAttack(1,1)
        expect(board.recieveAttack(1,2)).toEqual([
            ['','','','','','','','','',''],
            ['','x','x','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','','']])
    })
    test('Ship is sunk after being destroyed by recieve attack', () => {
        const board = gameBoardFactory();
        board.startGame();
        const sub = shipFactory('Submarine',3);
        board.place(sub,0,0,'horizontal');
        board.recieveAttack(0,0);
        board.recieveAttack(0,1);
        board.recieveAttack(0,2);
        expect(sub.isSunk()).toEqual(true);
    })

});

describe('Player tests', () => {

    test('Player can place all 5 ships',() =>{
        const sub = shipFactory("submarine",3);
        const carrier = shipFactory("carrier",5);
        const battleship = shipFactory('battleship',4);
        const cruiser = shipFactory('cruiser',3);
        const destroyer = shipFactory('destroyer', 2);
        const player1 = player();
        player1.playerPlace(sub,0,0,"horizontal");
        player1.playerPlace(carrier,2,0,'horizontal');
        player1.playerPlace(battleship,4,0,'horizontal');
        player1.playerPlace(cruiser,6,0,'horizontal');
        player1.playerPlace(destroyer,8,0,'vertical');
        player1.playerBoard.recieveAttack(0,1);
        player1.playerBoard.recieveAttack(0,0);
        player1.playerBoard.recieveAttack(0,2);
        expect(sub.isSunk()).toEqual(true);
    })
    test('Computer random selection works', ()=>{
        const player1 = player();
        const computer1 = computer();

        expect(computer1.computerRandomAttack(player1.playerBoard)).toContainer('x');

    })
});


