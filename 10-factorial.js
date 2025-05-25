function factorial(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n -1);
}

const argument = Number(process.argv[2]);

const number = isNaN(argument) ? 0 : argument;

const result = factorial(number)
console.log(result);