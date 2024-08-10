export {};

const myList = ["Welcome", "to", "the", "Hotel", "California"];

console.log("Starting with: ", myList);

// TODO Remove strings that don't contain 'e'
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

// TODO: turn each word into its letter count
const letterCounts: number[] = [];
for (let word of myList) {
  letterCounts.push(word.length);
}
console.log("Letter Counts: ", letterCounts);

// TODO: reverse the order
const reversedList = [...myList];
for(let wordIndex in myList) {
  reversedList[myList.length - Number(wordIndex) - 1] = myList[Number(wordIndex)];
}
console.log("Reversed: ", reversedList);

// TODO: write a better version of reversing
//const betterReversed =
//console.log("Reversed (better): ", betterReversed);

console.log("Ending with:   ", myList);
