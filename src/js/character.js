export default class Character {
  constructor(name, health, attack, defence) {
    this.name = name;
    this.level = 1;
    this._health = health;
    this._attack = attack;
    this._defence = defence;
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

  get powerMode() { // срабатывает, когда атак больше 3-х
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

  get health() {
    if (this.powerModeWork === true) {
      return this._health * 2;
    }
    return this._health;
  }

  get attack() {
    if (this.powerModeWork === true) {
      return this._attack * 2;
    }
    return this._attack;
  }

  get defence() {
    if (this.powerModeWork === true) {
      return this._defence * 2;
    }
    return this._defence;
  }
}
