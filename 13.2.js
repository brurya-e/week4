const foods = ["falafel", "sabich", "hummus", "pizza with extrapineapple"];
// a.1. Sort the array of strings from descending to ascending order
foods.sort();
console.log(foods);

// a.2. Sort the array of strings from ascending to descending order.
const aesc = (foods.sort()).reverse();
console.log(aesc);

const aesc_1 = foods.sort((a, b) => (a < b ? 1 : -1));
console.log(aesc_1);


const foodsWithUpperCase = [
    "falafel",
    "Sabich",
    "hummus",
    "pizza with extra pineapple",
];

//    b.1. Sort the array of strings from descending to ascending
// order.
const descB = foodsWithUpperCase.sort((a, b) => {
    let x = a.toLowerCase();
    let y = b.toLowerCase();
    return x == y ? 0 : x > y ? 1 : -1;
});
console.log(descB);

// b.2. Sort the array of strings from ascending to descending
// order
const aescB = foodsWithUpperCase.sort((a, b) => ((a.toLowerCase() < b.toLowerCase()) ? 1 : -1))
console.log(aescB);

const words = ["apple", "supercalifragilisticexpialidocious",
    "hi", "zoo"];
// c.1. Sort the array of strings from the longest word to the
// shortest word only using the sort function
const lengthSort = words.sort((a, b) => (a.length - b.length))
//  {
//     let x = a.length;
//     let y = b.length;
//     return x - y;
// })
console.log(lengthSort);
