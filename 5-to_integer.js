let number = process.argv[2];

number = parseInt(number);

if(number){
    console.log("My number: ", number);
} else {
    console.log("Not a number");
}