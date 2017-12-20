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

class Program {
  public sendValue: (value: number) => void = null!;
  public queue: number[] = [];
  private registers: { [name: string]: number };
  private instructionPointer: number = 0;

  private interpreter: { [opcode: string]: (operands: Array<string | number>) => void } = {
    snd: operands => this.sendValue(this.read(operands[0])),
    set: operands => this.write(operands[0] as string, this.read(operands[1])),
    add: operands => this.write(operands[0] as string, this.read(operands[0] as string) + this.read(operands[1])),
    mul: operands => this.write(operands[0] as string, this.read(operands[0] as string) * this.read(operands[1])),
    mod: operands => this.write(operands[0] as string, this.read(operands[0] as string) % this.read(operands[1])),
    rcv: operands => {
      if (this.queue.length === 0) { throw { name: "receive" }; }
      this.write(operands[0] as string, this.queue.shift()!);
    },
    jgz: operands => { if (this.read(operands[0]) > 0) { throw { name: "jump", value: this.read(operands[1]) }; } },
  };

  constructor(programID: number) {
    this.registers = { p: programID };
  }

  public execute() {
    while (true) {
      try {
        const { opcode, operands } = instructions[this.instructionPointer];
        this.interpreter[opcode](operands);
        this.instructionPointer++;
      } catch (ex) {
        if (ex.name === "receive") {
          break;
        } else if (ex.name === "jump") {
          this.instructionPointer += ex.value;
        }
      }
    }
  }

  private read(operand: number | string) {
    if (typeof operand === "number") {
      return operand;
    }

    return this.registers[operand] || 0;
  }

  private write(register: string, value: number) {
    this.registers[register] = value;
  }
}

const program0 = new Program(0);
const program1 = new Program(1);

let valueSentByProgram0 = 0;
let numValuesSentByProgram1 = 0;

program0.sendValue = v => { valueSentByProgram0 = v; program1.queue.push(v); };
program1.sendValue = v => { numValuesSentByProgram1++; program0.queue.push(v); };

program0.execute();

console.log(`output (part 1): ${valueSentByProgram0}`);

while (true) {
  program1.execute();
  program0.execute();

  if (program0.queue.length === 0 && program1.queue.length === 0) {
    break;
  }
}

console.log(`output (part 2): ${numValuesSentByProgram1}`);
