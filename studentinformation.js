document.getElementById('registrationForm').addEventListener('submit', function(event) {
 event.preventDefault();
 validateForm();
});
function validateForm()
{
 const name = document.getElementById('name').value.trim();
 const email = document.getElementById('email').value.trim();
 const phone = document.getElementById('phone').value.trim();
 const password = document.getElementById('password').value.trim();
 const confirmPassword = document.getElementById('confirmPassword').value.trim();
 let valid = true;
 if (name.length < 5)
 {
 valid = false;
 document.getElementById('nameError').innerText = "Name must be at least 5 characters.";
 } else {
 document.getElementById('nameError').innerText = "";
 }
 if (!email.includes('@'))
 {
 valid = false;
 document.getElementById('emailError').innerText = "Enter a valid email.";
 } else {
 document.getElementById('emailError').innerText = "";
 }
 if (phone === '1234567890' || phone.length !== 10) {
 valid = false;
 document.getElementById('phoneError').innerText = "Enter a valid 10-digit phone number.";
 } else {
 document.getElementById('phoneError').innerText = "";
 }
 if (password.length < 8 || password.toLowerCase() === 'password' || password.toLowerCase() ===
name.toLowerCase())
 {
 valid = false;
 document.getElementById('passwordError').innerText = "Password is not strong enough.";
 } else {
 document.getElementById('passwordError').innerText = "";
 }
 if (password !== confirmPassword)
 {
 valid = false;
 document.getElementById('confirmPasswordError').innerText = "Passwords do not match.";
 } else {
 document.getElementById('confirmPasswordError').innerText = "";
 }
 if (valid)
{
 alert("Form submitted successfully!");
 }
}
