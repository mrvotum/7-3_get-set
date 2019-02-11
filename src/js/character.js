export default class Character {
  constructor(name, health, attack, defence) {
    this.name = name;
    this.level = 1;
    this.health = health;
    this.attack = attack;
    this.defence = defence;
    this.powerModeUsed = false; // Использовался ли
    this.powerModeWork = false; // Активен ли режим прямо сейчас
    this.powerModeCount = 0;
  }

  set powerMode(turn) { // powerMode turn on/off (true/false)
    // turn ? this.powerModeWork = true : console.log(`powerMode не активен`);
    if (turn === true) {
      this.powerModeWork = true;
    } else {
      console.log('powerMode не активен');
    }
    if (turn === true && this.powerModeUsed === true) { // если уже было использовано
      throw TypeError('powerMode уже был использован');
    }
  }

  get powerMode() {
    return this.powerModeWork;
  }

  toAttack() { // атаковать
    if (this.powerModeCount < 3) {
      this.powerModeCount += 1;
    } else {
      this.powerModeWork = false;
      this.powerModeUsed = true;
      console.log('Количество атак больше трёх, powerMode выключен');
    }
  }

  get powerHealth() {
    if (this.powerModeWork) {
      return this.health * 2;
    }
    return this.health;
  }

  get powerAttack() {
    if (this.powerModeWork) {
      return this.attack * 2;
    }
    return this.attack;
  }

  get powerDefence() {
    if (this.powerModeWork) {
      return this.defence * 2;
    }
    return this.defence;
  }
}
