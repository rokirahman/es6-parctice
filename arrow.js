// function dubbleIt(num){
//     return num*2
// }

// const dubbleIt = function myFun(num){
//     return num*2
// }

// const dubbleIt = num => num*2;
// const result = dubbleIt(100);
// console.log(result);


const add = (a, b) => a + b;
const give5 = () => 5;
const doMath = (x, y) => {
    const sum = x + y;
    const diff = x - y;
    const result = sum * diff;
    return result;
}

const result = add(10, 5);
const result2 = give5();
const result3 = doMath(10, 5);
console.log(result3);