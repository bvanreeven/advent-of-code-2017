const listSize = 256;

export interface IState {
  list: number[];
  currentPosition: number;
  skipSize: number;
}

export function createState(): IState {
  return {
    list: [...Array(listSize).keys()],
    currentPosition: 0,
    skipSize: 0,
  };
}

export function performRound(state: IState, lengths: number[]) {
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

export function knotHash(input: string) {
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

  return denseHash.map(n => ("0" + n.toString(16)).slice(-2)).join("");
}
