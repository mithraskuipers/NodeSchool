/*
function positive_check(elements) {
  return elements > 0;
}

var filtered = [112, 52, 0, -1, 944].filter(positive_check);
print(filtered);
Output:

[112,52,944]
In this example the function filter() creates a new array 
consisting of only those elements that satisfy the condition 
checked by positive_check() function.
*/

// "===" the values must be equal in type as well.

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function even_number_finder(number)
{
    return number % 2 === 0;
}

var filtered = numbers.filter(even_number_finder);

console.log(filtered);