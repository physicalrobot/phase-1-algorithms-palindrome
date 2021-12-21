function isPalindrome(word) {
  // Write your algorithm here

  //split word into array of strings
  let letters = word.split('')

  //flip the array of strings
  let reverseWord = [...letters]
  reverseWord = reverseWord.reverse()

  //recreate word 
  letters = letters.join('')

  reverseWord = reverseWord.join('')

  //compare to see if its the same word

  return reverseWord === letters;


}









/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
