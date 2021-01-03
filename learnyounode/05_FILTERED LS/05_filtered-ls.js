/*
Create program that prints a list of files in a directory
filtered by the extension of the files.

First argument:     directory name
Second argument:    file extension to filter
*/

var fs = require("fs");
var path = require("path");

var dir_path = process.argv[2];
var ext = '.' + process.argv[3];

fs.readdir(dir_path, function callback (err, list)

console.log(list));