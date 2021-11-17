//אין לSUM ערך התחלתי ולכן כשמוסיפים לNAN כל מספר שהוא הוא נשאר NAN
//שגיאה לוגית, מחזיר את הסכרום ולא את הההמוצע הוספתי חלוקה


function calcAverage(arr) {
    var sum =0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum/arr.length;
}
console.log(calcAverage([85, 90, 92]));