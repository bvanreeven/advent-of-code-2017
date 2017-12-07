import * as fs from "fs";

const input = fs.readFileSync("input/day2.txt", { encoding: "utf8" });
const spreadsheet = input.split("\n").map(row => row.split("\t").map(cell => parseInt(cell, 10)));

let checksum1 = 0;

for (const row of spreadsheet) {
  let minValue = row[0];
  let maxValue = row[0];
  for (const cell of row) {
    minValue = Math.min(minValue, cell);
    maxValue = Math.max(maxValue, cell);
  }
  checksum1 += maxValue - minValue;
}

console.log(`output part 1: ${checksum1}`);

let checksum2 = 0;

for (const row of spreadsheet) {
  const sortedRow = row.slice().sort((x, y) => y - x);

  checksum2 += (() => {
    for (let i = 0; i < sortedRow.length; i++) {
      for (let j = i + 1; j < sortedRow.length; j++) {
        const value = sortedRow[i] / sortedRow[j];
        if (value === Math.floor(value)) {
          return value;
        }
      }
    }
    throw new Error("not found");
  })();
}

console.log(`output part 2: ${checksum2}`);
