// 1. Sort the array of numbers from descending to ascending
// order
// 2. Sort the array of numbers from ascending to decending
// order.
const numbers = [1, -5, 666, 2, 400, 11];

const desc = numbers.sort((x,y)=> x-y);
console.log (desc);

const aesc = numbers.sort((x,y)=> y-x);
console.log (aesc);
