function calculateAreaOfTriangle()
{
  var base = parseFloat(document.getElementById('base').value);
  var height = parseFloat(document.getElementById('height').value);
  var AreaOfTraingle = (base*height)/2;
  document.getElementById('result1').innerHTML = "Area Of triangle : " + AreaOfTraingle;
}
function calculateAreaOfCircle()
{
  var redius = parseFloat(document.getElementById('redius').value);
  var AreaOfCircle = 3.14* (redius*redius);
  document.getElementById('result2').innerHTML = "Area Of Circle : " + AreaOfCircle;
}
function calculateAreaOfRectangle()
{
  var width = parseFloat(document.getElementById('width').value);
  var length = parseFloat(document.getElementById('length').value);
  var AreaOfRectangle = (width * length);
  document.getElementById('result3').innerHTML = "Area Of Rectangle : " + AreaOfRectangle;
}
