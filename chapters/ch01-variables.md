# Variables

> [!Tip]
> `<>` text inside this is mendatory
> `[]` text inside this is optional
> `a | b` this means the value `a` or `b`

To refer to a value, with ease, without reduntant.

Format 

```
<let | const> <name_of_the_variable> = <value> [;]

or 

<let | const> <name_of_the_variable> [: type_of_the_variable] = <value> [;]


```

```ts

let  dog = "animal with four legs and two ear, which bark";
const  dog = "animal with four legs and two ear, which bark";
```

How should we name variable?

1. name must be descriptive
2. variable should be in **carmalCase**
3. constant should be in all **CAPITAL_LETTER**

```ts
const myName = "Mi Chan Ei Mon";

// should not
const ginger = "Jin San";


const PI = 3.14;

const ABSOLUTE_ZERO = -275;

const HOURS_IN_A_DAY = 24;
```

## Variable assignment


```ts
let age = 25;

age = age + 1;


const name = "Saru";
name = "Chan Ei Mon";
```
