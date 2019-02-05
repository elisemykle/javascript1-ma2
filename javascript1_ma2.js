//MODULE ASSIGNMENT 2 - LEVEL 1
//1. Create a function that displays prototypal inheritance
function Greeting(name) {
  this.name = name || 'Janne Myklebust';
}

Greeting.prototype.hello = function hello () {
  return 'Hello, my name is ' + this.name;
}

var elise = new Greeting('Elise Myklebust');

var msg = elise.hello();

console.log(msg); // Hello, my name is Elise Myklebust

//2. Create an array of numbers from 1 - 10; slice the 5th number in the array
var numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(numbersArray.slice(4,5));

//3. Delete the last number in the array that you created above.
var numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function myFunction ( ) {
    numbersArray.pop (10) ;
}

//4. Given the following paragraph, create a JavaScript function that changes all mentions of strawberry to banana and strawberries to bananas:
function erstatt(){
    var bananaString = string.replace("Strawberries", "Bananas");
    bananaString = bananaString.replace("strawberries", "bananas");
    bananaString = bananaString.replace("Strawberry", "Banana");
    bananaString = bananaString.replace("strawberry", "banana");
    console.log(bananaString);
}

//5. Create an array and a button. The array should contain 4 football clubs names. When the button is clicked, remove all elements out of the array that we just created. There after add in 4 names of cars inside that array. Log it to the console.
var myArray = ['Aafk', 'Brann', 'Rosenborg', 'Viking'];
console.log(myArray);

function swapArray (myArray) {
    myArray = [];
    console.log(myArray);
    myArray.splice(0, 4, 'Chevy Impala1a', 'Ford Mustang', 'Dodge Charger', 'Buick GNX');
    document.getElementById("swap").innerHTML = swapArray();
    if (myArray(4)) {
        return;
    }
}

//6. Create an array of objects with 3 people inside it. Use the filter function to map by a name.
var mypersonsArray = [
       person1 = {
           name: "Elise",
           age: 24,
       },
       person2 = {
           name: "Knut",
           age: 12,
       },
       person3 = {
           name: "Lise",
           age: 90,
       }
   ];

         var mypersonsArray = mypersonsArray.filter(x => x.name === "Elise")



//7. Create a simple function that logs the date.
var d = new Date();

console.log(d);
