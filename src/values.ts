// Strings

"Mi Chan Ei Mon";
let name = "Mi Chan Ei Mon";
let anotherName: string = "Saru";
let moreAnotherName: string = `baka`;

// 'Jin San'
// "Mi Chan Ei Mon's Jin San-"

// numbers
1;
-1;

1.2;
-1.2;

Infinity;
-Infinity;

NaN;

let age = 25;
let anotherAge: number = 26;

// boolean
true;
false;

let fool = true;
let notFool: boolean = false;

// type convertion

String(true); // "true"
String(123); // "123"

Number("123"); // 123
Number("hello"); // NaN
Number(true); // 1
Number(false); // 0

Boolean(""); // false
Boolean("hello"); // true
Boolean(0); // false
Boolean(1214); // true
Boolean(NaN); // false
Boolean(true); // true
Boolean(false); // false

undefined;
null;

let noName: undefined;
let nullName = null;
let nullName1: null = null;

// optional value (the value or undefined)

let money: number | undefined = 1000;

let certificate: string | boolean = true;

certificate = "exist";

certificate = 3;
