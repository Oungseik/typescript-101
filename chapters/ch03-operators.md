# Expressions, Statements and Operators

- Expression is calculation which return a value after run.
- Statement is a chunk of code which does not return a value run.
- Operators are just like mathematical Operators, which operate on a value.

## Expression

**operate** -> **operation** -> **operator**

`1 + 2`

`1` and `2` are _operands_. `+` is _operator_. The whole `1 + 2` is expression which return `3`.

`"hello"`

---

## Statements

- variable declaration. Eg, `let a;`, `let name: string;`
- variable initialization. Eg: `let a = 3;`, `let name: string = "chan"`, `const age = 25;`
- `if` statements
- `for` and `while` loop
- `switch` statements

```ts
for (let i = 0; i < 10; i++) {
  // do something
}

let age = 10;
while (age < 18) {
  // do something
  // *increase the age
}

let name = "chan";

switch (name) {
  case "chan":
    // do something;
    break;
  case "other":
    // do something
    break;
}
```

---

## Operators

They includes

1. _Arithmetic Operators_ `+`, `-`, `*`, `%`

2. _Logical Operators_ return Boolean, equal operator `==`, less than `<`, greater than `>`, greater than equal `>=`, less than equal `<=`, strictly equal operator `===`. Mostly operate on a _Boolean_ value. Logical AND `&&`, logical OR, `||`, logical NOT `!`. Mostly use with Comparison operators.

3. _Bitwise operators_, eg. left shift `>>`, right shift `<<`, bitwise not `~` normally you don't need to learn this if you are programming high level programs.

In order to operate with an operator, you need one or more values, which is operands.
You also need to know the type of operands.

Why?

For example, you can multiply two number `10 * 20` which returns a number `200`, but it doesn't make sense multiplying two string `"hello" * "world"`
Similarly, you `"hello".toUpperCase()` is make sense but, `3.toUpperCase()` doesn't make sense.

In Javascript, the interpreter doesn't know about the type, but you need to care about the type.

```js
let a = 10;
let b = "world";

console.log(a * b);
```

This doesn't seem problem in a small program, but when the program get large and large, you can't keep track the variable and it's type in our head.

Each type have associated operator.

For number.

- `+` - addition
- `-` - substraction
- `*` - multiplication
- `%` - division
- `Number.<method>`

You can consider _pure functions_ as an operator. They are just _prefix operator_, while symbols are _infix operators_

for example `1 + 2` is the same as `add(1, 2)`

Usage of Comparison operators

In a scenario, let says in a bank, if we know the name, we call the name, if we don't know the name we call "unknown customer"

```ts
let name: string | undefined = "chan";

if (typeof name == "string") {
  console.log(name);
} else {
  console.log("anonymous");
}
```

For example, in a bar, we only allow person whose age is greater than 18.

```ts
let age: number = 10;

if (age > 18) {
  console.log("you're allowed");
} else {
  console.log("You're not allowed!");
}
```

Usage of logical operator

Let says, you program a automatic open-close umbrella system, If rainy, open the umbrella, else close it.

```ts
let isRainy: boolean = true;

if (!isRainy) {
  // run the code to close the umbrella
} else {
  // run the code to open the umbrella
}

// You can improve this like this
```
