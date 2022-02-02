/* 
২.একদম ফাংশন এর নাম হুবহু centimeterToMeter নাম দিয়ে একটা ফাংশন লিখবে। এই ফাংশনে ইনপুট হিসাবে কেউ সেন্ টিমিটার দিবে আর সেই সেন্ টিমিটার কে মিটার এ কনভার্ ট করে রেজাল্ ট রিটার্ ন করবে।
*/

// Centimeter to meter calculator

// called a function 
// we know 100 Centimeter = 1 meter

function centimeterToMeter(centimeter) {
    const meter = centimeter * (1 / 100);
    const result = "centimeter To meter : " + centimeter + "cm" + " = " + meter + "mt";
    return result;
}
const inputCentimeter = 500;
const totalMeter = centimeterToMeter(inputCentimeter)
console.log(totalMeter);