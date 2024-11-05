let array = [1, 2, 3, 4, 5, 6];
function updateDisplay()
{
 document.getElementById('array').textContent = 'Current Array: ' + JSON.stringify(array);
}
function removeElementFromArray()
{
 const valueToRemove = parseInt(document.getElementById('removeElement').value, 10);
 if (!isNaN(valueToRemove)) {
 const index = array.indexOf(valueToRemove);
 if (index !== -1)
 {
 array.splice(index, 1); // Remove the element
 updateDisplay();
 document.getElementById('output').textContent = `Removed ${valueToRemove}.`;
 } else {
 document.getElementById('output').textContent = `Value ${valueToRemove} not found.`;
 }
 } else {
 document.getElementById('output').textContent = 'Please enter a valid number.';
 }
}
function checkContains()
{
 const valueToCheck = parseInt(document.getElementById('containsValue').value, 10);
 if (!isNaN(valueToCheck))
 {
 if (array.includes(valueToCheck)) {
 document.getElementById('output').textContent = `Array contains ${valueToCheck}.`;
 } else {
 document.getElementById('output').textContent = `Array does not contain ${valueToCheck}.`;
 }
 } else {
 document.getElementById('output').textContent = 'Please enter a valid number.';
 }
}
function emptyArray()
{
 array = [];
 updateDisplay();
 document.getElementById('output').textContent = 'Array has been emptied.';
}
// Initialize the display when the page loads
updateDisplay();
