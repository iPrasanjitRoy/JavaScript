const count = true;

let countValue = new Promise(function (resolve, reject) {
    if (count) {
        resolve("There Is A Count Value");
    } else {
        reject("There Is No Count Value");
    }
});

console.log(countValue);


/*------------------------------------------------*/

let countValue1 = new Promise(function (resolve, reject) {
    resolve("Promise Resolved");
});

countValue1
    .then(function successValue(result) {
        console.log(result);
    })


/*------------------------------------------------*/

let countValue2 = new Promise(function (resolve, reject) {
    reject('Promise rejected');
});


countValue2.then(
    function successValue(result) {
        console.log(result);
    },
)

    .catch(
        function errorValue(result) {
            console.log(result);
        }
    );

/*------------------------------------------------*/



let countValue5 = new Promise(function (resolve, reject) {

    resolve('Promise Resolved');
});


countValue5.finally(
    function greet() {
        console.log('This Code Always Executed.');
    }
);
