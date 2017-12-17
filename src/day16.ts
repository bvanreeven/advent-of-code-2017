import * as fs from "fs";

const input = fs.readFileSync("input/day16.txt", { encoding: "utf8" });
const numPrograms = 16;

type Instruction =
  | { kind: "spin", size: number }
  | { kind: "exchange", position1: number, position2: number }
  | { kind: "partner", program1: string, program2: string }
  ;

const instructions = input.split(",").map<Instruction>(instruction => {
  const body = instruction.slice(1);
  switch (instruction[0]) {
    case "s":
      return { kind: "spin", size: Number(body) };
    case "x":
      const positionsToSwap = body.split("/").map(Number);
      return { kind: "exchange", position1: positionsToSwap[0], position2: positionsToSwap[1] };
    case "p":
      const programsToSwap = body.split("/");
      return { kind: "partner", program1: programsToSwap[0], program2: programsToSwap[1] };
    default:
      throw new Error(`Unknown instruction: ${instruction}`);
  }
});

const originalPrograms = [...Array(numPrograms).keys()].map(i => String.fromCharCode(97 + i));
let programs = [...originalPrograms];

const swapPrograms = (i: number, j: number) => {
  const tmp = programs[i];
  programs[i] = programs[j];
  programs[j] = tmp;
};

function performRound() {
  for (const instruction of instructions) {
    switch (instruction.kind) {
      case "spin":
        programs = programs.slice(-instruction.size).concat(programs.slice(0, numPrograms - instruction.size));
        break;
      case "exchange":
        swapPrograms(instruction.position1, instruction.position2);
        break;
      case "partner":
        swapPrograms(programs.indexOf(instruction.program1), programs.indexOf(instruction.program2));
        break;
    }
  }
}

performRound();

console.log(`output (part 1): ${programs.join("")}`);

const originalProgramsString = originalPrograms.join("");
const permutations: string[] = [originalProgramsString];

programs = [...originalPrograms];

while (true) {
  performRound();

  const programsString = programs.join("");

  if (programsString === originalProgramsString) {
    break;
  }

  permutations.push(programsString);
}

console.log(`output (part 2): ${permutations[1000000000 % permutations.length]}`);
