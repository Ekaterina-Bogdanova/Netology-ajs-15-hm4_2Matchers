import getHealth from '../app';

test('check the wounded with toEqual', () => {
  const incorrectOrderHeroes = [
    { name: 'друид', health: 20 },
    { name: 'маг', health: 100 },
    { name: 'мечник', health: 10 },
    { name: 'лучник', health: 80 },
  ];

  const result = getHealth(incorrectOrderHeroes);
  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'друид', health: 20 },
    { name: 'мечник', health: 10 },
  ];

  expect(result).toEqual(expected);
});

test('check the wounded with toBe', () => {
  const incorrectOrderHeroes = [
    { name: 'друид', health: 20 },
    { name: 'маг', health: 100 },
    { name: 'мечник', health: 10 },
    { name: 'лучник', health: 80 },
  ];

  const result = getHealth(incorrectOrderHeroes);
  const expected = [
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 80 },
    { name: 'друид', health: 20 },
    { name: 'мечник', health: 10 },
  ];

  expect(result === expected).toBe(false);
});
