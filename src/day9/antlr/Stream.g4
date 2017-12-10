grammar Stream;

item: group | GARBAGE;

group: '{' (item (',' item)*)? '}';

//garbage: '<' (GARBAGE_ESCAPE | GARBAGE_CONTENT)* '>';

//GARBAGE_ESCAPE: '!' .;

//GARBAGE_CONTENT: ~[!>];

GARBAGE: '<' ('!' . | ~[!>])* '>';
