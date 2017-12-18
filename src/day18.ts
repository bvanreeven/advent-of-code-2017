import * as fs from "fs";

const useTestInput = false;

const input = fs.readFileSync("input/day18.txt", { encoding: "utf8" });

const testInput = `
set a 1
add a 2
mul a a
mod a 5
snd a
set a 0
rcv a
jgz a -1
set a 1
jgz a -2
`.trim();

interface IInstruction {
  opcode: string;
  operands: Array<string | number>;
}

function toOperand(text: string) {
  const value = parseInt(text, 10);
  return isNaN(value) ? text : value;
}

const instructions = (useTestInput ? testInput : input).split("\n").map(line => line.split(" ")).map(parts => ({
  opcode: parts[0],
  operands: parts.slice(1).map(toOperand),
}));

let instructionPointer = 0;
let soundFrequency = 0;
const registers: { [name: string]: number } = {};

function getValue(operand: number | string) {
  if (typeof operand === "number") {
    return operand;
  }

  return registers[operand] || 0;
}

function setValue(register: string, value: number) {
  registers[register] = value;
}

const interpreter: { [opcode: string]: (operands: Array<string | number>) => void } = {
  snd: operands => soundFrequency = getValue(operands[0]),
  set: operands => setValue(operands[0] as string, getValue(operands[1])),
  add: operands => setValue(operands[0] as string, getValue(operands[0] as string) + getValue(operands[1])),
  mul: operands => setValue(operands[0] as string, getValue(operands[0] as string) * getValue(operands[1])),
  mod: operands => setValue(operands[0] as string, getValue(operands[0] as string) % getValue(operands[1])),
  rcv: operands => { if (getValue(operands[0]) !== 0) { throw { name: "received" }; } },
  jgz: operands => { if (getValue(operands[0]) > 0) { throw { name: "jump", value: getValue(operands[1]) }; } },
};

while (true) {
  try {
    const { opcode, operands } = instructions[instructionPointer];
    interpreter[opcode](operands);
    instructionPointer++;
  } catch (ex) {
    if (ex.name === "received") {
      break;
    } else if (ex.name === "jump") {
      instructionPointer += ex.value;
    }
  }
}

console.log(`output (part 1): ${soundFrequency}`);
