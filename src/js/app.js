import Character from './character.js';

const player = new Character('Rick', 100, 10, 10);
// 'имя', здоровье, атака, защита
console.log(player);
player.powerMode = true;
console.log(player);

player.attackFun();
player.attackFun();
player.attackFun();
player.attackFun();

console.log(player);
