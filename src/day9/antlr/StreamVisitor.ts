// Generated from src/day9/antlr/Stream.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';

import { ItemContext } from './StreamParser';
import { GroupContext } from './StreamParser';


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `StreamParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface StreamVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `StreamParser.item`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitItem?: (ctx: ItemContext) => Result;

	/**
	 * Visit a parse tree produced by `StreamParser.group`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitGroup?: (ctx: GroupContext) => Result;
}

