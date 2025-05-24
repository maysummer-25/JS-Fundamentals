function add(a, b) {
    return a + b;
}

argument = process.argv;

const calc = add(Number(argument[2]), Number(argument[3]));
console.log(calc);