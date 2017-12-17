const useTestInput = false;
const [seedA, seedB] = useTestInput ? [65, 8921] : [679, 771];

function* generator(factor: number, filter: number, seed: number) {
  let value = seed;
  while (true) {
    value = value * factor % 2147483647;

    if (!filter || (value & filter) === 0) {
      yield value;
    }
  }
}

(() => {

  const generatorA = generator(16807, 0, seedA);
  const generatorB = generator(48271, 0, seedB);

  let matchCount = 0;

  for (let i = 0; i < 40000000; i++) {
    const valueA = generatorA.next().value;
    const valueB = generatorB.next().value;

    if ((valueA & 65535) === (valueB & 65535)) {
      matchCount++;
    }
  }

  console.log(`output (part 1): ${matchCount}`);

})();

(() => {

  const generatorA = generator(16807, 3, seedA);
  const generatorB = generator(48271, 7, seedB);

  let matchCount = 0;

  for (let i = 0; i < 5000000; i++) {
    const valueA = generatorA.next().value;
    const valueB = generatorB.next().value;

    if ((valueA & 65535) === (valueB & 65535)) {
      matchCount++;
    }
  }

  console.log(`output (part 2): ${matchCount}`);

})();
