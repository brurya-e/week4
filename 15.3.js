// we want to sum all numbers in even cells in arrays of size 10:
// [1,2,3,4,5,6,7,8,9,10] => 2+4+6+8+10 = 30


//array start from 0 therefore even cell is 1,3,5...and cell 10 is undifaind
function getSumOfEven(arr){
    return arr[1] + arr[3] + arr[5] + arr[7] + arr[9];
   }
console.log(getSumOfEven([1,2,3,4,5,6,7,8,9,10]));