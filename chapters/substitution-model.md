```ts
let a = 10;

let b = a + 12;

let c = a * b + 100;
// let c = (a * b) + 100
// let d = a * (b + 100)
```

This can be calculate with substitution model.

```ts
let a = 10;
let b = a + 12;
// substitute a with the value `10`
// let b = 10 + 12;
// let b = 22;

let c = a * b + c;
// substitute a with the value `10`
// let c = 10 * b + 100;
// substitute b with the value of `22`
// let  c = 100 + 10 * 22;
// let c = 100 * (10 * 22)
// let c = 320;
```
