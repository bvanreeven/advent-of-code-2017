import * as fs from "fs";

import { IGroup, getScore, countCharacters } from "./day9/helper";

// import { parse } from "./day9/parser-handwritten";
// import { parse } from "./day9/parser-parsimmon";
import { parse } from "./day9/parser-antlr4";

const testInputs = [
  "{}",
  "{{{}}}",
  "{{},{}}",
  "{{{},{},{{}}}}",
  "{<{},{},{{}}>}",
  "{<a>,<a>,<a>,<a>}",
  "{{<a>},{<a>},{<a>},{<a>}}",
  "{{<!>},{<!>},{<!>},{<a>}}",
  "{{<ab>},{<ab>},{<ab>},{<ab>}}",
  "{{<!!>},{<!!>},{<!!>},{<!!>}}",
  "{{<a!>},{<a!>},{<a!>},{<ab>}}",
];

const input = fs.readFileSync("input/day9.txt", { encoding: "utf8" });

// for (const testInput of testInputs) {
//   const group = parse(testInput);
//   console.log("Input: " + testInput);
//   console.log("Score: " + getScore(group));
//   console.log("Character count: " + countCharacters(group));
// }

const inputGroup: IGroup = parse(input);

console.log(`ouput part 1: ${getScore(inputGroup)}`);
console.log(`ouput part 2: ${countCharacters(inputGroup)}`);
