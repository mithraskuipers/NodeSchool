/*
A variable that is declared outside a function definition is a global variable, 
and its value is accessible and modifiable throughout your program. 
A variable that is declared inside a function definition is local. 
It is created and destroyed every time the function is executed, 
and it cannot be accessed by any code outside the function.

Functions defined inside other functions, known as nested functions, have 
access to their parent function's scope.
*/

/*
IIFE: Immediately Invoked Function Expression.
When you create a function, and capture that function within parentheses,
and at the end of the function add opening and closing parentheses, (),
that function will immediately be invoked. No need for a separate call.
*/

const a = 1; 
const b = 2;
const c = 3;

(function firstFunction() 
{
    const b = 5;
    const c = 6;

    (function secondFunction()
    {
        const b = 8;
        console.log(`a: ${a}, b: ${b}, c: ${c}`);

        (function thirdFunction()
        {
            const a = 7; 
            const c = 9;


            (function fourthFunction(){
                const a = 1;
                const c = 8;
            })()
        })()
    })()
})()

/*
The code is run from the parent function down to the children functions.
The first function to be run is firstFunction().
The reason why the solution is found by placing the console.log() prior to thirdFunction() 
is because of the initial values of a, b, and c (1,2,3). 
firstFunction changes b and c to 5 and 6. So we end up with 1, 5, 6.
secondFunction changes b to 8. So we end up with 1, 8, 6. <-- desired result.
*/