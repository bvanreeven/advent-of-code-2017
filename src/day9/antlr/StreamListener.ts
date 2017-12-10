// Generated from src/day9/antlr/Stream.g4 by ANTLR 4.6-SNAPSHOT


import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';

import { ItemContext } from './StreamParser';
import { GroupContext } from './StreamParser';


/**
 * This interface defines a complete listener for a parse tree produced by
 * `StreamParser`.
 */
export interface StreamListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `StreamParser.item`.
	 * @param ctx the parse tree
	 */
	enterItem?: (ctx: ItemContext) => void;
	/**
	 * Exit a parse tree produced by `StreamParser.item`.
	 * @param ctx the parse tree
	 */
	exitItem?: (ctx: ItemContext) => void;

	/**
	 * Enter a parse tree produced by `StreamParser.group`.
	 * @param ctx the parse tree
	 */
	enterGroup?: (ctx: GroupContext) => void;
	/**
	 * Exit a parse tree produced by `StreamParser.group`.
	 * @param ctx the parse tree
	 */
	exitGroup?: (ctx: GroupContext) => void;
}

