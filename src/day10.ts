import * as fs from "fs";

const listSize = 256;
const input = fs.readFileSync("input/day10.txt", { encoding: "utf8" });

// const listSize = 5;
// const input = "3,4,1,5";

interface IState {
  list: number[];
  currentPosition: number;
  skipSize: number;
}

function createState(): IState {
  return {
    list: [...Array(listSize).keys()],
    currentPosition: 0,
    skipSize: 0,
  };
}

function performRound(state: IState, lengths: number[]) {
  for (const length of lengths) {
    const newList = [...state.list];

    for (let i = 0; i < length; i++) {
      const index = (state.currentPosition + i) % state.list.length;
      const otherIndex = (state.currentPosition + length - 1 - i) % state.list.length;
      newList[otherIndex] = state.list[index];
    }

    state.list = newList;
    state.currentPosition = (state.currentPosition + length + state.skipSize++) % state.list.length;
  }
}

(() => {
  const lengths = input.split(",").map(x => parseInt(x, 10));
  const state = createState();
  performRound(state, lengths);

  console.log(`output part 1: ${state.list[0] * state.list[1]}`);
})();

(() => {
  const lengths = [...input].map(c => c.charCodeAt(0)).concat([17, 31, 73, 47, 23]);
  const state = createState();

  for (let i = 0; i < 64; i++) {
    performRound(state, lengths);
  }

  const sparseHash = [...state.list];

  const blocks = [];
  while (sparseHash.length > 0) {
    blocks.push(sparseHash.splice(0, 16));
  }

  const denseHash = blocks.map(block => block.reduce((x, y) => x ^ y));

  const knotHash = denseHash.map(n => ("0" + n.toString(16)).slice(-2)).join("");

  console.log(`output part 2: ${knotHash}`);
})();
