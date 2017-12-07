const input = 368078;

interface ILocation {
  x: number;
  y: number;
}

function position(n: number): ILocation {
  let x = 0;
  let y = 0;

  let dx = 1;
  let dy = 0;

  let steps = 1;
  let currentStep = 0;

  let sequenceCounter = 0; // counts to 2

  let i = 1;

  while (i < n) {
    x += dx;
    y += dy;

    currentStep++;
    if (currentStep === steps) {
      sequenceCounter++;
      currentStep = 0;

      const newDx = dy;
      const newDy = -dx;
      dx = newDx;
      dy = newDy;
    }

    if (sequenceCounter === 2) {
      sequenceCounter = 0;
      steps++;
    }

    i++;
  }

  return { x, y };
}

function manhattanDistance(location: ILocation): number {
  return Math.abs(location.x) + Math.abs(location.y);
}

function distance(n: number): number {
  let i = 1;
  let d = 0; // current distance
  let direction = 1;
  let min = 1;
  let max = 2;

  let sequenceCounter = 0; // counts to 4

  while (i < n) {
    if (sequenceCounter === 4) {
      min++;
      max = min * 2;
      sequenceCounter = 0;
      d += 2;
    }

    d += direction;

    if (d === min) {
      direction = 1;
    } else if (d === max) {
      direction = -1;

      sequenceCounter++;
    }

    i++;
  }

  return d;
}

// for (let i = 1; i <= 40; i++) {
//   console.log(`${i}: ${distance(i)}`);
// }

// for (let i = 1; i <= 40; i++) {
//   console.log(`${i}: ${JSON.stringify(position(i))} --> ${manhattanDistance(position(i))}`);
// }

console.log(`output part 1: ${distance(input)}`);

const memory: { [location: string]: number } = {};
setValue({ x: 0, y: 0 }, 1);

function getValue(location: ILocation) {
  return memory[`${location.x};${location.y}`];
}

function setValue(location: ILocation, value: number) {
  // console.log(`${location.x};${location.y}: ${value}`);
  memory[`${location.x};${location.y}`] = value;
}

function getAdjacentValues(location: ILocation): number[] {
  return [
    getValue({ x: location.x - 1, y: location.y - 1 }),
    getValue({ x: location.x, y: location.y - 1 }),
    getValue({ x: location.x + 1, y: location.y - 1 }),
    getValue({ x: location.x - 1, y: location.y }),
    getValue({ x: location.x + 1, y: location.y }),
    getValue({ x: location.x - 1, y: location.y + 1 }),
    getValue({ x: location.x, y: location.y + 1 }),
    getValue({ x: location.x + 1, y: location.y + 1 }),
  ];
}

function getSumOfAdjacentValues(location: ILocation) {
  return getAdjacentValues(location).filter(n => typeof n === "number").reduce((prev, next) => prev + next, 0);
}

function getFirstValueLargerThan(n: number) {
  for (let i = 2; ; i++) {
    const location = position(i);
    const value = getSumOfAdjacentValues(location);
    setValue(location, value);
    if (value > n) {
      return value;
    }
  }
}

console.log(`output part 2: ${getFirstValueLargerThan(input)}`);
