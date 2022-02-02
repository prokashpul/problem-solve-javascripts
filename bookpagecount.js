/* ৩.আরেকটা ফাংশন লিখবে যেটার নাম লিখবে। যেই ফাংশনের নাম হবে paperRequirements এই ফাংশনের প্ যারামিটার হিসেবে তিনটা প্ যারামিটার হবে। প্ রথম প্ যারামিটার হবে তুমি প্ রথম বই কত কপি ছাপাতে চাও। সেকেন্ ড প্ যারামিটার হবে তুমি সেকেন্ ড বই কত কপি ছাপাতে চাও। আর থার্ ড প্ যারামিটার হবে তুমি থার্ ড বই কত কপি ছাপাতে চাও। অর্ থাৎ কো ন বই এর কত কপি ছাপানো হবে সেটাই প্ যারামিটার হিসেবে নিবে।

এইবার ভালো করে খেয়াল করো।

প্ রথম বই ছাপানো র জন্ য পৃষ্ ঠা লাগবে১০০ টা

সেকেন্ ড বই ছাপানো র জন্ য পৃষ্ ঠা লাগবে২০০ টা

তৃতীয় বই ছাপানো র জন্ য পৃষ্ ঠা লাগবে৩০০ টা



এখন তো মার কাজ হচ্ ছে paperRequirements নামক ফাংশন লিখে ফেলা যাতে। সেই ফাংশনকে কল করে কো ন বই এর কত কপি লাগবে বলে দিবে প্ যারামিটার হিসেবে। আর ফাংশন হিসাব করে বলে দিবে তো মার সর্ বমো ট কতপৃষ্ ঠা কাগজ লাগবে।

উত্ তর হিসেবে সংখ্ যা রিটার্ ন করবে। */

//how much pages we need

//called  a function name paperRequirements

function paperRequirements(book1, book2, book3) {
    const firstBookPages = book1 * 100;
    const secondBookPages = book2 * 200;
    const thirdBookPages = book3 * 200;

    // total pages 

    const totalPages = firstBookPages + secondBookPages + thirdBookPages;

    return totalPages;

}
const book1 = 12;
const book2 = 4;
const book3 = 7;
const totalPaper = paperRequirements(book1, book2, book3);
console.log("You need total number of paper : ", totalPaper, "pis");