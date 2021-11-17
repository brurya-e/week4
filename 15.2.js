//1. findSmalest is not defined -טעות בשם הפונקציה בקריאה לפונקציה
//a > b > c => התנאי הזה בודק את האיבר האמצעי בלבד, האם הוא בין שני האיברים שמצדייו, בעצם בודק אתם האיבר הנבדק הוא גדול מימין וקטן משמאל
//אם הו
//https://code-review.blog/2021/11/15/%d7%94%d7%aa%d7%a0%d7%90%d7%99-%d7%94%d7%9e%d7%91%d7%95%d7%92%d7%91%d7%92-%d7%a9%d7%9c-2-%d7%91%d7%9c%d7%99%d7%9c%d7%94/
function findSmallest(a, b, c) {
    //if (a > b > c)
    if (a>c && c<b) {
        return c;
    // } else if (a > c > b) {
    } else if (c>a && a<b) {
        return a;    
    } else {
        return b;
    }
}
console.log(findSmallest(52,66,2));

