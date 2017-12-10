grammar Stream;

item: group | GARBAGE;

group: '{' (item (',' item)*)? '}';

GARBAGE: '<' ('!' . | ~ [!>])* '>';
