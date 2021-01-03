/*
write program that uses a single operation to read a file and prints out
its number of newlines (\n) to the console

?similar to running cat file | wc -1 ?


To perform filesystem operation you need fs module from Node core library

full fs module is available in variable named fs
const fs = require('fs');

Read a file with
fs.readFileSync('/path/to/file');
(returns a Buffer object containing all file contents)

Buffer objects are Node's way of efficiently representing arbitrary arrays of data
can be ASCII, binary, or something else. Can be converted to strings using toString() 
method on them.

In JavaScript a String can be .split() into array of substrings and that '\n'
can be used as a delimiter at end of the last line.

Now you end up with array that has one more element than the number of newlines.
*/

// argv[2] is chosen because argv 0 and 1 are always occupied. 
// [2] is the first actual argument given to the program.

const fs = require("fs");
buffer = fs.readFileSync(process.argv[2]);
var strings = buffer.toString();
var string_split = strings.split('\n');

console.log(string_split.length);