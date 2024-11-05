// Function to reverse a string
function reverseString()
{
const str = document.getElementById('inputString').value;
const reversed = str.split('').reverse().join('');
document.getElementById('output').innerText = `Reversed String: ${reversed}`;
}
// Function to replace characters in a string
function replaceCharacters()
{
const str = document.getElementById('inputString').value;
const charToReplace = prompt('Enter the character to replace:');
const replacementChar = prompt('Enter the replacement character:');
// Replace all occurrences of the character
const replacedString = str.split(charToReplace).join(replacementChar);
document.getElementById('output').innerText = `Replaced String: ${replacedString}`;
}
// Function to check if a string is a palindrome
function checkPalindrome()
{
const str = document.getElementById('inputString').value;
const cleanedString = str.toLowerCase().replace(/[^a-z0-9]/g, '');
const reversedString = cleanedString.split('').reverse().join('');
if (cleanedString === reversedString) {
document.getElementById('output').innerText = `The string "${str}" is a palindrome.`;
} else {
document.getElementById('output').innerText = `The string "${str}" is not a palindrome.`;
}
}
