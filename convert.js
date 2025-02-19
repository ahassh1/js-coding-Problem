/**
 * 12 inch 1 feet 
 */

function inchToFeet (inch){
    const feetFraction =inch /12;
   return feetFraction;
}
const polashHeight = inchToFeet(70);
console.log(polashHeight);