import {shipFactory, gameBoardFactory} from "./index.js";
describe('Ship Factory tests', () => {

    test('Ship factory produces ship', () => {
        expect(shipFactory("Submarine",3).name).toEqual('Submarine');
    });
    test('Ship hit works', () => {
        expect(shipFactory("Submarine",3).hit(1)).toEqual([undefined,'x',undefined])
    });
    test('Ship sunk works',() =>{
        let sub = shipFactory("Submarine",3);
        sub.hit(0);
        sub.hit(1);
        sub.hit(2);
        expect(sub.isSunk()).toEqual(true);
    })

});

describe('Gameboard Factory Tests', () => {
    test('Gameboard places ships in location Horizontal',() =>{
        const board = gameBoardFactory();
        board.startGame();
        expect(board.place(shipFactory('Submarine', 3),0,1,'horizontal')).toEqual([
            ['','Submarine','Submarine','Submarine','','','','','',''],
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

    test('Gameboard places ships in location Vertical',() =>{
        const board = gameBoardFactory();
        board.startGame();
        expect(board.place(shipFactory('Submarine', 3),0,1,'vertical')).toEqual([
            ['','Submarine','','','','','','','',''],
            ['','Submarine','','','','','','','',''],
            ['','Submarine','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','','']])
    })
    test('Gameboard doesn\'t intersect other ships',() =>{
        const board = gameBoardFactory();
        board.startGame();
        board.place(shipFactory('Submarine', 3),0,1,'horizontal')
        expect(board.place(shipFactory('Submarine', 3),0,1,'horizontal')).toEqual([
            ['','Submarine','Submarine','Submarine','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','','']]);
    })
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

    test('works and logs hit on empty map', () =>{
        const board = gameBoardFactory();
        board.startGame();
        expect(board.recieveAttack(1,1)).toEqual([
            ['','','','','','','','','',''],
            ['','x','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','',''],
            ['','','','','','','','','','']])
    })
});


