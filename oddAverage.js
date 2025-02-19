/*
 * function takes an arary as a parameter
 * give me the avarage of the odd numbers in the array
 */

function oddAverage(numbers){
  const odds = [];
      for(const number of numbers){
        if(number %2 !== 1){
            // console.log(number)
            odds.push(number);
        }
      }
  // console.log(odds);
  let sum =0;
   for(const number of odds){
    sum=sum+number;
   }
   const count = odds.length;
    console.log(sum, count);
    const avg = sum/count;
    return avg;
}
const numbers = [12, 23, 45,57, 5, 9, 11, 17,23];
const avg = oddAverage (numbers);
console.log("avarage of the odd numbers is :", avg)