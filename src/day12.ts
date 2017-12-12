import * as fs from "fs";

const input = fs.readFileSync("input/day12.txt", { encoding: "utf8" });

interface IPipes {
  program: number;
  pipes: number[];
}

function *getPipes(): IterableIterator<IPipes> {
  for (const line of input.split("\n")) {
    const parts = line.split(" <-> ");
    yield {
      program: Number(parts[0]),
      pipes: parts[1].split(", ").map(Number),
    };
  }
}

const pipesMap: { [program: number]: IPipes } = {};
for (const pipes of getPipes()) {
  pipesMap[pipes.program] = pipes;
}

const visited: { [program: number]: boolean } = {};

function visit(program: number) {
  if (visited[program]) {
    return;
  }

  visited[program] = true;

  for (const pipe of pipesMap[program].pipes) {
    visit(pipe);
  }
}

visit(0);

console.log(`output (part 1): ${Object.keys(visited).length}`);

let numGroups = 1;

for (const program in pipesMap) {
  if (visited[program]) {
    continue;
  }

  visit(Number(program));
  numGroups++;
}

console.log(`output (part 2): ${numGroups}`);
