/* ৪.একটা ফাংশন লিখবে। এই ফাংশনের নাম হবে bestFriend তারপর সেই ফাংশনে ইনপুট 
প্ যারামিটার হিসেবে একটা array নিবে। সেই array এর মধ্ যে তো মার সব ফ্ রেন্ ডের নাম থাকবে। 
এখন তো মার কাজ হচ্ ছে যে ফ্ রেন্ ড এর নাম সবচেয়ে বড় সেই ফ্ রেন্ ড এর নাম রিটার্ ন 
করে দেয়া। এই ক্ ষেত্ রে তুমি নামটা অর্ থাৎ ফ্ রেন্ ডের নাম(স্ ট্ রিং) রিটার্ ন করতে 
হবে। */

// largest name define and return sting


// called a function name bestFriend

function bestFriend(name) {
    let friendName = 0; //array item length convert number
    let largestName = name[0]; //indexOf name string 
    for (let i = 0; i < name.length; i++) {
        if (name[i].length > friendName) {
            friendName = name[i].length; //array item length(number) transfer friendName variable 
            largestName = name[i]; //largest item transfer largestName (string)
        }
    }
    return largestName; //return largest word (sting value)
}

const fNames = ["prokash", "santo", "Suvonkar", "Diba mojumber", "suvasis halder"];
console.log("My best friend largest name is : " + bestFriend(fNames));

// way 2

function bestFriend2(name) {
    let largestName = name[0]; //indexOf name string 
    for (let i = 0; i < name.length; i++) {
        if (name[i].length > largestName.length) {
            largestName = name[i]; //largest item transfer largestName (string)
        }
    }
    return largestName; //return largest word (sting value)
}
const fName = ["prokash", "santo", "Suvonkar", "Diba mojumber", "suvasis halder"];
console.log("My best friend largest name is : " + bestFriend2(fName));