import * as fs from "fs";

const input = fs.readFileSync("input/day1.txt", { encoding: "utf8" });

console.log(`input: [${input}]`);

let sum = 0;

for (let i = 0; i < input.length; i++) {
  const digit = parseInt(input[i], 10);
  const next = parseInt(input[i === input.length - 1 ? 0 : i + 1], 10);
  if (digit === next) {
    sum += digit;
  }
}

console.log(`output part 1: ${sum}`);

let sum2 = 0;

for (let i = 0; i < input.length / 2; i++) {
  const digit = parseInt(input[i], 10);
  const soulmate = parseInt(input[i + input.length / 2], 10);
  if (digit === soulmate) {
    sum2 += digit + soulmate;
  }
}

console.log(`output part 2: ${sum2}`);
