const argvCount = process.argv.length - 2;

if(argvCount === 0){
    console.log("No argument");
} else if(argvCount === 1){
    console.log("Argument found");
} else {
    console.log("Arguments found");
}

