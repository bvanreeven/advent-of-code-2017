import * as fs from "fs";

const input = fs.readFileSync("input/day13.txt", { encoding: "utf8" });

const testInput = `
0: 3
1: 2
4: 4
6: 4
`.trim();

const useTestInput = false;

interface IScanners { [depth: number]: IScanner | undefined; }

interface IScanner {
  depth: number;
  range: number;
  position: number;
  direction: number;
}

const scanners = (useTestInput ? testInput : input)
  .split("\n")
  .map(line => line.split(": ").map(Number))
  .map<IScanner>(nums => ({ depth: nums[0], range: nums[1], position: 0, direction: 1 }));

const maxDepth = Math.max(...scanners.map(s => s.depth));

function* scannersAtTopGenerator(): IterableIterator<IScanner[]> {
  while (true) {
    yield scanners.filter(s => s.position === 0);

    for (const scanner of scanners) {
      scanner.position += scanner.direction;
      if (scanner.position === 0) {
        scanner.direction = 1;
      } else if (scanner.position === scanner.range - 1) {
        scanner.direction = -1;
      }
    }
  }
}

const caughtInDelay: { [delay: number]: boolean } = {};

let severityOfDelay0 = 0;
let picosecond = 0;

for (const scannersAtTop of scannersAtTopGenerator()) {
  const checkDelay = picosecond - (maxDepth + 1);
  if (checkDelay >= 0 && !caughtInDelay[checkDelay]) {
    console.log(`output (part 1): ${severityOfDelay0}`);
    console.log(`output (part 2): ${checkDelay}`);
    break;
  }

  for (const scanner of scannersAtTop) {
    const delay = picosecond - scanner.depth;
    if (delay === 0) {
      severityOfDelay0 += scanner.depth * scanner.range;
    }
    caughtInDelay[delay] = true;
  }

  picosecond++;
}
