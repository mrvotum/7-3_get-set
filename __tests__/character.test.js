import Character from '../src/js/character';

test('Включение режима', () => {
  const input = new Character('Rick', 100, 10, 10);

  const expected = { // ожидает
    attack: 20,
    defence: 20,
    health: 200,
  };

  input.powerMode = true; // включаем режим
  const { attack, defence, health } = input; // получает
  expect({ attack, defence, health }).toEqual(expected); // сравнивает
});

test('Режим выключен, ничего не меняется', () => {
  const input = new Character('Rick', 100, 10, 10);

  const expected = { // ожидает
    attack: 10,
    defence: 10,
    health: 100,
  };

  const { attack, defence, health } = input; // получает
  expect({ attack, defence, health }).toEqual(expected); // сравнивает
});

test('Режим выключен через false, ничего не меняется', () => {
  const input = new Character('Rick', 100, 10, 10);

  const expected = { // ожидает
    attack: 10,
    defence: 10,
    health: 100,
  };
  input.powerMode = false; // включаем режим

  const { attack, defence, health } = input; // получает
  expect({ attack, defence, health }).toEqual(expected); // сравнивает
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

test('Режим включен, количество атак > 3, проверка powerMode', () => {
  const input = new Character('Rick', 100, 10, 10);

  const expected = { // ожидает
    powerMode: false,
  };

  input.powerMode = true; // включаем режим
  input.toAttack();
  input.toAttack();
  input.toAttack();
  input.toAttack();

  const { powerMode } = input; // получает
  expect({ powerMode }).toEqual(expected); // сравнивает
});
