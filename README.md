# JS-Fundamentals

This repository contains a collection of JavaScript scripts I wrote while learning the fundamentals of the language. Each file focuses on a specific concept such as variables, conditionals, loops, and functions.

---

## 📂 Project Overview

This project is part of my journey into JavaScript programming. I created it to practice and solidify my understanding of the language's basics through simple, practical exercises.

---

## 🧠 Lessons Learned

Throughout this project, I learned:

* How to declare and use `const`, `let`, and `if-else` statements
* How to write and run JavaScript scripts using Node.js
* How loops (`for`) work and how to use them to iterate over values
* The importance of writing clean and readable code
* How to use `console.log()` for output and debugging
* How to handle command line arguments using `process.argv`
* How to check argument count and values to control output
* How to concatenate arguments and form sentences dynamically

---

## 📄 Sample Script: `0-javascript_is_amazing.js`

**Task:** Write a script that prints “JavaScript is amazing”

```javascript
const myVar = "JavaScript is amazing";
console.log(myVar);
```

**Output:**

```
JavaScript is amazing
```

---

## 📄 Sample Script: `1-multi_languages.js`

**Task:** Write a script that prints 3 lines:

```javascript
console.log("C is fun");
console.log("Python is cool");
console.log("JavaScript is amazing");
```

**Output:**

```
C is fun
Python is cool
JavaScript is amazing
```

---

## 📄 Sample Script: `2-arguments.js`

**Task:** Print a message depending on the number of arguments passed:

```javascript
const argvCount = process.argv.length - 2;

if(argvCount === 0){
    console.log("No argument");
} else if(argvCount === 1){
    console.log("Argument found");
} else {
    console.log("Arguments found");
}
```

---

## 📄 Sample Script: `3-value_argument.js`

**Task:** Print the first argument passed, or “No argument” if none:

```javascript
const argv = process.argv[2];

if(argv){
    console.log(`${argv}`);
} else {
    console.log("No argument");
}
```

---

## 📄 Sample Script: `4-concat.js`

**Task:** Print two arguments passed in the format "<arg1> is <arg2>":

```javascript
const program = process.argv[2];
const adverb = process.argv[3];

const fullSentence = `${program} is ${adverb}`;
console.log(fullSentence);
```

**Examples:**

```
$ node 4-concat.js c cool
c is cool

$ node 4-concat.js c
c is undefined

$ node 4-concat.js
undefined is undefined
```

---

## 📄 Sample Script: `5-to_integer.js`

**Task:** Write a script that prints "My number: <first argument converted to integer>" if it can be converted. Otherwise, print "Not a number".

```javascript
let number = process.argv[2];

number = parseInt(number);

if (number) {
    console.log("My number:", number);
} else {
    console.log("Not a number");
}
```

**Example Outputs:**
```
$ node 5-to_integer.js
Not a number

$ node 5-to_integer.js 89
My number: 89

$ node 5-to_integer.js "89"
My number: 89

$ node 5-to_integer.js School
Not a number
```

**Lesson Learned:**
- How to convert command line arguments to integers using `parseInt`
- Practiced basic input checking in JavaScript
- Reinforced using conditionals to control script behavior

---

## 📄 Sample Script: `6-multi_languages_loop.js`

**Task:** Write a script that prints 3 lines using an array and a loop:

- “C is fun”
- “Python is cool”
- “JavaScript is amazing”

**Constraints:**
- Must use a loop (like `for` or `while`)
- Must use only one `console.log` per line
- Cannot use `var` or `if/else`

```javascript
const sentence = ["C is fun", "Python is cool", "JavaScript is amazing"];

for (let i = 0; i < sentence.length; i++) {
  console.log(sentence[i]);
}

**Example Outputs:**
```
$ node 6-multi_languages_loop.js 
C is fun
Python is cool
JavaScript is amazing

---

## 📄 Sample Script: `7-multi_c.js`

**Task:** Write a script that prints x times “C is fun”

**Rules:**
- The first argument passed to the script determines how many times to print.
- If it can’t be converted to an integer, print “Missing number of occurrences”.
- Use a loop (e.g., `while` or `for`).
- Only two `console.log()` allowed.
- No `var`.

```javascript
const test = parseInt(process.argv[2]);

if (!isNaN(test)) {
  let i = 0;
  while (i < test) {
    console.log("C is fun");
    i++;
  }
} else {
  console.log("Missing number of occurrences");
}
```

**Example:**
```
$ node 7-multi_c.js 3
C is fun
C is fun
C is fun

$ node 7-multi_c.js
Missing number of occurrences
```

---

## 📄 Sample Script: `8-square.js`

**Task:** Write a script that prints a square of size `x`, using the character `X`

**Constraints:**
- The first argument is the size of the square
- If it’s not a number, print: `Missing size`
- Must use only one character per cell: `X`
- Use a loop (`for`, `while`, etc.)
- Use only two `console.log` statements
- Do **not** use `var`

```javascript
const args = parseInt(process.argv[2]);

if (!isNaN(args)) {
    for (let i = 0; i < args; i++) {
        console.log("X".repeat(args));
    }
} else {
    console.log("Missing size");
}
```

### 🔍 Example
```bash
$ node 8-square.js
Missing size

$ node 8-square.js School
Missing size

$ node 8-square.js 2
XX
XX

$ node 8-square.js 6
XXXXXX
XXXXXX
XXXXXX
XXXXXX
XXXXXX
XXXXXX
```

---

## 📄 Sample Script: `9-add.js`

This script prints the addition of 2 integers.

### Description:
- The first argument is the first integer.
- The second argument is the second integer.
- It defines a function `add(a, b)` that returns the result of `a + b`.
- It converts both arguments to numbers before passing them to the function.
- If one or both arguments are missing or cannot be converted to a number, the result will be `NaN`.

#### Script:
```javascript

function add(a, b) {
  return a + b;
}

const argument = process.argv;

const calc = add(Number(argument[2]), Number(argument[3]));
console.log(calc);
```

#### Usage:
```bash
$ node 9-add.js <number1> <number2>
```

#### Example:
```bash
$ node 9-add.js
NaN

$ node 9-add.js 1
NaN

$ node 9-add.js 1 7
8

$ node 9-add.js 13 89
102
```
---

## 📄 Sample Script: `10-factorial.js`

**Task:** Write a script that computes and prints a factorial.

**Requirements:**
- The script should receive the first argument from the command line.
- If no argument is passed or it's not a number, treat it as 0.
- Factorial of 0 is 1.
- Must define a function with this prototype: `function factorial(n)`
- Use `console.log(...)` to print all output
- Do not use `var`

```javascript

function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
}

const argument = Number(process.argv[2]);

const number = isNaN(argument) ? 0 : argument;

const result = factorial(number);
console.log(result);
```

**Examples:**
```bash
$ node 10-factorial.js 2
2

$ node 10-factorial.js 5
120

$ node 10-factorial.js
1
```

---

## 🚀 Getting Started

To run the scripts in this repository:

1. Make sure [Node.js](https://nodejs.org/) is installed.
2. Navigate to the project folder.
3. Run any script using:

```bash
node filename.js
```

Example:

```bash
node 1-multi_languages.js
```

---

## 📌 Status

This project is ongoing as I continue learning more advanced concepts in JavaScript.
