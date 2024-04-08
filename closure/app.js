function main() {
    let name = "rohan patel";

    function sayMyName() {
        console.log(name);
    }

    sayMyName();
}

main();


function makefun(names) {
    function displayName() {
        console.log(names)
    }

    return displayName()
}

let consoleName = makefun("done");