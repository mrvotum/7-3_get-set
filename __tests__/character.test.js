import Character from '../src/js/character';

test('Включение режима', () => {
  const input = new Character('Rick', 100, 10, 10);

  const expected = { // ожидает
    powerAttack: 20,
    powerDefence: 20,
    powerHealth: 200,
  };

  input.powerMode = true; // включаем режим
  const { powerAttack, powerDefence, powerHealth } = input; // получает
  expect({ powerAttack, powerDefence, powerHealth }).toEqual(expected); // сравнивает
});

test('Режим выключен, ничего не меняется', () => {
  const input = new Character('Rick', 100, 10, 10);

  const expected = { // ожидает
    powerAttack: 10,
    powerDefence: 10,
    powerHealth: 100,
  };

  const { powerAttack, powerDefence, powerHealth } = input; // получает
  expect({ powerAttack, powerDefence, powerHealth }).toEqual(expected); // сравнивает
});

test('Режим выключен через false, ничего не меняется', () => {
  const input = new Character('Rick', 100, 10, 10);

  const expected = { // ожидает
    powerAttack: 10,
    powerDefence: 10,
    powerHealth: 100,
  };
  input.powerMode = false; // включаем режим

  const { powerAttack, powerDefence, powerHealth } = input; // получает
  expect({ powerAttack, powerDefence, powerHealth }).toEqual(expected); // сравнивает
});

test('Режим включен, но количество атак > 3', () => {
  const input = new Character('Rick', 100, 10, 10);

  const expected = { // ожидает
    attack: 10,
    defence: 10,
    health: 100,
  };

  input.powerMode = true; // включаем режим
  input.toAttack();
  input.toAttack();
  input.toAttack();
  input.toAttack();

  const { attack, defence, health } = input; // получает
  expect({ attack, defence, health }).toEqual(expected); // сравнивает
});

test('Попытка повторно использовать powerMode', () => {
  const input = new Character('Rick', 100, 10, 10);

  input.powerModeUsed = true;

  const received = () => input.powerMode = true; // получает ошибку
  expect(received).toThrow(); // ждёт ошибку
});
