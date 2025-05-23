const test = parseInt(process.argv[2]);

if (!isNaN(test)) {
    let i = 0
    while (i < test) {
        console.log("C is fun");
        i++;
    }
} else {
    console.log("Missing number of occurrences");
}