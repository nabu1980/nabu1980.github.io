let myVariable; //define a variable
myVariable = 'Nate';  //assign the variable a value
//can be done in a single line, ie: let myVariable = 'Nate';

//VARIABLES
let myString = 'Bob';
let myNumber = 3;
let myBoolean = true; //true or false (1 or 0)
let myArray = [1, 'Bob', true]  //can hold different types of variables
let myObject = document.querySelector('p'); //an object can be anything

//OPERATORS
//addition(+), subtraction(-), multiplication(*), division(/)
'Hello ' + 'World'; //string addition ==> will become 'Hello World'
//assignment (=), let something be something else
myNumber === 4; //equality ==> will return in false here
!(myNumber === 4); //does-not-equal ==> will return true here
myNumber !== 4; //same thing as above

//CONDITIONALS --> check if something is true
//if, for, while loops
let iceCream = 'chocolate';
if(iceCream === 'chocolate'){
  alert('Yay, I love chocolate ice cream!');
} else {
  alert('Awwww, but chocolate is my favorite');
}

//EVENT LISTENERS --> look for the user to do something
document.querySelector('html').addEventListener('click',
function() {
  alert('Ouch! Stop poking me!');
});
