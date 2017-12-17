import { knotHash } from "./knothash";

const input = "vbqugkhl";
const testInput = "flqrgnkx";

const hashes = [...Array(128).keys()].map(i => knotHash(`${input}-${i}`));
const bitMap = hashes.map(hash => {
  const bitString = [...hash].map(d => ("0000" + parseInt(d, 16).toString(2)).slice(-4)).join("");
  const bits = [...bitString].map(Number);
  return bits;
});

let numUsedBlocks = 0;
for (let i = 0; i < 128; i++) {
  numUsedBlocks += bitMap[i].filter(b => b === 1).length;
}
console.log(`output (part 1): ${numUsedBlocks}`);

let currentRegion = 2;

interface ILocation {
  x: number;
  y: number;
}

function* getAdjacentLocations(loc: ILocation) {
  if (loc.x > 0) { yield { x: loc.x - 1, y: loc.y }; }
  if (loc.x < 127) { yield { x: loc.x + 1, y: loc.y }; }
  if (loc.y > 0) { yield { x: loc.x, y: loc.y - 1 }; }
  if (loc.y < 127) { yield { x: loc.x, y: loc.y + 1 }; }
}

function markRegion(loc: ILocation) {
  bitMap[loc.x][loc.y] = currentRegion;
  for (const adj of getAdjacentLocations(loc)) {
    if (bitMap[adj.x][adj.y] === 1) {
      markRegion(adj);
    }
  }
}

for (let x = 0; x < 128; x++) {
  for (let y = 0; y < 128; y++) {
    if (bitMap[x][y] === 1) {
      markRegion({ x, y });
      currentRegion++;
    }
  }
}

console.log(`output (part 2): ${currentRegion - 2}`);
