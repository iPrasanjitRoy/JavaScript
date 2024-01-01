function Hello() {
    console.log("Normal Function");
}

Hello();
/*------------------------------------------*/
let afunc = () => {
    console.log("Arrow Function");
}

afunc();
/*------------------------------------------*/
let arrowfunc = (Count) => {
    for (let i = 0; i < Count; i++)
        console.log(i);
}

arrowfunc(5);
/*------------------------------------------*/


const square = (num) => num * num;
console.log(square(5));

/*------------------------------------------*/