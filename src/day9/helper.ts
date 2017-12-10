export type Item = IGroup | IGarbage;
export interface IGroup { kind: "group"; items: Item[]; }
export interface IGarbage { kind: "garbage"; contents: string; }

export function getScore(group: IGroup, groupScore = 1) {
  let score = groupScore;

  for (const item of group.items) {
    if (item.kind === "group") {
      score += getScore(item, groupScore + 1);
    }
  }

  return score;
}

export function countCharacters(group: IGroup) {
  let count = 0;

  for (const item of group.items) {
    if (item.kind === "group") {
      count += countCharacters(item);
    } else if (item.kind === "garbage") {
      count += item.contents.length;
    }
  }

  return count;
}
