//console.log(process.argv);

/*
Run the code with some numbers as arguments
node baby-steps.js 1 2 3
or
node baby-steps.js 10 20 30 40 50

Find way to loop through the number arguments so you can output their sum.
Start at the 3rd element and end at the end of the array.
*/

/*
elements of process.argv are strings, thus need be converted to numbers.

Notes:
variable declared wth let is block scoped
variable declared with var is available throughout program.
*/

let result = 0;
for(let i = 2; i < process.argv.length; i++)
{
    result = result + Number(process.argv[i]);
}

console.log(result);