/* 
১.সিম্ পল একটা ফাংশন লিখতে হবে। যেটার নাম হবে feetToInch এবং এই ফাংশন ইনপুট হিসেবে নিবে feet আর রিটার্ ন করবে inch। অর্ থাৎ এই ফাংশনকে কো ন একটা ফিট বলে দিলে সে রিটার্ ন হিসেবে বলে দিবে কত ইঞ্ চি হয়।
*/

// feet to inch convert calculator 
//  we know 1ft = 12inch

// declare a function 
function feetToInch(feet) {
    const inch = feet * 12;
    const result = "Feet To inch : " + feet + "ft" + " = " + inch + "in";
    return result;
}

const numberOfFeet = feetToInch(12);
console.log(numberOfFeet);