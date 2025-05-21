# JS-Fundamentals

This repository contains a collection of JavaScript scripts I wrote while learning the fundamentals of the language. Each file focuses on a specific concept such as variables, conditionals, loops, and functions.

---

## 📂 Project Overview

This project is part of my journey into JavaScript programming. I created it to practice and solidify my understanding of the language's basics through simple, practical exercises.

---

## 🧠 Lessons Learned

Throughout this project, I learned:

- How to declare and use `const`, `let`, and `if-else` statements
- How to write and run JavaScript scripts using Node.js
- How loops (`for`) work and how to use them to iterate over values
- How to use `process.argv` to access command-line arguments
- The importance of writing clean and readable code
- How to use `console.log()` for output and debugging

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

**Task:** Write a script that checks how many arguments are passed:

```javascript
const argvCount = process.argv.length - 2;

if (argvCount === 0) {
    console.log("No argument");
} else if (argvCount === 1) {
    console.log("Argument found");
} else {
    console.log("Arguments found");
}
```

**Output Example:**
```bash
$ node 2-arguments.js 
No argument
$ node 2-arguments.js Hello
Argument found
$ node 2-arguments.js Hello World
Arguments found
```

---

## 📄 Sample Script: `3-value_argument.js`

**Task:** Write a script that prints the first argument passed to it. If no arguments are passed, print “No argument”.

```javascript
const argv = process.argv[2];

if (argv) {
    console.log(`${argv}`);
} else {
    console.log("No argument");
}
```

**Output Example:**
```bash
$ node 3-value_argument.js 
No argument
$ node 3-value_argument.js School
School
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
