import Character from '../src/js/character';

test('', () => {
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

// test('', () => {
//   const input = 'Десять';

//   const received = () => convertToNumber(input); // получает ошибку
//   expect(received).toThrow(); // ждёт ошибку
// });
