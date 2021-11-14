// Write a function that has one argument, a positive integer.
// Lets call it N.
// The function should console log a step shape.
// With N levels using the # character. Make sure the step has
// spaces on the right hand side if empty!
// Note:
// Examples:
// steps(2)
// ‘# ‘
// ‘##’


const piramid = n =>{
    for (let i =0; i<n; i++)
        console.log('#'.repeat(i) + ' '.repeat(n - i));
        // console.log(' '.repeat(n - i)+'#'.repeat(i));
}
piramid(5);