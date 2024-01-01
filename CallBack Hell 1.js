function getCheese(callback) {
    setTimeout(() => {
        const cheese = "🧀";
        console.log("Here is Cheese", cheese);
        callback(cheese);
    }, 2000);
}

function makeDough(cheese, callback) {
    setTimeout(() => {
        const dough = cheese + "🧀";
        console.log("Here is The Dough", dough);
        callback(dough);
    }, 2000);
}

function bakePizza(dough, callback) {
    setTimeout(() => {
        const pizza = dough + "🍕";
        console.log("Here is The Pizza", pizza);
        callback(pizza);
    }, 2000);
}

getCheese((cheese) => {
    makeDough(cheese, (dough) => {
        bakePizza(dough, (pizza) => {
            console.log("Got My Pizza", pizza);
        });
    });
});

getCheese(function (cheese) {
    makeDough(cheese, function (dough) {
        bakePizza(dough, function (pizza) {
            console.log("Pizza is Ready!", pizza);
        });
    });
});
