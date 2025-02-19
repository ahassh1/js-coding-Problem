// define a year is leap year or not 
// year will be a leap year if the year is divisible by 4 (litte true)

// those year that is not divisible by 100 and
//  if the year is divisible by 4; 
//  then it will be a leap year;


function isLeapYear(year){
    if(year %4===0){
        console.log("is leap year");   
    }
    else{
        console.log("not leap year");
    }
}
 isLeapYear(2024);





// function isLeapYear(year){
//      if(year %4 ===0){
//         return true;
//      }
//      else{
//         return false;
//      }
// }
// const leapYear = isLeapYear(2233);
// console.log(leapYear);



// function isLeapYear (year){
//     if(year %100!==0 && year %4===0) {
//         return true;
//     } 
//     if (year %100===0 && year %400===0){
//         return true;
//     }
//     return false;
// }
// const leapYear1 = isLeapYear(1900);
// const leapYear2 = isLeapYear(2012);
// const leapYear3 = isLeapYear(2044);
// const leapYear4 = isLeapYear(1960);
// console.log(leapYear1, leapYear2, leapYear3, leapYear4);