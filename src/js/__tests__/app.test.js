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

<<<<<<< HEAD
  expect(JSON.stringify(result)).toBe(JSON.stringify(expected));
=======
expect(JSON.stringify(result)).toBe(JSON.stringify(expected));
  
>>>>>>> b483fe946200eb1b5d5aff944c186f85a0c607bf
});
