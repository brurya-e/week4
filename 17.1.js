// var b = 1;
// function someFunction(number) {
//     function otherFunction(input) {
//         return b;
//     }
//     b = 5;
//     return otherFunction;
// }
// var firstResult = someFunction(9);
// var result = firstResult(2);

/*
    return otherFunction;
זו לא קריאה לפונקציה(חסר ()) אלא החזרה של מצביע לפונקציה
var firstResult = someFunction(9);
מקבל מצביע לפונקציה הפנימית
var result = firstResult(2);
קוראים לפונקציה הפנימית(לערך הנשלח אין משמעות)
שהיא מחזירה את B לפי הערך שהוא קיבל בסקופ שמעליה
ולכן מחזירה 5
*/


// var a = 1;
// function b2() {
//     a = 10;
//     return;
//     function a() { }
// }
// b2();
// console.log(a);
/*
כיון שיש ש בתוך הסקןפ- השם של הפונקציה
ההשמה בתוך הסקקופ עושה השמה לA הפנימי
והשימוש בA בחוץ  משתמש בA החיצוני
שערכו לא השתנה
והוא 1
*/

// let i;
// for (i = 0; i < 3; i++) {
//     const log = () => {
//         console.log(i);
//     }
//     setTimeout(log, 100);
// }

/*
ידפיס 3 פעמים 3
הI מוגדר מחו ץ ללואת הFOR
ולכן הוא יוכר גם אחרי שהלולאה תגמר
כייון שיש TIEOUT
ההדפסן=ות ימתינו אבל החישוב ממשיך לרוץ וההדפסות ממתינות עם הצבעה לI
וכשהם מודפסות בפועל , זה ניגש לאיבר I שכבר השתנה ל3
*/