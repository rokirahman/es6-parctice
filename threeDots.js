const ages = [12, 14, 15, 28, 20];
const ages2 = [13, 23, 22, 25,]
const ages3 = [26, 28, 30, 32, 31];
const allAges = ages.concat(ages2).concat([100]).concat(ages3);
const allAges2 = [...ages, ...ages2, 100, ...ages3];
// console.log(allAges2);

const business = 450;
const minister = 650;
const shochib = 250;
const takaPoisa = [450, 650, 250];
const maximun = Math.max(...takaPoisa);

// const maximun = Math.max(business, minister, shochib);
console.log(maximun);