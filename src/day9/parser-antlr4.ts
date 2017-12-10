import { ANTLRInputStream, CommonTokenStream } from "antlr4ts";
import { ParseTreeWalker, ParseTreeListener } from "antlr4ts/tree";

import { IGroup } from "./helper";
import { StreamLexer } from "./antlr/StreamLexer";
import { StreamParser } from "./antlr/StreamParser";
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

  // Visit the parse tree
  const listener = new Listener();
  ParseTreeWalker.DEFAULT.walk(listener as ParseTreeListener, result);

  return {
    kind: "group",
    items: [],
  };
}

class Listener implements StreamListener {
  enterGroup() {

  }

  exitGroup() {

  }

  enterGarbage() {

  }

  exitGarbage() {

  }
}
