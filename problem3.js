// Write a function that will retuern only the even numbers
// return the sum of the even number 

function evenNumbersOnly ( numbers){
        // console.log(numbers);
     for(const number of numbers){
        if(number % 2 ===0){
            console.log(number)
        }
     }
}
const numbers = [2, 3, 56,4, 7,8,30,34];
evenNumbersOnly(numbers);