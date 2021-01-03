/*
Write program that uses filesystem operation to read file and print number
newlines in it. Full path to file will be provided as first command-line argument.

Problem is the same as previous, but now in Node.js way: asynchronous.

That is, instead of fs.readFileSync() you use fs.readFile(). 
Instead of using the return value of this method you collect the value
from a callback function that you pass in the second argument.
*/

/*
Why? What does it matter?
Node.js framework is made with idea of using asynchronous operations
instead of synchronous. 

Everything moving forward builds in this lesson.

Callbacks are part of the JS language an is a type of function that executes at a later time.
One function tells another function it will call the other function back once it does its job.

The function we will define is an asynchronous callback. 
It doesn't execute right away. It executes when the file loading through readFile() has completed.
*/

const fs = require('fs');
var filename = process.argv[2];

fs.readFile(filename, function (error, file_contents)
{
    var file_contents_string = file_contents.toString();
    var file_contents_split = file_contents_string.split('\n');
    var file_contents_count = file_contents_split.length;
    console.log(file_contents_count);
})

// Prototype

/*
const fs = require('fs');
var important_file = process.argv[2];
fs.readFile(important_file, function(error, file_contents)
{

    <do stuff with file_contents>

    console.log(file_contents);
})
*/

/*
Explanation:
When the fs.readFile runs, the function(error, file_contents) is called.
*/