import Character from './character';

const player = new Character('Rick', 100, 10, 10);
// 'имя', здоровье, атака, защита
console.log(player);

// player.powerModeUsed = true;
player.powerMode = true;
console.log(player);

player.toAttack();
player.toAttack();
player.toAttack();
