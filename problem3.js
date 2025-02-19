// Write a function that will retuern only the even numbers
// return the sum of the even number 

function evenNumbersOnly ( numbers){
        // console.log(numbers);
        const evens = [];
     for(const number of numbers){
        if(number % 2 ===0){
            console.log(number)
            evens.push(number);
        }
     }
     return evens;
}
const numbers = [2, 3, 56,33, 13.1,4, 7,8,30,34];
const aven = evenNumbersOnly(numbers);
console.log("even numbers are :", aven);






function evenNumbers (numbers){
   let sum=0;
for (const number of numbers) {
   if(number %2===0){
   console.log(number);
   sum =number+sum;
   }
}
return sum;
}
const numbers = [34,56,75,56,34,23,12,22,55,77,79,98];
const sum = evenNumbers(numbers);
console.log("sum of the number is", sum)