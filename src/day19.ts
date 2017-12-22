import * as fs from "fs";

const useTestInput = false;

const input = fs.readFileSync("input/day19.txt", { encoding: "utf8" });
const testInput = fs.readFileSync("input/day19-test.txt", { encoding: "utf8" });

const map = (useTestInput ? testInput : input).split("\n");

const state = {
  x: map[0].indexOf("|"),
  y: 0,
  dx: 0,
  dy: 1,
};

let letters = "";
let steps = 0;

while (true) {
  const current = map[state.y][state.x];
  if (current === "+") {
    if (state.dx === 0) {
      state.dy = 0;
      state.dx = map[state.y][state.x + 1] !== " " ? 1 : -1;
    } else {
      state.dx = 0;
      state.dy = map[state.y + 1][state.x] !== " " ? 1 : -1;
    }
  } else if (/[A-Z]/.test(current)) {
    letters += current;
  } else if (current === " ") {
    break;
  }

  state.x += state.dx;
  state.y += state.dy;
  steps++;
}

console.log(`output (part 1): ${letters}`);
console.log(`output (part 2): ${steps}`);
