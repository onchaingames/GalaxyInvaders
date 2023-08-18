// gridUtils.js

const homeworlds = ['Lido', 'Rocket', 'Frax'];

export const generateGrid = () => {
  const grid = [];
  for (let i = 0; i < 16; i++) {
    const row = [];
    for (let j = 0; j < 16; j++) {
      const rand = Math.random();
      if (rand < 0.3) {
        row.push({
          type: 'rocket',
          homeworld: homeworlds[Math.floor(Math.random() * homeworlds.length)],
          ammo: Math.floor(Math.random() * 100),
          experience: Math.floor(Math.random() * 1000),
          victoryPoints: Math.floor(Math.random() * 5000),
        });
      } else if (rand < 0.35) {
        row.push({
          type: 'alien',
          ammoCost: Math.floor(Math.random() * 10),
          victoryPoints: Math.floor(Math.random() * 100),
          age: Math.floor(Math.random() * 10),
        });
      } else {
        row.push({
          type: 'blank',
          ammoCost: Math.floor(Math.random() * 10),
          victoryPoints: Math.floor(Math.random() * 100),
          age: Math.floor(Math.random() * 10),
        });
      }
    }
    grid.push(row);
  }
  return grid;
};