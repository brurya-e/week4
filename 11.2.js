// Answer the questions below and use the map or the
// forEach method :

const words = ['asap', 'byob', 'rsvp', 'diy'];
const numbers = [20, 21, 22, 23, 24, 25, 26, 27];

// 1. Write a function called doubleValues which accepts an
// array of integers and returns a new array with all the
// values in the array passed to the function doubled.
const doubleValues = arr => {
    const doubles = arr.map(function doubled(num) {
        return num * 2;
    });
    return doubles;
}
console.log(doubleValues(numbers));

// 2. Write a function called onlyEvenValues which accepts an
// array and returns a new array with only the even values in
// the array passed to the function.
const onlyEvenValues = arr => {
    const evenValue = [];
    arr.forEach(function even(num) {
        if (num % 2 === 0)
            evenValue.push(num);
    });
    return evenValue;
}
console.log(onlyEvenValues(numbers));

// 3. Write a function called showFirstAndLast which accepts
// an array as an argument and returns a new array with only
// the first and last elements from the function’s argument
// array. The returned array should only contain elements that
// are strings.

const showFirstAndLast = arr => {
    const firstLast = [];
    arr.forEach(function (word) {
        if (typeof word === 'string' || word instanceof String){
            let temp = word.split('');
            let newstr = temp[0] + temp[word.length - 1];
            firstLast.push(newstr);
        }
    });

    return firstLast;
}
console.log(showFirstAndLast(words));

// 4. Write a function called vowelCount which accepts a
// string as an argument. The function should return an object
// which has the count of the number of vowel’s that are in
// the string. The key should be the vowel and the value
// should be the count. e.g. {a:3, o:2,u:4}.
// Should not be case sensitive.

const isVovel = l =>{
    return (l==='a' || l==='A' || l==='e' || l==='E' || l==='i' || l==='I' || l==='o' || l==='O' || l==='u' || l==='U')
}

const vowelCount = str => {
    const vovel = {};
    const newStr = str.split('');
    newStr.forEach(function (l) {
        if(isVovel(l)){
            if (vovel.hasOwnProperty(l))
                vovel[l]+=1;
            else 
                vovel[l] =1 ;
        }        
    });

    return vovel;
}
console.log(vowelCount(words[0]));

// 5. Write a function capitalize that takes a string as an
// argument and will return the whole string capitalized.
const capitalize = str => {
    const temp = str.split('');
    const newStr = temp.map(function (l) {
        return l.toUpperCase();     
    });
    return newStr.join('');
}
console.log(capitalize(words[0]));

// 6. Write a function called shiftLetters that takes a string as
// an argument and return’s an encoded string with each
// letter shifted down the alphabet by one.
const shiftLetters = str => {
    const temp = str.split('');
    const newStr = temp.map(function (l) {
        if(l==='z') 
            return 'a';
        if (l==='Z') 
            return 'A';   
        charcode = (l.charCodeAt()) + 1;
        return String.fromCharCode(charcode);
    });
    return newStr.join('');
}
console.log(shiftLetters('abcz'));

// 7. Create a function called swapCase that takes a string as
// an argument and returns a string that every other word is
// capitalized. (you can use the fifth’s exercise's function to
// keep it dry)
const swapCase = str => {
    const temp = str.split(' ');
    const newStr = temp.map(function (word,ind) {
        if (ind%2===0)
            return capitalize(word);
        return word;

    });
    return newStr.join(' ');
}
console.log(swapCase('hello world sentence fghfgh jkjk'));