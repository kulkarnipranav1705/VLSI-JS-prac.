function performOperations()
{
 // Retrieve the sets from the input fields
 const set1Input = document.getElementById('set1').value;
 const set2Input = document.getElementById('set2').value;
 // Convert the input strings into arrays of numbers
 const set1 = new Set(set1Input.split(',').map(Number));
 const set2 = new Set(set2Input.split(',').map(Number));
 // Perform union
 const union = new Set([...set1, ...set2]);
 // Perform intersection
 const intersection = new Set([...set1].filter(x => set2.has(x)));
 // Perform difference (Set 1 - Set 2)
 const difference = new Set([...set1].filter(x => !set2.has(x)));
 // Perform symmetric difference
 const symmetricDifference = new Set([...set1, ...set2].filter(x => !set1.has(x) || !set2.has(x)));
 // Display the results
 document.getElementById('union').textContent = `Union: ${[...union].join(', ')}`;
 document.getElementById('intersection').textContent = `Intersection: ${[...intersection].join(', ')}`;
 document.getElementById('difference').textContent = `Difference (Set 1 - Set 2): ${[...difference].join(', ')}`;
 document.getElementById('symmetricDifference').textContent = `Symmetric Difference:
${[...symmetricDifference].join(', ')}`;
}
