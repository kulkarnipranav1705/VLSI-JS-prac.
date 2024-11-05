function generateTable()
{
var number = document.getElementById('number').value;
var tableContainer = document.getElementById('tableContainer');
tableContainer.innerHTML = ' ';
var table = document.createElement('ul');
for (var i = 1; i <= 10; i++)
{
var listItem = document.createElement('li');
listItem.textContent = number + ' x ' + i + ' = ' + (number * i);
table.appendChild(listItem);
}
tableContainer.appendChild(table);
}
