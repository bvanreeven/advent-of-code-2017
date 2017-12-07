import * as fs from "fs";

const testInput = `pbga (66)
xhth (57)
ebii (61)
havc (66)
ktlj (57)
fwft (72) -> ktlj, cntj, xhth
qoyq (66)
padx (45) -> pbga, havc, qoyq
tknk (41) -> ugml, padx, fwft
jptl (61)
ugml (68) -> gyxo, ebii, jptl
gyxo (61)
cntj (57)`;

// const input = testInput;
const input = fs.readFileSync("input/day7.txt", { encoding: "utf8" });

interface IProgram {
  name: string;
  weight: number;
  subprogramNames: string[];
  totalWeight?: number;
}

const programsByName: { [name: string]: IProgram } = {};
const programs: IProgram[] = [];

for (const line of input.split("\n")) {
  const match = /([a-z]+) \((\d+)\)( -> (([a-z]+, )*[a-z]+))?/.exec(line)!;
  const program = {
    name: match[1],
    weight: parseInt(match[2], 10),
    subprogramNames: typeof match[4] === "string" ? match[4].split(", ") : [],
  };
  programsByName[program.name] = program;
  programs.push(program);
}

const rootProgram = programs.filter(p1 => !programs.some(p2 => p2.subprogramNames.indexOf(p1.name) !== -1))[0];

console.log(`output part 1: ${rootProgram.name}`);

function getSubprograms(program: IProgram) {
  return program.subprogramNames.map(n => programsByName[n]);
}

function calculateTotalWeight(program: IProgram): number {
  if (!program.totalWeight) {
    program.totalWeight = getSubprograms(program)
      .reduce((acc, p) => acc + calculateTotalWeight(p), program.weight);
  }
  return program.totalWeight;
}

calculateTotalWeight(rootProgram);

function info(program: IProgram) {
  return `${program.name} (${program.totalWeight})`;
}

function findUnbalancedProgram(program: IProgram): IProgram {
  console.log(`Find unbalanced program in ${info(program)}`);

  const subprograms = getSubprograms(program);
  console.log("  -" + subprograms.map(info).join("\n  -"));

  if (subprograms.length === 0 || subprograms.every(p => p.totalWeight === subprograms[0].totalWeight)) {
    return program;
  }

  const nonConformantProgram = subprograms.filter(p =>
    !subprograms.filter(p2 => p2 !== p).some(p2 => p2.totalWeight === p.totalWeight))[0];

  console.log(`Desired weight: ${subprograms.filter(p => p !== nonConformantProgram)[0].totalWeight}`);

  return findUnbalancedProgram(nonConformantProgram);
}

const unbalancedProgram = findUnbalancedProgram(rootProgram);

console.log(`Unbalanced program: ${unbalancedProgram.name}`);

// for (const subprogram of unbalancedProgram.subprogramNames.map(n => programsByName[n])) {
//   console.dir(subprogram);
// }

// console.log(`output part 2: ${loopSize}`);
