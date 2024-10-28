// expression

1 + 2;

("hello");

// statements

for (let i = 0; i < 10; i++) {
  console.log(i);
}

let age = 10;

let condition = age > 18;

while (age < 18) {
  // while (10 < 18) {
  console.log("under age", age);
  age = age + 1;
}

// operators

let a = 3;

let b = "world";

// console.log(a * b); // uncomment this will return error

Number.isInteger(3);

let name: string | undefined = "chan";

// usage of comparison operator
if (typeof name == "string") {
  console.log(name);
} else {
  console.log("anonymous");
}
