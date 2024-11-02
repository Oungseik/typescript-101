// if else
// for loop
// while loop

let today = new Date().toDateString(); // "Sat Nov 02 2024"
let dayName = today.slice(0, 3); // "Sat"

// mon === Sun
if (dayName === "Sun") {
  console.log("Uh! tomorrow is work day again.");
  // "mon" === "Mon"
} else if (dayName === "Mon") {
  console.log("Ah! shit, here we go again!");
} else if (dayName === "Tue") {
  console.log("What a tough day?");
} else if (dayName === "Wed") {
  console.log("What a tough day?");
} else if (dayName === "Thu") {
  console.log("What a tough day?");
} else if (dayName === "Fri") {
  console.log("TGIF!");
} else {
  console.log("Happy weekend!");
}

// These three are the same
// let i = 0;
// i = i + 1;
// i += 1;
// i++

// let i = 0;
// i = i - 1;
// i -= 1;
// i--

// for loop
// for loop need initial value, condition, increment
// condition is needed to terminate the loop

// do something 10 times. `i++` is the same as `i = i + 1;
// for (let i = 0; i < 10; i++) {
//   console.log(i, "Hi there");
// }

// !( i < 10) is the same as (i >= 10)

// need condition, state, need to change the state
// let i = 0;
// while (i < 10) {
//   console.log(i, "Hi there");
//   i++; // i = i + 1; // i += 1;
// }

// for (let i = 0; i < 10; i += 2) {
//   console.log(i, "Hi there");
// }

// % remainder operator
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.log(i, "is an even number");
  }

  if (i % 2 !== 0) {
    console.log(i, "is an odd number");
  }
}

// for a number less than 10, if a number is divisible by 2, then even number, else odd number
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    console.log(i, "is an even number");
  } else {
    console.log(i, "is an odd number");
  }
}
