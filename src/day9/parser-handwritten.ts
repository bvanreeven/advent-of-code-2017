import { IGroup, IGarbage, Item } from "./helper";

interface IParseState { input: string; index: number; }

let debugMode = false;

function printState(title: string, state: IParseState) {
  if (!debugMode) { return; }
  console.log(title);
  let result = state.input + "\n";
  for (let i = 0; i < state.index; i++) {
    result += " ";
  }
  result += "^";
  console.log(result);
}

function expect(state: IParseState, token: string) {
  const textToMatch = state.input.slice(state.index, state.index + token.length);
  if (textToMatch !== token) {
    throw new Error(`Expected '${token}' but got '${textToMatch}'`);
  }
  state.index += token.length;
}

function nextChar(state: IParseState) {
  return state.input[state.index];
}

function parseItem(state: IParseState): Item {
  printState("enter parseItem", state);
  if (nextChar(state) === "{") {
    return parseGroup(state);
  }
  if (nextChar(state) === "<") {
    return parseGarbage(state);
  }
  throw new Error(`Unexpected input '${nextChar(state)}', expected either '{' or '<'`);
}

function parseGroup(state: IParseState): IGroup {
  printState("enter parseGroup", state);
  const result: IGroup = { kind: "group", items: [] };

  expect(state, "{");

  while (nextChar(state) !== "}") {
    result.items.push(parseItem(state));
    if (nextChar(state) === ",") {
      state.index++;
    }
  }

  expect(state, "}");

  return result;
}

function parseGarbage(state: IParseState): IGarbage {
  printState("enter parseGarbage", state);
  const result: IGarbage = { kind: "garbage", contents: "" };

  expect(state, "<");
  const contentsStartIndex = state.index;

  while (nextChar(state) !== ">") {
    if (nextChar(state) === "!") {
      state.index += 2; // ignore '!' and the character after it
    } else {
      result.contents += nextChar(state);
      state.index++;
    }
  }

  // result.contents = state.input.slice(contentsStartIndex, state.index);

  expect(state, ">");

  return result;
}

export function parse(input: string): IGroup {
  return parseGroup({ input, index: 0 });
}
