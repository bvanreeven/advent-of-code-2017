import * as fs from "fs";

const input = fs.readFileSync("input/day6.txt", { encoding: "utf8" });
const banks = input.split("\t").map(n => parseInt(n, 10));

// const banks = [0, 2, 7, 0];

const history: string[] = [];

let step = 0;
let loopSize = 0;

while (true) {
  const currentState = banks.join(":");
  if (history.indexOf(currentState) !== -1) {
    loopSize = history.length - history.indexOf(currentState);
    break;
  }
  history.push(currentState);

  // console.log(currentState);

  const maxBlockCount = banks.reduce((x, y) => Math.max(x, y), 0);

  const bankToRedistribute = banks.indexOf(maxBlockCount);
  banks[bankToRedistribute] = 0;

  let currentBank = bankToRedistribute;
  for (let i = 0; i < maxBlockCount; i++) {
    currentBank = (currentBank + 1) % banks.length;
    banks[currentBank]++;
  }

  step++;
}

console.log(`output part 1: ${step}`);

console.log(`output part 2: ${loopSize}`);

// console.log(JSON.stringify(history, null, 2));
