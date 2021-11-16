// Write the following functions using the reduce built-in function.
const numbers = [12, 3, 43, 7, 86, 90, 101, 5, 24, 30];
// 1. max
const max = numbers.reduce((max, currnVal) => {
    if (currnVal > max)
        max = currnVal;
    return max;
});
console.log(max);

// 2. sum of even numbers
const sumEven = numbers.reduce((sumEven, currnVal) => {
    if (currnVal % 2 === 0)
        sumEven += currnVal;
    return sumEven;
});
console.log(sumEven);

// 3. average
const average = (numbers.reduce((sum, currnVal) => sum += currnVal)) / (numbers.length);
console.log(average);