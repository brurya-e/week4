// 1. Write a a function called ‘isString’ that receives 2
// arguments, a string and a callback function.
// The function checks that the string is indeed a string.
// If the string is a string, pass the string to a callback
// function which logs that string to the console.
// 2. Create a function called ‘firstWordUpperCase’ that
// receives 2 arguments, a string and a callback function.
// The function will capitalize the first word in the sentence
// and pass the string to a callback function which will create
// dashes between the words.
// 3. Call the ‘firstWordUpperCase’ function with a callback of
// your choice.
// 4. Create your own function that will receive from one of its
// arguments a callback function.

//1.

const print = str => {console.log(str)}
const isString = (str, func)=>{
    if (typeof str === 'string' || str instanceof String){
        func(str);
    }
}
isString('srting', print);
isString(10.5, print);

//2.
const dashes = str =>{
    let temp = str.replace(' ', '-');
    return temp;    
}
const firstWordUpperCase = (str, func)=>{
    let temp = str.split(' ');
    temp[0]=temp[0].toWordUpperCase;
    let newStr = temp.join(' ');  
    return func(newStr);
}
console.log(firstWordUpperCase('fgfg abnb bnb', dashes ));

//3
console.log(firstWordUpperCase('fgfg abnb bnb', print ));

//4

const add=(a, b)=> a+b;
const power2Byadd = n => {
    let sum =0;
    for(let i =0; i<n; i++)
        sum+=add(0,n);
    return sum;    
}
console.log(add(2,3));
console.log(power2Byadd(3));
console.log(power2Byadd(5));

