import {shipFactory} from "./index.js";

test('Ship factory produces ship', () => {
    expect(shipFactory("Submarine",3).name).toEqual('Submarine');
});
test('Ship hit works', () => {
    expect(shipFactory("Submarine",3).hit(1)).toEqual([undefined,'x',undefined])
});
describe('Is sunk working', () => {
    let sub = shipFactory("Submarine",3);
    sub.hit(0);
    sub.hit(1);
    sub.hit(2);
    test('Ship sunk works',() =>{
        expect(sub.isSunk()).toEqual(true);
    })

})
