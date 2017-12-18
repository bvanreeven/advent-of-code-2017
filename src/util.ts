/**
 * Returns a range of integers from the specified starting number to (including) the specified ending number.
 * @param start The start of the range, inclusive.
 * @param end The end of the range, inclusive.
 */
export function* range(start: number, end: number) {
  let value = start;
  while (value <= end) {
    yield value;
    value++;
  }
}
