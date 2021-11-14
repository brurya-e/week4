// 1. Recreate the challenge from the exercise 6.3-
// looping_with_arrays ,but this time using a while loop.
// 2. Reflect on what solution you like better for this task: the
// for loop or the while loop?
// Write a function that will receive an array of strings and will return a new
// array containing all the lengths of all the strings in the array it got as a
// parameter.
// So that if you call this function with this array for example:
// ["boo", "doooo", "hoo","ro"]
// it will return this array: [3, 5, 3, 2]

arrString =["boo", "doooo", "hoo","ro"];

const lengthString = arrString =>
{
    let lengthString = [];
    let i = 0
    while (i<arrString.length)
        lengthString.push(arrString[i++].length);
    
    return lengthString;
}

console.log(lengthString(arrString));