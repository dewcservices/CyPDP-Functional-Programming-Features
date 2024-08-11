export {};

const myList = ["Welcome", "to", "the", "Hotel", "California"];

console.log("Starting with: ", myList);

// TODO: Use iterator opterators instead

// Remove strings that don't contain 'e'
let onlyEWords: string[] = [];
for (let word of myList) {
  for (let character of word) {
    if (character === "e") {
      onlyEWords.push(word);
      break;
    }
  }
}
console.log("Only E: ", onlyEWords);

// turn each word into its letter count
const letterCounts: number[] = [];
for (let word of myList) {
  letterCounts.push(word.length);
}
console.log("Letter Counts: ", letterCounts);

// reverse the order
const reversedList = [...myList];
for(let wordIndex in myList) {
  reversedList[myList.length - Number(wordIndex) - 1] = myList[Number(wordIndex)];
}
console.log("Reversed: ", reversedList);

// write a better version of reversing
//const betterReversed =
//console.log("Reversed (better): ", betterReversed);

console.log("Ending with:   ", myList);
