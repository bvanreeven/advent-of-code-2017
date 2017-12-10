import { IGroup, IGarbage, Item } from "./helper";

import * as Parsimmon from "parsimmon";

const language = Parsimmon.createLanguage/*<{
  Item: Item;
  Group: IGroup;
  Garbage: IGarbage;
}>*/({
  Item: r => Parsimmon.alt(r!.Group, r!.Garbage),
  Group: r => Parsimmon.string("{")
    .then(Parsimmon.sepBy(r!.Item, Parsimmon.string(",")))
    .skip(Parsimmon.string("}"))
    .map(items => ({ kind: "group", items } as IGroup)),
  Garbage: () => Parsimmon.string("<")
    .then(Parsimmon.alt(Parsimmon.string("!").then(Parsimmon.any).result(""), Parsimmon.noneOf(">")).many())
    .skip(Parsimmon.string(">"))
    .map(parts => ({ kind: "garbage", contents: parts.join("") } as IGarbage)),
});

export function parse(input: string): IGroup {
  return language.Group.tryParse(input);
}
