//Single line comment.
/*

this is a multi-line
comment

*/

// //String
// console.log('It is me world');
// //Number    Integer, Float, Double
// console.log(125);
// //Boolean
// console.log(true);
// console.log(false);

//Declare a variable x with 11
// let x=11;
// let y= 5;
// console.log('variable x: ',x);
// console.log('variable y: ',y);
// console.log('x+y=',x+y);
// console.log('x-y=',x-y);
// console.log('x*y=',x*y);
// console.log('x/y=',x/y);
// console.log('x%y',x%y);

/*
Variables can be strings,
 booleans, numbers, array,
 Date, objects

let name = 'your name';
console.log(name);
let grade = 60;

let pass = false;
if( grade >= 70){
    pass = true;
    console.log('You pass');
}
else{
    console.error('you fail')
}


console.log('description:','the thing you want to log');
console.error('description:','the error description');
console.warn('this is not important.');



//Concatenation
let firstName='Ahmad';
let lastName= 'Ali';
console.log(firstName + ' ' + lastName);

//Array

let states = ['Alabama','Florida'];
console.table(states);
//insert or add a state
states.push('Georgia');
console.table(states);
//remove or pop a state
states.pop();
console.table(states);


//Object

const person ={
    firstName:'Ahmad',
    lastName:'Ali',
    age:20,
    SSN:123456789
};

console.table(person);
console.clear();



// Measure how long code 
//takes to complete
let measureTime = 'measureTime'
console.time(measureTime);
console.log('1');
console.log('1');
console.log('1');
console.log('1');
console.log('1');
console.log('1');
console.log('1');
console.log('1');
console.timeEnd(measureTime);


//Declaring Variable
// var, let, const

// Declare variable using var
var age = 10;
console.log(age);
console.log(window.age);
//the variable age is attached
// to the window object.

//Declaring variables using let
let age = 10;//Initial value
console.log(age);
console.log(window.age);
// varible declared with let
//can be changed.
age = 30;
console.log(age);

//Declaring variables using const
// Cannot declare a constant
// without an initial value
const name;
console.log(name);
const age = 10;//Initial value
console.log(age);
console.log(window.age);
// varible declared with let
//can be changed.
age = 30;
console.log(age);

// Variable names
// letters, numbers, _, $
// a variable cannot start with a number

let name;// start with letters
//let 4you;// cannot start with number
let name123;// letters and numbers
//let first name;// no spaces
let _age;
let $amount;
 // Multiword variables

 let firstName; //Camel case
 let FirstName; // Pascal case
 let first_name; // underscore
let firstname; // Do not do this




const person = {
    name:'test',
    age:50
}
console.table(person);
*/

//Data Types
// two main groups: Primitive types and reference types
// Primitive: String, Number, Boolean,Null, Undefined
// Reference types are: object, Array, Function

// Primitive Types
// let x = 1;
// let y = x;
// x= 5;

// console.log('x=',x);
// console.log('y=',y)

// ////Rerence Types
// let x = {color:'red'};
// let y = x;
// x.color = 'blue';

// console.log('x=',x);
// console.log('y=',y)

//Object have properties and functions
// console.log(this);
// let employee={
//     baseSalary:10000,
//     commission:0.15,
//     sales:0,
//     getWage:function(){
//         console.log(this);
//         return this.baseSalary +(this.commission * this.sales)
//     }
// };

// employee.baseSalary =30000;
// employee.sales = 200000;
// console.log(employee.getWage());

// let number = 10;

// function increase(number){
//     number++;
//     //short for number = number +1;
//     console.log('number inside=',number);
//     return number;
// }
//  let y = increase(number);// the way you call a function
// console.log('number outside=',number)
// console.log('y=', y);

// console.log(270%192);
// console.log(192%78);
// console.log(78%36);
// console.log(36%6);

// function getGCF(x,y){
//     if(x== 0) return y;
//     if(y==0) return x;
//     return getGCF(y,x%y);
// }
//  let gcf = getGCF(1120,516);
//  console.log('gcf is ',gcf);

// =================Math Object===================

// let val = Math.PI;// 3.14
// val = Math.E;// Natural base e
// val = Math.round(3.2);
// val = Math.round(3.5);
// val = Math.round(3.9);
// val = Math.ceil(2.4);
// val = Math.floor(2.9);
// val = Math.sqrt(16);
// val = Math.abs(-3);
// val = Math.pow(5,2);
// val = Math.min(4,6,1,89.12);
// val = Math.max(4,6,1,89,12);
// val = Math.random();
// val = Math.ceil( Math.random() *2786546);
// console.log(val);


// //=====================================//
// //=====String Methods and Concatenation==//

// const firstName = 'Adam';
// const lastName = 'Smith'; 

// // Concatenation
// let val = firstName + ' ' + lastName;

// //Apend
// val = firstName;
// val += ' ' + lastName;// the same as val = val + lastname

// let x = 1;
// let y = 5;
// val = x;
// val += y;
// // Escaping
// val = '    That\'s nice day   '; // use \ the escape character
// //val = "That's nice"; alternate between ' and "" 

//console.log(val.length)
// console.log(val.toLowerCase());
// console.log(val.toUpperCase());
// console.log(val.replace('nice','bad'));
// console.log(firstName.concat(lastName));
// console.log(val.split(' '));
// console.log(val.charAt(2));
//console.log(val.substring(0,6));
//console.log(val.trim());

//================================/
//===String Literals==============/
//================================/
// const name = 'Adam Stmith';
// const age = 30;
// const job = 'Web Developer';
// // This is not efficient
// let html = '<ul> <li> name = ' + name + '</li>'
// +'<li> age = ' + age + '</li>'
// +'<li> job = ' + job + '</li>'
//             + '</ul>';
// //Use string literals
// html = `<ul>
//         <li> name: ${name}</li>
//         <li> age: ${age}</li>
//         <li> job:${job} </li>
//         </ul>
//         `

// document.body.innerHTML = html;

//================================/
//===Arrays and Array Methods====/
//================================/
// const numbers = [5,25,86,47,25,69,41];
// const numbers2 = [5,8,63,41,74,8,25];
// const fruits = ['Orange','Apple', 'Banana']
// const name = 'Adam Smith';

// console.table(fruits.sort());
// console.log(numbers2.indexOf(8));
// console.log(numbers2.lastIndexOf(8));

// ////Add on to end of array
// numbers.push(2);
// //// Remove from end array
// numbers.pop();
// ////Add on to front of array
// numbers.unshift(13);
// ////Take off front
// numbers.shift();
// numbers.reverse();
// let val = numbers.concat(numbers2);


// console.table(val);
// // console.log (numbers.length)
// // console.log(Array.isArray(name));
// // console.log(fruits[1]);
// // console.log(numbers2[4]);
// // let numbers3 = numbers2;
// // console.table(numbers3);
// // numbers2[4]=100;
// // console.table(numbers2);
// // console.table(numbers3);

// //console.log(fruits.indexOf('Orange'));
//================================/
//===Date and Time=================/
//================================/
// let val;
// const today = new Date();
// val = today;
// val = today.getMonth() // zero based
// val = today.getFullYear();
// val = today.getHours();
// val = today.getMinutes();
// val = today.getSeconds();

// console.log(val);

//================================/
//===if statements and comparisions/
//================================/





/*
if(condition)
{

    do something

}
else if( another condition)
{
    do something else
}
else
{
 do this

}

*/
////TEST EQUAL TO
//// to test for equality use  == or ===
//// a single equal sign is used to assign a value
// let id = 20;
// if(id ==10)
// {
//     console.log('Correct');
// }
// else
// {
//     console.error('Invalid id.')
// }


// //Not Equal To
// ////  != means not equal to
// let grade = 100;

// if(grade  != 100 ){
//     console.log('Invalid')
// }
// else{
//     console.log('valid')
// }
// let name= "jon";
// let age = 30;

// let html = `<ul>
// <li> Name :${name}</li>
// <li> Age : ${age}</li>
// </ul>`
// document.body.innerHTML= html

// ////Equal to value and type
// //// === validates both value and data type
// let id = 100;// the data type of 100 is number

// if(id === "100")// "100" is a string
// {
//     console.log("valid")
// }
// else{
//     console.log('invalid')
// }


// ////Test for undefined
// let id = 10 ;
// console.log(typeof id);
// if(id != undefined){
//     console.log(`The ID is ${id}`)
// }
// else{
//     console.error('invalid')
// }

// let color='red';

// if(color == 'red'){
//     console.log('The color is red.')
// }
// else if (color == 'blue'){
//     console.log("The color is blue")
// }
// else
// {
//  console.log ( `you selected the color ${color}`)
// }

////Logical Operators And (&&) , OR (||)

// //And  in javascript is &&
//// T and T ==> T
//// T and F ==> F
///  F and F ==> F

// let name = 'Steve'
// let age = 30;

// if(age > 0 && age <= 12){
//     console.log(`${name} is a child`);
// }
// else if (age >= 13 && age <= 19){
//     console.log(`${name} is a teenager`);
// }
// else{
//     console.log(`${name} is an adult`);
// }


// ////The logical operator Or (||)
// //// T or T ==> T
// //// T or F ==> T
// ///  F or F ==> F
// let age = 30;
// let name = 'steve'
// if(age < 16 || age > 65){
//     console.log(`${name} cannot run in race.`);
// }
// else{
//     console.log(`${name} is registered for the race.`);
// }

// ////TERNARY OPERATOR
// //// (condition)?'doc smothing' : 'do smething else"

// /// is the short for for if else statement.
// let id = 50;
// //long form
// if(id == 50){
//     console.log('valid')
// }
// else{
//     console.log('invalid')
// }
// //short for ==> in a single lien

// console.log((id == 50)?'valid':'invalid')

//// Use Switches

// let color = 'red';

// switch(color)
// {// switch starts here

//     case 'red':
//         console.log('You selected the red color');
//         break;
//     case 'blue':
//         console.log('blue color');
//         break;
//     case 'black':
//     console.log('blue black');
//     break;
//     default:
//         console.log('Invalid color');
//         break;
// }// switch ends here

// console.log('outside the switch ')

// let day;
// let currentDate = new Date();

//  switch(currentDate.getDay()){

//     case 0:
//         day= 'Sunday'
//         break;
//         case 1:
//         day= 'Monday'
//         break;
//         case 2:
//         day= 'Tuesday'
//         break;  
//         case 5:
//             day= 'Friday'
//             break;          

//  }
//  console.log(`today is ${day}`)

// ///=================================
// //          Function Expression
// //==================================

// const square =function (x) {  //<===========Declare the function 
//     return x*x;
// }

// const result = square(6); //<============ must be invoked or execute the function

// console.log(result);

// ///=================================
// //  Immidiatley Invokable function expressions  (IIFEs)
// //==================================
// (function()
// {
//     console.log('IIFE ran.')
// }
// )();
// // //==================================
// (function(x,y)
// {
//     console.log(x+y);
// }
// )(4,6);//<==========
// // ///=================================
// // //         Property Methods
// // //==================================
// // Declare car object
// const car= {
//     model:'',
//     start:function () {
//         console.log('start car.')
//     },
//     stop:function(key){
//         console.log(`car stop ${key}`)
//     }
// }
// // invoke the car object
// car.start();
// car.stop(125);
// ///=================================
// //          General Loops
// //==================================
// //For Loop starting number ;  condition; increment 
//  for (let i = 0 ;i < 10; i++  )
//  {

//      console.log(`the value of index is ${i}`)

//  }
//   console.log('outside the for loop')


//   for (let i = 2020 ;i >= 2000; i--  )
//   {
 
//       console.log(`the value of index is ${i}`)
 
//   }
 
//    console.log('outside the for loop')



// for (let i = 2020 ;i >= 2000; i--  )
// {
//     if( i===2010){
//         console.log(`the value of index is ${i}`)
//     }   

// }

//  console.log('outside the for loop')


// //=======================================
// //==============While Loop=================
// //========================================
// let i = 20
// while (i<10){//<============test condition first then execute later
//     console.log(`the value of index is ${i}`)
//      i =i+3
// }
 
// //=======================================
// //==============Do While Loop=================
// //========================================
// let x = 20
// do{ //<==========execute first then test condition later
//     console.log(`the value of index is ${x}`)
//      x =x+3
// }
// while(x<10)

// Loop through arrays

// const cars =['Ford', 'Chevy', 'Honda','Toyota','BMW']

// for(let i = 0; i< cars.length; i++){
//     console.log(cars[i]);
// }

// //=======================================
// //==============FOREACH=================
// // //========================================
// const people =[
//     {
//         name:'smith',
//         age:21
//     },
//     {
//         name:'jon',
//         age:21
//     },
//     {
//         name:'steve',
//         age:21
//     }
// ]

// const cars =['Ford', 'Chevy', 'Honda','Toyota','BMW']
// cars.forEach(function (item,index) {
//     console.log(`the index is ${index} and value is ${item}`)
// })

// people.forEach(function(person,index){
// console.log(person.name)
// })

