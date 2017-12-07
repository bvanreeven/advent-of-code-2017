import * as fs from "fs";

const input = fs.readFileSync("input/day5.txt", { encoding: "utf8" });
const program1 = input.split("\n").map(n => parseInt(n, 10));
const program2 = input.split("\n").map(n => parseInt(n, 10));
// console.log(program);
// const program = [0, 3, 0, 1, -3];

let step = 0;

let programCounter = 0;

while (true) {
  const instruction = program1[programCounter]++;

  programCounter += instruction;

  step++;

  if (programCounter < 0 || programCounter >= program1.length) {
    break;
  }
}

console.log(`output part 1: ${step}`);

step = 0;

programCounter = 0;

while (true) {
  const instruction = program2[programCounter];
  if (instruction >= 3) {
    program2[programCounter]--;
  } else {
    program2[programCounter]++;
  }

  programCounter += instruction;

  step++;

  if (programCounter < 0 || programCounter >= program2.length) {
    break;
  }
}

console.log(`output part 2: ${step}`);
