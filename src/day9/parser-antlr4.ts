import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";
import { ParseTreeWalker, ParseTreeListener } from "antlr4ts/tree";

import { IGroup } from "./helper";
import { StreamLexer } from "./antlr/StreamLexer";
import { StreamParser, GroupContext } from "./antlr/StreamParser";
import { StreamVisitor } from "./antlr/StreamVisitor";
import { StreamListener } from "./antlr/StreamListener";

export function parse(input: string): IGroup {
  // Create the lexer and parser
  const inputStream = new ANTLRInputStream(input);
  const lexer = new StreamLexer(inputStream);
  const tokenStream = new CommonTokenStream(lexer);
  const parser = new StreamParser(tokenStream);

  // Parse the input
  const result = parser.group();

  return buildGroup(result);
}

function buildGroup(groupContext: GroupContext) {
  const result: IGroup = {
    kind: "group",
    items: [],
  };

  for (const item of groupContext.item()) {
    if (item.group()) {
      result.items.push(buildGroup(item.group()!));
    } else {
      result.items.push({
        kind: "garbage",
        contents: item.GARBAGE()!.text.slice(1, -1).replace(/!./g, ""),
      });
    }
  }

  return result;
}
