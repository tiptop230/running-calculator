#!/usr/bin/env node
/** 
*Ali Akid Running calculator
*The point of this program is to create
*running calculator that doesn't quit until
*the user inputs 'q' 
*/

/**
*initialize total to 0
*calculate takes an operation input and value from the user
*then uses if statements to check which operation to use
*then use that operation on the running total
*it then readsline from the user to go back to the operation input to
*loop the program 
*/
var total = 0;
function calculate(value,input)
{
	
	
	if (input === "+")
	{
	
		total += Number(value);
		
		
	}
	if (input === '-')
        {	
                total -= value;
                
        }
	if (input === '*')
        {
                total *= value;
        }
	if (input === '/')
        {
        
                if (value == 0)
                	console.log("cannot divide by 0!");
                else	
                	total /= value;
        }
	
        
        
        console.log(total);
        readline.question('Enter operation (+-*/, q to quit): ', input => { operation(input); });

}
/**
*number takes an operation input and a value
*it is used to check if the given value is valid for number input into a calculator
*if it is it passes value and input to calculate
*/
function number(value,input)
{
	if (isNaN(value)){
		readline.question('Enter a number : ', value => {number(value,input); });
		}
	else
	calculate(value,input);
	
}
/**
* operation takes a operation input
* it takes input from user and checks if it is a valid operation
* if not re-ask the user
* if it is valid ask user to enter value and pass those to the number function
*/
function operation(input)
{
	
	if ( ![ 'q' , '/' , '*' , '-' , '+'].includes(input)){
		readline.question('Enter a valid operation: ', input => { operation(input); });
		}
	else if (input === 'q'){
	readline.close();
	}
	else {
		readline.question('Enter a value: ', value => { number(value,input); });
		}
}
/**
*intro message, create readline for use
*then start the loop of functions calling operation
*/
console.log("Welcome to Running-Calc.js");

const readline = require('readline').createInterface( 
{ 
	input: process.stdin,
	output: process.stdout
});


readline.question('Enter operation (+-*/, q to quit): ', input => { operation(input); });
