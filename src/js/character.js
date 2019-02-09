export default class Character {
  constructor(name, health, attack, defence) {
    this.name = name;
    this.level = 1;
    this.health = health;
    this.attack = attack;
    this.defence = defence;
    this.powerMore = false;
    this.powerModeUsed = false;
    this.powerCount = 0;
  }

  set powerMode(turn) { // turn on/off
    if (turn === true && this.powerModeUsed === false) {
      this.health *= 2;
      this.attack *= 2;
      this.defence *= 2;
      this.powerMore = true;
    } else if (turn === true && this.powerModeUsed === true) {
      throw TypeError('Повторно использовать powerMode нельзя!');
    }
  }

  attackFun() {
    if (this.powerCount < 3) {
      this.powerCount += 1;
    } else {
      this.powerMore = false; // powerMode выключается
      this.powerModeUsed = true; // включается защита от повторного использования
      console.log(`это было всё, всем спасибо, расходимся`);
      this.health /= 2;
      this.attack /= 2;
      this.defence /= 2;
    }
  }
}
