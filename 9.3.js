// You are given two arrays:
// Create a function that takes these two arrays as
// arguments.
// Compare these two arrays using 2 for loops and return the
// items that are the same. If none are the same return false.

const food = ["Noodle", "Pasta", "Ice-cream", "Meat",
"Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza", "Olives",
"Hamburgers"];

const foundSame = (arr, arr1) =>{
    let same = []
    for(let i =0; i< arr.length; i++)
        for(let j =0; j< arr1.length; j++)
            if (arr[i]== arr1[j])
                same+= arr[i];  
    return same;
}

console.log(foundSame(food, food1));