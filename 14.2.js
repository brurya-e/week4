// Write the following functions using the reduce built-in function.
//1.Write a function called extractOnlyValue which accepts an array of
// objects and a key and returns a new array with the value of each object at
// the key
const candies = [
    {
        name: "mint gum",
        id: "as12f",
        price: 2,
        amount: 2
    },
    {
        name: "twix",
        id: "5hd7y",
        price: 5,
        amount: 4
    },
]

const extractOnlyValue = (arrObj, key) => {
    const res = arrObj.reduce((result, currnVal) => {
        result.push(currnVal[key]);
        return result;
    }, []);
    return res;
}
console.log(extractOnlyValue(candies, 'name'));

//2.Write a function called countOnlyVowels which accepts a string and
// returns an object with the keys as the vowel and the values as the number
// of times the vowel appears in the string. This function should be case
// insensitive so a lowercase letter and uppercase letter should count
const countOnlyVowels = (str) => {
    const strArr = str.split("");
    const res = strArr.reduce((result, currnVal) => {
        if ('aeiou'.includes(currnVal.toLowerCase()))
            result[currnVal.toLowerCase()] = (result[currnVal.toLowerCase()] || 0) + 1;
        return result;
    }, {});
    return res;
}
console.log(countOnlyVowels('name An one pepoele'));

//3.Write a function called addKeyAndValue which accepts 3 parameters an
// array of objects, key and value and returns the array of objects passed to it
// .with each object now including the key and value passed to the function