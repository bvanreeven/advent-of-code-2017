// Generated from src/day9/antlr/Stream.g4 by ANTLR 4.6-SNAPSHOT


import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { CharStream } from 'antlr4ts/CharStream';
import { Lexer } from 'antlr4ts/Lexer';
import { LexerATNSimulator } from 'antlr4ts/atn/LexerATNSimulator';
import { NotNull } from 'antlr4ts/Decorators';
import { Override } from 'antlr4ts/Decorators';
import { RuleContext } from 'antlr4ts/RuleContext';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';


export class StreamLexer extends Lexer {
	public static readonly T__0=1;
	public static readonly T__1=2;
	public static readonly T__2=3;
	public static readonly GARBAGE=4;
	public static readonly modeNames: string[] = [
		"DEFAULT_MODE"
	];

	public static readonly ruleNames: string[] = [
		"T__0", "T__1", "T__2", "GARBAGE"
	];

	private static readonly _LITERAL_NAMES: (string | undefined)[] = [
		undefined, "'{'", "','", "'}'"
	];
	private static readonly _SYMBOLIC_NAMES: (string | undefined)[] = [
		undefined, undefined, undefined, undefined, "GARBAGE"
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(StreamLexer._LITERAL_NAMES, StreamLexer._SYMBOLIC_NAMES, []);

	@Override
	@NotNull
	public get vocabulary(): Vocabulary {
		return StreamLexer.VOCABULARY;
	}


	constructor(input: CharStream) {
		super(input);
		this._interp = new LexerATNSimulator(StreamLexer._ATN, this);
	}

	@Override
	public get grammarFileName(): string { return "Stream.g4"; }

	@Override
	public get ruleNames(): string[] { return StreamLexer.ruleNames; }

	@Override
	public get serializedATN(): string { return StreamLexer._serializedATN; }

	@Override
	public get modeNames(): string[] { return StreamLexer.modeNames; }

	public static readonly _serializedATN: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x02\x06\x1C\b\x01"+
		"\x04\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x03\x02\x03\x02"+
		"\x03\x03\x03\x03\x03\x04\x03\x04\x03\x05\x03\x05\x03\x05\x03\x05\x07\x05"+
		"\x16\n\x05\f\x05\x0E\x05\x19\v\x05\x03\x05\x03\x05\x02\x02\x02\x06\x03"+
		"\x02\x03\x05\x02\x04\x07\x02\x05\t\x02\x06\x03\x02\x03\x04\x02##@@\x1D"+
		"\x02\x03\x03\x02\x02\x02\x02\x05\x03\x02\x02\x02\x02\x07\x03\x02\x02\x02"+
		"\x02\t\x03\x02\x02\x02\x03\v\x03\x02\x02\x02\x05\r\x03\x02\x02\x02\x07"+
		"\x0F\x03\x02\x02\x02\t\x11\x03\x02\x02\x02\v\f\x07}\x02\x02\f\x04\x03"+
		"\x02\x02\x02\r\x0E\x07.\x02\x02\x0E\x06\x03\x02\x02\x02\x0F\x10\x07\x7F"+
		"\x02\x02\x10\b\x03\x02\x02\x02\x11\x17\x07>\x02\x02\x12\x13\x07#\x02\x02"+
		"\x13\x16\v\x02\x02\x02\x14\x16\n\x02\x02\x02\x15\x12\x03\x02\x02\x02\x15"+
		"\x14\x03\x02\x02\x02\x16\x19\x03\x02\x02\x02\x17\x15\x03\x02\x02\x02\x17"+
		"\x18\x03\x02\x02\x02\x18\x1A\x03\x02\x02\x02\x19\x17\x03\x02\x02\x02\x1A"+
		"\x1B\x07@\x02\x02\x1B\n\x03\x02\x02\x02\x05\x02\x15\x17\x02";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!StreamLexer.__ATN) {
			StreamLexer.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(StreamLexer._serializedATN));
		}

		return StreamLexer.__ATN;
	}

}

