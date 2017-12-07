import * as fs from "fs";

const input = fs.readFileSync("input/day4.txt", { encoding: "utf8" });
const passphrases = input.split("\n").map(row => row.split(" "));

function isValid(passphrase: string[]): boolean {
  const words: { [word: string]: boolean } = {};
  for (const word of passphrase) {
    if (words[word]) {
      return false;
    }
    words[word] = true;
  }
  return true;
}

console.log(`output part 1: ${passphrases.filter(p => isValid(p)).length}`);

function isValid2(passphrase: string[]): boolean {
  const words: { [word: string]: boolean } = {};
  for (const word of passphrase) {
    const canonicalWord = word.split("").sort().join("");
    if (words[canonicalWord]) {
      return false;
    }
    words[canonicalWord] = true;
  }
  return true;
}

console.log(`output part 2: ${passphrases.filter(p => isValid2(p)).length}`);
