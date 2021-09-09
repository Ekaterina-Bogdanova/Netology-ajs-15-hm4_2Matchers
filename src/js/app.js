const heroes = [
  { name: 'мечник', health: 10 },
  { name: 'маг', health: 100 },
  { name: 'лучник', health: 80 },
];

export default function getHealth(persons) {
  return persons.slice().sort((nextItem, currentItem) => currentItem.health - nextItem.health);
}

getHealth(heroes);
