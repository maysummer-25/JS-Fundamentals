const args = parseInt(process.argv[2]);

if (!isNaN(args)) {
    for (let i = 0; i < args; i++) {
        console.log("X".repeat(args))
    }
} else {
    console.log("Missing size");
}