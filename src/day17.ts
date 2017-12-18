import { range } from "./util";

const input = 370;
const testInput = 3;

class CircularBuffer {
  private array: number[] = [0];
  private currentPosition: number = 0;

  public stepForward(steps: number) {
    this.currentPosition = (this.currentPosition + steps) % this.array.length;
  }

  public insert(value: number) {
    this.currentPosition++;
    this.array.splice(this.currentPosition, 0, value);
  }

  public getValueAtCurrentPosition() {
    return this.array[this.currentPosition];
  }
}

class Spinlock {
  private buffer: CircularBuffer = new CircularBuffer();

  constructor(private steps: number) { }

  public spin(maxValue: number) {
    for (const i of range(1, maxValue)) {
      this.buffer.stepForward(this.steps);
      this.buffer.insert(i);
    }
  }

  public getValueAfterCurrentPosition() {
    this.buffer.stepForward(1);
    return this.buffer.getValueAtCurrentPosition();
  }
}

(() => {
  const spinlock = new Spinlock(input);
  spinlock.spin(2017);
  const result = spinlock.getValueAfterCurrentPosition();

  console.log(`output (part 1): ${result}`);
})();

class FastSpinlock {
  private zeroPosition: number = 0;
  private currentPosition: number = 0;
  private valueAfterZero: number = 0;
  private numValues: number = 1;

  constructor(private steps: number) { }

  public spin(maxValue: number) {
    for (const i of range(1, maxValue)) {
      this.currentPosition = (this.currentPosition + this.steps) % this.numValues;

      this.currentPosition++;
      if (this.currentPosition === this.zeroPosition + 1) {
        this.valueAfterZero = i;
      } else if (this.currentPosition <= this.zeroPosition) {
        this.zeroPosition++;
      }

      this.numValues++;
    }
  }

  public getValueAfterZero() {
    return this.valueAfterZero;
  }
}

(() => {
  const spinlock = new FastSpinlock(input);
  spinlock.spin(50000000);
  const result = spinlock.getValueAfterZero();

  console.log(`output (part 2): ${result}`);
})();
