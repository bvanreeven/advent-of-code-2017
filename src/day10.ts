import * as fs from "fs";
import { createState, performRound, knotHash } from "./knothash";

const listSize = 256;
const input = fs.readFileSync("input/day10.txt", { encoding: "utf8" });

// const listSize = 5;
// const input = "3,4,1,5";

const lengths = input.split(",").map(x => parseInt(x, 10));
const state = createState();
performRound(state, lengths);

console.log(`output part 1: ${state.list[0] * state.list[1]}`);

console.log(`output part 2: ${knotHash(input)}`);
