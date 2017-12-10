import * as fs from "fs";

const testInput = `b inc 5 if a > 1
a inc 1 if b < 5
c dec -10 if a >= 1
c inc -20 if c == 10`;

// const input = testInput;
const input = fs.readFileSync("input/day8.txt", { encoding: "utf8" });

const registers: { [name: string]: number } = {};

function getValue(register: string): number {
  return registers[register] || 0;
}

function setValue(register: string, value: number) {
  registers[register] = value;
}

function increment(register: string, value: number) {
  setValue(register, getValue(register) + value);
}

function decrement(register: string, value: number) {
  setValue(register, getValue(register) - value);
}

function getMaxValue() {
  return Math.max(...Object.keys(registers).map(getValue));
}

let maxValueForAllStates: number | undefined = undefined!;

for (const line of input.split("\n")) {
  const match = /(\w+) (inc|dec) (-?\d+) if (\w+) (>|>=|<|<=|==|!=) (-?\d+)/.exec(line)!;

  const leftOperand = getValue(match[4]);
  const operator = match[5];
  const rightOperand = match[6];

  if (eval(`${leftOperand} ${operator} ${rightOperand}`)) {
    if (match[2] === "inc") {
      increment(match[1], parseInt(match[3], 10));
    } else {
      decrement(match[1], parseInt(match[3], 10));
    }
  }

  maxValueForAllStates = maxValueForAllStates === undefined
    ? getMaxValue()
    : Math.max(maxValueForAllStates, getMaxValue());
}

const maxValueForFinalState = Math.max(...Object.keys(registers).map(getValue));

console.log(`output part 1: ${maxValueForFinalState}`);

console.log(`output part 2: ${maxValueForAllStates}`);
