function doSomething(callback) {
    setTimeout(function () {
        console.log("First Operation");
        callback();
    }, 1000);
}

function doAnotherThing(callback) {
    setTimeout(function () {
        console.log("Second Operation");
        callback();
    }, 1000);
}

function doYetAnotherThing(callback) {
    setTimeout(function () {
        console.log("Third Operation");
        callback();
    }, 1000);
}


doSomething(function () {
    doAnotherThing(function () {
        doYetAnotherThing(function () {
            console.log("All Operations Are Complete.");
        });
    });
}); 
