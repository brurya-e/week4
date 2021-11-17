/*
block 1:
פונקציות ומשתנים מסוג VAR מוגדרים ע"י המהדר לפני תחילת הריצה
ההשמה בפועל של ערך במשתנה מתבצעת בזמן הריצה
ןלכן הוא יכיר במשתנה אבל לא יהיה לו ערך:
undefined
2 - מכיר את הפונקציה ומחזיר את ערכה
*/

/*
block 2:
1.thit in getFullName refers to sub-obj prop =>prop.fullName => Aurelio De Rosa
2.עשינו השמה לTEST של הפונקציה עצמה, ןלא קראנו בפועל לפונקציה
חסרה בקריאה ע"י ()
בנוסף אנחנו מנסים להדפיס את התוכן שחוזר מקריאה לפונקציה TEST
ןמיכון שאין פונקציה כזו, נקבל 
undefined
*/

/*
block3:
after return a is not defined
i think b is the same' but not. i dont understand way.
*/

/*
block4:
2
2
הקומפיילר מכיר בפונקציות לפני הקריאה אליהן גם אם הן רשומות אחרי
כיוון שיש"דריסה" של הפונקציה, הגירסא האחרונה היא הקובעת
*/


/*
block5:
1=> d is global
undifaind- e מוגדר בתוך הפונקציה D@ ולא מוכר מבחוץ
*/


/* block 6:
console.log("Value of f in global scope: ", f);
f עדיין לא מאותחל , מכיר אבל אין ערך
undefined
console.log("Value of f in local scope: ", f);
כבר מאותחל + VAR מתנהג כגלובלי
1
*/
