 document.body.onmouseover = function()
 {
 document.body.style.backgroundColor = 'lightblue';
 };
 document.body.onmouseleave = function()
 {
 document.body.style.backgroundColor = 'white';
 };
 document.querySelector('input').onfocus = function()
 {
 document.body.style.backgroundColor = 'lightgreen';
 };
 document.querySelector('input').onblur = function()
 {
 document.body.style.backgroundColor = 'white';
 }
