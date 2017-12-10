// Generated from src/day9/antlr/Stream.g4 by ANTLR 4.6-SNAPSHOT


import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException';
import { NotNull } from 'antlr4ts/Decorators';
import { NoViableAltException } from 'antlr4ts/NoViableAltException';
import { Override } from 'antlr4ts/Decorators';
import { Parser } from 'antlr4ts/Parser';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator';
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';
import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';
import { RecognitionException } from 'antlr4ts/RecognitionException';
import { RuleContext } from 'antlr4ts/RuleContext';
import { RuleVersion } from 'antlr4ts/RuleVersion';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { Token } from 'antlr4ts/Token';
import { TokenStream } from 'antlr4ts/TokenStream';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';

import { StreamListener } from './StreamListener';
import { StreamVisitor } from './StreamVisitor';


export class StreamParser extends Parser {
	public static readonly T__0=1;
	public static readonly T__1=2;
	public static readonly T__2=3;
	public static readonly GARBAGE=4;
	public static readonly RULE_item = 0;
	public static readonly RULE_group = 1;
	public static readonly ruleNames: string[] = [
		"item", "group"
	];

	private static readonly _LITERAL_NAMES: (string | undefined)[] = [
		undefined, "'{'", "','", "'}'"
	];
	private static readonly _SYMBOLIC_NAMES: (string | undefined)[] = [
		undefined, undefined, undefined, undefined, "GARBAGE"
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(StreamParser._LITERAL_NAMES, StreamParser._SYMBOLIC_NAMES, []);

	@Override
	@NotNull
	public get vocabulary(): Vocabulary {
		return StreamParser.VOCABULARY;
	}

	@Override
	public get grammarFileName(): string { return "Stream.g4"; }

	@Override
	public get ruleNames(): string[] { return StreamParser.ruleNames; }

	@Override
	public get serializedATN(): string { return StreamParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(StreamParser._ATN, this);
	}
	@RuleVersion(0)
	public item(): ItemContext {
		let _localctx: ItemContext = new ItemContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, StreamParser.RULE_item);
		try {
			this.state = 6;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case StreamParser.T__0:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 4;
				this.group();
				}
				break;
			case StreamParser.GARBAGE:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 5;
				this.match(StreamParser.GARBAGE);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public group(): GroupContext {
		let _localctx: GroupContext = new GroupContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, StreamParser.RULE_group);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 8;
			this.match(StreamParser.T__0);
			this.state = 17;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===StreamParser.T__0 || _la===StreamParser.GARBAGE) {
				{
				this.state = 9;
				this.item();
				this.state = 14;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				while (_la===StreamParser.T__1) {
					{
					{
					this.state = 10;
					this.match(StreamParser.T__1);
					this.state = 11;
					this.item();
					}
					}
					this.state = 16;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				}
				}
			}

			this.state = 19;
			this.match(StreamParser.T__2);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03\x06\x18\x04\x02"+
		"\t\x02\x04\x03\t\x03\x03\x02\x03\x02\x05\x02\t\n\x02\x03\x03\x03\x03\x03"+
		"\x03\x03\x03\x07\x03\x0F\n\x03\f\x03\x0E\x03\x12\v\x03\x05\x03\x14\n\x03"+
		"\x03\x03\x03\x03\x03\x03\x02\x02\x02\x04\x02\x02\x04\x02\x02\x02\x18\x02"+
		"\b\x03\x02\x02\x02\x04\n\x03\x02\x02\x02\x06\t\x05\x04\x03\x02\x07\t\x07"+
		"\x06\x02\x02\b\x06\x03\x02\x02\x02\b\x07\x03\x02\x02\x02\t\x03\x03\x02"+
		"\x02\x02\n\x13\x07\x03\x02\x02\v\x10\x05\x02\x02\x02\f\r\x07\x04\x02\x02"+
		"\r\x0F\x05\x02\x02\x02\x0E\f\x03\x02\x02\x02\x0F\x12\x03\x02\x02\x02\x10"+
		"\x0E\x03\x02\x02\x02\x10\x11\x03\x02\x02\x02\x11\x14\x03\x02\x02\x02\x12"+
		"\x10\x03\x02\x02\x02\x13\v\x03\x02\x02\x02\x13\x14\x03\x02\x02\x02\x14"+
		"\x15\x03\x02\x02\x02\x15\x16\x07\x05\x02\x02\x16\x05\x03\x02\x02\x02\x05"+
		"\b\x10\x13";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!StreamParser.__ATN) {
			StreamParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(StreamParser._serializedATN));
		}

		return StreamParser.__ATN;
	}

}

export class ItemContext extends ParserRuleContext {
	public group(): GroupContext | undefined {
		return this.tryGetRuleContext(0, GroupContext);
	}
	public GARBAGE(): TerminalNode | undefined { return this.tryGetToken(StreamParser.GARBAGE, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return StreamParser.RULE_item; }
	@Override
	public enterRule(listener: StreamListener): void {
		if (listener.enterItem) listener.enterItem(this);
	}
	@Override
	public exitRule(listener: StreamListener): void {
		if (listener.exitItem) listener.exitItem(this);
	}
	@Override
	public accept<Result>(visitor: StreamVisitor<Result>): Result {
		if (visitor.visitItem) return visitor.visitItem(this);
		else return visitor.visitChildren(this);
	}
}


export class GroupContext extends ParserRuleContext {
	public item(): ItemContext[];
	public item(i: number): ItemContext;
	public item(i?: number): ItemContext | ItemContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ItemContext);
		} else {
			return this.getRuleContext(i, ItemContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return StreamParser.RULE_group; }
	@Override
	public enterRule(listener: StreamListener): void {
		if (listener.enterGroup) listener.enterGroup(this);
	}
	@Override
	public exitRule(listener: StreamListener): void {
		if (listener.exitGroup) listener.exitGroup(this);
	}
	@Override
	public accept<Result>(visitor: StreamVisitor<Result>): Result {
		if (visitor.visitGroup) return visitor.visitGroup(this);
		else return visitor.visitChildren(this);
	}
}


