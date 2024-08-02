export {};

const myList = ["Welcome", "to", "the", "Hotel", "California"];

console.log("Starting with: ", myList);

// TODO: find only the words with the letter "e" in them
let onlyEWords = myList.filter((word) => word.includes("e"));
console.log("Only E: ", onlyEWords);

// TODO: turn each word into its letter count
const letterCounts = myList.map((word) => word.length);
console.log("Letter Counts: ", letterCounts);

// TODO: reverse the order
//const reversedList =
//console.log("Reversed: ", reversedList);

// TODO: write a better version of reversing
//const betterReversed =
//console.log("Reversed (better): ", betterReversed);

console.log("Ending with:   ", myList);
