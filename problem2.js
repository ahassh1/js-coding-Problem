const numbers = [1, 2, 3, 4, 5,6, 7];
console.log(numbers);
const reversed = numbers.reverse();
console.log(reversed);




const numbers = [1, 2, 3, 4, 5,6, 7];
const rev_numbers = []
for(const num of numbers){
        console.log(num);
        rev_numbers.unshift(num)
    }
    console.log(rev_numbers)
    

    
    
    const numbers = [1, 2, 3, 4, 5,6, 7];
 const rev_numbers = [];
for (let i = 0; i < numbers.length; i++) {
        const num = numbers[i]; 
        rev_numbers.unshift(num)
    }
    
    
    
   const numbers = [1, 2, 3, 4, 5,6, 7];
for (let i=numbers.length-1; i<numbers.length; i++){
    const num = numbers[i];
    rev_numbers.unshift(num)
}