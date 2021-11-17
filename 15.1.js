// # Note: We ask you not to solve the bug by finding it with your
// eyes but to use the debugging tools we've learned!
// What is wrong with this code?
// 1. First find the line that contains the problem. Write it down.
// getSum([1, 2, 3],[5, 66, 23]);//להפריד בין 2 הארגומנטים שנשלחים
// const sum = 0; //TypeError: Assignment to constant variable//לא ניתן לשנות ערך של משתנה קבוע
//חסרה החזרה של הערך מהפונקציה
// 2. Which debug method did you use to find the bug?
// רגילה לדבג דרך הVSCODE
// 3. Explain the bug in your own words.
// 4. Fix the code and submit it all

function getSum(arr1, arr2) {
    let sum = 0;
    for (let i = 0; i < arr1.length; i++) {
        sum += arr1[i];
    }
    for (let i = 0; i < arr2.length; i++) {
        sum += arr2[i];
    }
    return sum;
}
console.log(getSum([1, 2, 3],[5, 66, 23]));