// sum of all numbers
// step-1: declare a function
// step-2: call check whether the function is called properly 
// step-3: set a parameter(s)
// step-4: pass the parameter and check the parameter
// step-5: do the function task step by step

function sumOfNumbers (numbers){
    let sum =0;
     for(const number of numbers){
        console.log(number);
        sum = sum+number;
    }
    return sum;
}
const nums =[3,4,5,67,8,2,4]
const sum =sumOfNumbers(nums);
console.log("sum of the numbers is :", sum)