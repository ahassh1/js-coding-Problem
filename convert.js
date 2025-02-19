/**
 * 12 inch 1 feet 
 */

function inchToFeet (inch){
    const feetFraction =inch /12;
   return feetFraction;
}
const polashHeight = inchToFeet(70);
console.log(polashHeight);



function inchToFeet2 (inch){
    const feetFraction =inch /12;
    const feetNumber = parseInt(feetFraction);
    const inchRemaining = icnh % 12; 
    const  result = feetNumber + ' ft ' +inchRemaining + ' inch ';
    return result;
}
const polashHeight = inchToFeet(70);
const polashHeight2 =inchToFeet2(70);




function kiloToMiles(kilo){
    const miles = kilo * 0.623;
    return miles;
}
const newValue = kiloToMiles(28);
console.log(newValue);