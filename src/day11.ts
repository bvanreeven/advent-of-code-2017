import * as fs from "fs";

const input = fs.readFileSync("input/day11.txt", { encoding: "utf8" });

type Direction = "n" | "ne" | "se" | "s" | "sw" | "nw";

const directions: Direction[] = input.split(",") as Direction[];

const deltas: { [key: string]: { dx: number, dy: number } } = {
  n: { dx: 0, dy: -1 },
  ne: { dx: 1, dy: 0 },
  se: { dx: 1, dy: 1 },
  s: { dx: 0, dy: 1 },
  sw: { dx: -1, dy: 0 },
  nw: { dx: -1, dy: -1 },
};

function getSteps(position: { x: number, y: number }) {
  // Deltas (+1, +1) and (-1, -1) count as one step, so if x and y are either
  // both negative or both positive, just take the largest value.
  if (position.x > 0 && position.y > 0 || position.x < 0 && position.y < 0) {
    return Math.max(Math.abs(position.x), Math.abs(position.y));
  } else {
    return Math.abs(position.x) + Math.abs(position.y);
  }
}

(() => {
  const position = { x: 0, y: 0 };

  let maxSteps = 0;

  for (const direction of directions) {
    position.x += deltas[direction].dx;
    position.y += deltas[direction].dy;

    maxSteps = Math.max(maxSteps, getSteps(position));
  }

  console.log(`output (part 1): ${getSteps(position)}`);

  console.log(`output (part 2): ${maxSteps}`);
})();
