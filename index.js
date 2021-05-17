// // Example1
// var a;
 
// console.log(a);

// //console.log(b); //Uncaught ReferenceError: b is not defined

// let c;

// console.log(c); 

// //const d;
//   const d=100; 


//**** Example 2 let****/

// let myNumber= 9866265716;
// console.log(myNumber);

//DECLARATION//
// let myString;
// console.log(myString);

//ASSIGNMENT//
// myString="Ayub Shrestha ko number";
// console.log(myString);

//RE-ASSIGNMENT//
// myString= "New Value fr myString";
// console.log(myString);

// ***Example 3 Var ****//

// var myNumber= 9866265716;
// console.log(myNumber);

// //DECLARATION//
// var myString;
// console.log(myString);
// //ASSIGNMENT//
// myString="Ayub Shrestha ko number";
// console.log(myString);
// //RE-ASSIGNMENT//
// myString= "New Value fr myString";
// console.log(myString);


// //**EXAMPLE 4 'CONST' */

// const myBoolean = true;
// console.log(myBoolean);

// myBoolean = false;
// console.log(myBoolean);

//  const myObject= {};
//  console.log(myObject); 
 
//  let x=10;
//  const y=true;
//  const myObject = {
//      a:x,
//      b:y};
// console.log(x);
// x=20;
//  let anotherObject;
//  anotherObject = {newA:x, b:y,c: myObject}
//  console.log(x);
//  console.log(y);
//  console.log(myObject);
//  console.log(anotherObject);

//  let a=20;
//  a=true;
//  a="That's a string";
//  a=null;
//  console.log(a);

//  function  b(){
//      console.log("Hey there");  
//  }

//   b();
//  let b=100;
//  b();

// let myVariable;
// console.log(myVariable); //result undefined

// myVariable=10;
// console.log(myVariable); //result 10

// myVariable=true;
// console.log(myVariable); //result true

// myVariable={
//     x: true,
//     y: null
// };
// console.log(myVariable);



// Object;
// console.log(Object);
//  const myCity = {
//      city: "Dharan",
//      popular: true,
//      country: "Nepal"
//  };

//  console.log(myCity.city); //result Dharan
//  console.log(myCity.popular); //result true

//  myCity.city= "Lalitpur";
//  console.log(myCity);

//  myCity.green=true;
//  console.log(myCity); 

//  delete myCity.country;
//  console.log(myCity); 

//  myCity["country"]="Nepal"; //updates if the property already exists
//  console.log(myCity);

//  const countryPropertyName="country";
//  myCity[countryPropertyName]="USA";
//  console.log(myCity);

//  myCity["city"]="NewYork"
//  console.log(myCity);


//nested object

// const myCity = {
//     city: "Dharan",
//     info:{  popular: true,
//     country: "Nepal"}
// };

// console.log(myCity);
// console.log(myCity.info.popular);

// myCity.info.popular = false;
// console.log(myCity.info.popular);

// delete myCity.info.popular;
// console.log(myCity);

// let  myPost={};

// myPost.postTitle="Object is reference type";
// myPost.postLikes=0;
// myPost.shared=false;
// console.log(myPost);
// myPost.postLikes=myPost.postLikes+1;
// delete myPost["shared"];
// console.log(myPost);

//  let myObject={
//      a:10
//  };

//  let copyOfmyObject= 
//      myObject
 

//  copyOfmyObject.b=false;

//  console.log(myObject);
//  console.log(copyOfmyObject);

// let myObject={
//     a:true,
//     b:null,
//     c:25
// };

// console.log(myObject.c); 

// const propertyValue="c";
// console.log(myObject["c"]);

// let objectWithNestedObject = {};
// objectWithNestedObject.nestedObject = {};
// objectWithNestedObject.nestedObject.a=null;
// objectWithNestedObject.nestedObject["b"]=true;

// console.log(objectWithNestedObject); 
// const myCity={
//     city: "ktm",
//     cityGreetings: function(){
//         console.log("Greetings")
//     }
// };

// console.log(myCity.cityGreetings);     


// function myFn(a,b){
//     let c;
//     a=a+1;
//     c=a+b;
//     return c;
// }

// console.log(myFn(41,12)); //54

// Simplest function inJS //

// function myFn() {}

// console.log(myFn);

// myFn();

// const resultFunction=myFn();
// console.log(resultFunction); //undefined

// console.log(myFn());


/// function eg 2 ///

// function myFunction(a,b){
//     console.log(a);
//     console.log(b);
// }

// myFunction();// undefined undefined

// //myFunction(abc); //abc not found
// myFunction("abc"); //abc, undefined

// myFunction(5,3);

// console.log(myFunction(10,20)); // 10,20, undefined because no return value in function body 



// function mult(x,y,z) {
//         result=x*y*z;
//         console.log(result);
// }

// mult(1,2,3);
// 

// function concatenateString(string1, string2){
//     return string1+string2;
// }
// let string3 = concatenateString("Hello", " World");
// console.log(string3);


// function outerFunction(para1, para2){
//     function innerFunction(para3){
//         return para3*para3;
//     }
//     const sum=para1+para2;
//     const result = innerFunction(sum); 
//     console.log(result);
// }

// // outerFunction(2,3);


// const myFunction= function(a,b){
//     let c;
//     a=a+1;
//     c=a+b;
//     return c;
// }

// let x=myFunction(5,3);
// console.log(x);

// setTimeout(function(){
//     console.log("Message is Delayed for 5sec")
// },5000);




// ARITHMETIC OPERATORS //


// let a,b;
// a = 1;
// b = 2;

// console.log(a + b); //3
// console.log(a * b); //2
// console.log(a / b); //0.5
// console.log(a - b); //-1

// a = "abc";
// b = 5;

// console.log(a + b); //abc5
// console.log(a * b); //NaN
// console.log(a / b); //NaN
// console.log(a - b); //NaN


// // UNARY PLUS
// let c="1";
// console.log(+c); // number1

// c="undefined"
// console.log(+c); //NaN

// // UNARY MINUS

// c="5";
// console.log(-c); //-5
// c="abc";
// console.log(-c); //NaN

// BINARY PLUS
// let d=5;
// ++d;
// console.log(d); //6 

// console.log(++d); //7 
// console.log(d++); //7
// console.log(d);   //8


// COMPARISION OPERATORS /// 

// let a,b,c;
// a=5;
// b=7;c=5;

// console.log(a<c);
// console.log(a<=c);
// console.log(a==c);
// console.log(a>=c);


// let myString1, myString2;

// myString1 = "abc";
// myString2 = "bcd";

// console.log(myString2 > myString1); //true

// myString1 = "aabb";
// myString2 = "aabC";

// console.log(myString2 > myString1); //false


// EQUALITY OPERATORS //

// let myString = "0";
// let myNumber = 0;
// let myBoolean = false;

// console.log(myString == myNumber);
// console.log(myString == myBoolean);


// let myVariable1, myVariable2;
// myVariable1 = 100;
// myVariable2 = "200";
// console.log(myVariable1 <= +myVariable2);

// console.log("___________");


// let myNumber1, myNumber2;
// myNumber1 = 22;
// myNumber2 = 5;
// console.log(myNumber1 % myNumber2);

// console.log(100 % 40 % 7);


// console.log("___________");

// console.log(3 || true && null || false);


//"use strict";

// console.log("___________");



// function myFn(){
//     let a=true;
//     console.log(a);
// }

// myFn();
// console.log(a);

// var a=10;
// let b=20;

// console.log(a); //10
// console.log(window.a); //10

// console.log(b); //20
// console.log(window.b); //undefined

// const c = "abc";
// console.log(c); //abc
// console.log(window.c); //undefined


//  function myFunction(b) {
//      console.log(a);
//      console.log(b);
//  }

//  console.log(myFunction); 
//  console.log(window.myFunction);

//  myFunction();


// function sum(a,b){
//     function mult(a,b){
//         return a*b;
//     }
//     const result = mult(a,b);
//     console.log(result);
//     return a+b;
// }

// const result = sum(10,5);
// console.log(result);



// const b = 2;
// let d = 15;

// function myFn1(a){
//     let b = 20;
//     let d = 10;
//     myFn2(b);

// }

// function myFn2(b){
//     let c=5;
//     let a;
//     console.log(a,b,c,d); // undefined 20 5 15 
// }

// myFn1();


// "use strict";

// function myFunction(){
//     let a=2;
//     return a;
// }

// console.log(myFunction()); //2


// setTimeout(function myFn(){
//     console.log("Hello frm myFn function");
// },2000);

// myFn();

//  const myArray = [1, 2, 3, 4]
//  console.log(myArray); // [1, 2, 3, 4]
//  console.log(myArray.length); //4

//  myArray[2] = "abc";
//  console.log(myArray); // [1, 2, "abc", 4]
//  console.log(myArray[2]);

//  myArray[5] = true;
//  console.log(myArray);

// const myArray = [1, 2, 3]
// console.log(myArray);

// myArray.push(4, 5, 8, true);
// console.log(myArray);

// myArray.pop();
// console.log(myArray);

//  myArray.pop();
// console.log(myArray);

// let removedElement = myArray.pop();
// console.log(myArray);
// console.log(removedElement); 

// const myArray = [];
// console.log(myArray);


// const myArray1 = [1, 2, 3];
// const myArray2 = [1, 2, 3];

// console.log(myArray1 === myArray2);


// const myArray = [true, null];

// myArray.unshift("Hello");
// myArray.unshift(100);

// console.log(myArray);


// const myArray = [1, 2];
// myArray[10] = "abc";
// console.log(myArray);

// console.log(myArray.length);

// const arrayOfCars = [
//     {
//         carBrand : "Toyota",
//         price: 12000
//     },
//     {
//         carBrand : "Tesla",
//         price: 15000
//     },
//     {
//         carBrand : "Hyundai",
//         price: 10000
//     }
// ];

// console.log(arrayOfCars);

// arrayOfCars.push({
//     carBrand: 'Suzuki',
//     price: 110000
// })

// console.log(arrayOfCars);

//  const myArray = [true,"abc", 10];
//  for(let i=0; i<=2; i++)
//  {
//      console.log(myArray[i]);
//  }


//  const myObject = {
//      a: "abc",
//      b: true,
//      c: null,
//      d: 150
//  };

//  for(let key in myObject){
//      console.log(key);
//      console.log(myObject[key]);
//  }


// const myNumbers = [ 2355, 7235, 8135, 1762, 2361, 8351];

// let newRandomNumber;
// let min = 1000;
// let max = 9999;
// function getRandomInt(min, max){
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     var newRandomNumber = Math.floor(min + Math.random() * (max - min));
//     return(newRandomNumber);
// }

// // getRandomInt(min, max)

// if(newRandomNumber != myNumbers)
// {
// console.log(newRandomNumber);
// }
// else
// {
//      getRandomInt(min, max)
// }

// const myArray = [];
//  myArray.push(20, false, true, 55);
//  console.log(myArray);
//  removedElement = myArray.pop();
//  console.log(removedElement);
//  console.log(myArray);

//  console.log(typeof 10);
//  console.log(typeof false);
//  console.log(typeof "abc");
//  console.log(typeof null);

//  const myVariable = 1234;
//  console.log(typeof myVariable);


//  const myArray = [33, "abc", true];
//  console.log(typeof myArray[2]);


// //  console.log(typeof myObject);

// // const a = "abc";
// // if(typeof a === "number")
// // {
// //     alert("It is a number");
// // }
// // else{
// //     alert("It is not a number");
// // }

// const x = 22;
// console.log(x instanceof Number);

//  const myObject = {
//      string1 = "abcd",
//      number1 = 22,
//      number2 = null
//  };
// console.log(myObject instanceof Boolean);


// const myArray = [1, 2];
// if (myArray instanceof Array)
// {
//     console.log("It is an array");
// }

// const myArray = new Array(1, 2, 3);
// console.log(myArray);

// var myString1 = new String("abc");
// let x = myString1.toUpperCase();
// console.log(x); 

// const myString3 = "abc";
// console.log(myString3);

// // myString3.toUpperCase(myString3);
// // consoles.log(myString3);

// // let uppercase = myString3.toUpperCase();
// console.log(myString3.toUpperCase());


// const myObject = new Object({a : 10, b : null});
// console.log(myObject);
// const myFunction = new Function();

// console.log(typeof myObject);
// console.log(typeof myFunction);

// console.log(myObject instanceof Object);
// console.log(myFunction instanceof Function);

// let x;
// let y;
// function myFn(a, b) {
    
//     return a+b;
// }
// // console.log(myFn(30,40));

// myFn(30,40);

// console.log("GLOBAL EXECUTION CONTEXT");
// let a = 10;
// console.log(a);

// function myFunction(x, y){
//     console.log("FUNCTION EXECUTION CONTEXT");
//     return x + y;
// }

// console.log(myFunction(2,3));

// console.log("Global Execution Context - Root Level");

// function firstLevel(){
//     console.log("Function Execcution Context - First Level");

//     function secondLevel(){
//         console.log("function Execution Context - Second Level");
    

//         function thirdLevel(){
//             console.log("Function execution context - Third Level");
//         }
//         thirdLevel();
//     }
//     secondLevel();
// }
 
// firstLevel();

// "this" inside of the methods of the object

// const myObject = {
//     name : "Ayub",
//     age : 23,
//     greetings : function() {
//         console.log(this);
//         console.log("Name of the person is " + this.name +" and age is" +this.age);
//     }
// };
// console.log(myObject.name);
// myObject.greetings();

// call method - custom "this"

// const myObject = {
//     a: 10,
//     b: null
// };
// function myFunction(){
//     console.log(this);
// }

// myFunction();
// myFunction.call(myObject);

// call method - custom "this" and arguments

// const myObject = {
//     a: 10,
//     b: null
// };

// function myFunction(a, b) {
//     console.log(a + b);
//     console.log(this);
// }

// myFunction();

// myFunction.call(myObject, 10, 3);

// CALL - call method of the object with other object as "this"

// const person1 = {
//     city: "Dharan",
//     name: "Ayub",
//     info: function(){
//         console.log(this.name + " lives in " + this.city);
//     }
// };

// const person2 = {
//     city: "Pokhara",
//     name: "Ballu"
// };

// person1.info(); // Ayub lives in Dharan
// person1.info.call(person2); // Ballu lives in Pokhara 


// BIND 

// const myObject = {
//    a: 10,
//    b: null 
// };

// function myFunction(a, b) {
//     console.log(a + b);
//     console.log(this);
// }

// const customFunction1 = myFunction.bind(myObject, 10, 3);
// customFunction1();

// const customFunction2 = myFunction.bind(myObject);
// customFunction2(20, 6);

// const customFunction3 = myFunction.bind(myObject, 20);
// customFunction3(40);


// pass by value

// function myFunction(parameterA, parameterB){
//     parameterA = "Namaste ";
//     parameterB = "Nepal";
//     return parameterA + parameterB;
// }
// let x = "Hello";
// let y = "World";
// console.log(myFunction(x, y));
// console.log(x,y);


// // pass by reference

// const myArray = [1, 2, 3];
// console.log(myArray);

// function myFunction(myArray2){
//     myArray2.push(4);
//     console.log(myArray2);
//    // return myArray2;
// }

// myFunction(myArray);
// console.log(myArray);

// function addCustomGlobalMethod(globalObject) {
//     globalObject.customMethod = function(){
//         console.log("Greetings from the custom method");
//     }

// }

// addCustomGlobalMethod(this);
// this.customMethod();
// customMethod();



// function waitingFn(timeInMs){
//      const futureTime = Date.now() + timeInMs;
//      while(futureTime > Date.now()){
//          //wait...
//      }
// }

// waitingFn(5000);
// console.log("Function call just ended");

// setTimeout(() => console.log("Callback is executed"), 3000);

// function waitingFn(timeInMs){
//     const futureTime = Date.now() + timeInMs;
//     while(futureTime > Date.now()){
//         //waitinggggg.........
//     }
//     console.log("Executed after 5 seconds")
// }

// setTimeout(() => console.log("CAll back is executed"),2000);

// waitingFn(5000);

// // setTimeout(() => console.log("CAll back is executed"),2000);
// console.log("Last statement in the global execution");




// function outerFunction(){
//     const x = 10;
//     function innerFunction(b){
//         return x+b;
//     }

//     return innerFunction;
// }

// const res = outerFunction();

// console.log(res(20));


// function outerFunction(mult){
//     const a =10;

//     function innerFunction(b){
//         return (a+b) * mult;
//     }

//     return innerFunction;
// }

// const res1 = outerFunction(2);
// console.log(res1(20));


// const res2 = outerFunction(3);
// console.log(res2(20));



//re declaration

// let d = false;
//  d = true;
// console.log(d);

// function fn(){
//      let d = null;
//     console.losg(d);
// }

// fn();

// console.log(d);


// var a,b,d;
// a = "ayub";
// b = "dharan";

// function test(x,y){
//     d= "Hello " + x + " from " + y;
//     return d;
// }

// console.log(test(a,b));

 //challenge

//  numbers = [23, 87, 110, 11, 20, 5, 34];
//  numbers2 = [11, 21, 31];

//  var onlyOddNumers = function(arr) {
//      oddNumbers = [];
//      even_numbers_quantity = 0;
//      len = arr.length;

//      for(i = 0; i<len; i++){
//          arr[i] % 2
//          ? oddNumbers.push(arr[i])
//          : even_numbers_quantity++;
//      }

//      var info;
//      if(even_numbers_quantity === 0){
//          info = "Array contains only odd numbers";
//          console.log(info);
//      }
//      else{
//          info = "There are " + even_numbers_quantity + " even numbers";
//      }


//  "use strict"

//  const numbers1 = [23, 87, 110, 11, 20, 5, 34];
//  const numbers2 = [11, 21, 31];

//  var onlyOddNumbers = function(arr){
//      var oddNumbers = [];
//      var even_numbers_quantity = 0;
//      const LEN = arr.length;

//      for(let i = 0; i<LEN; i++){
//          arr[i] % 2
//          ? oddNumbers.push(arr[i])
//          : even_numbers_quantity++;
//      }

//      if(even_numbers_quantity === 0){
//          let info = "Array contains only odd numbers";
//          console.log(info);
//      }

//      else{
//          let info = "There are " + even_numbers_quantity + " even numbers.";
//          console.log(info);
//      }

//      return {
//          oddNumbers : oddNumbers,
//          even_numbers_quantity : even_numbers_quantity
//      };
//  };

//  console.log(onlyOddNumbers(numbers1));


// const menuItems = document.querySelectorAll(".nav-link");
// const LEN = menuItems.length;

// for(let i=0; i< LEN; i++){
//     const menuItem = menuItems[i];

//     menuItem.onclick = function(){
//         for(let j=0; j<LEN; j++){
//             menuItems[j].classList.remove("active");
//         }

//         menuItem.classList.add("active");
//         console.log(menuItem.innerHTML);
//     };
// }

// //anonymous function expression

// function (a,b) {
//     return a+b;
// }

// (a,b) => a + b


// const sum = (a,b) => a + b;
// console.log(sum(1,1));

// const post = {
//     title: "Sample Title",
//     comments: 3,
//     shared: true,
//     published: true,
//     postID: 5134
// }

// const processedPost = (post) => {
//     return {
//         title: post.title,
//         comments: post.comments,
//         popular: post.comments > 5 ? true : false
//     }
// };
// console.log(processedPost(post));


// const processedPost = function(posts){
//     return{
//         title: post.title,
//         comments: post.comments,
//         popular: post.comments > 5 ? true : false
//     }
// };
// console.log(processedPost(post));


// const processedPost = (posts) => 
//     ({
//         title: post.title,
//         comments: post.comments,
//         popular: post.comments > 5 ? true : false
//     }
// );
// console.log(processedPost(post));

// (() => {
//     function greet(){
//         return "Hey what is up dawg!!!"
//     }
//     console.log(this);
//     this.greet = greet;
//     return this;
// })


// const createButton = () => {
//     const btn = document.createElement("button");
//     btn.innerHTML = "Click Me";
    
    
// }
// const createButton = () => {
//     const btn = document.createElement("button");
//     let clickQty = 0;
//     btn.innerHTML = "CLick me";
//     btn.onclick = function() {
//         console.log("Button was clicked");
//         btn.innerHTML = "Button was clicked " + ++clickQty + " times";
//     };

//     document.body.appendChild(btn);
// }

// createButton();

 

// const myArray = [1, "ayub", true];
// const LEN = myArray.length;

// for(let i =0; i < LEN; i++){
//     console.log(myArray[i]);
// }

// myArray.forEach(element => console.log(element));

// myArray.forEach(function (element){
//     console.log(element);
// });


// const myCities = ["London", "New York", "Singapore"];

// function arrayInfo(){
//     for(let i=0; i < myCities.length; i++){
//         console.log(myCities[i] + " is located at index " + i + " in the myCities array." ) 
//     }
// }

// arrayInfo(myCities);


// const myCities = ["London", "New York", "Singapore"];
// const LEN = myCities.length;

// const arrayInfo = (element, index) => (element + " is located at index " + index + " in myCities array");

// for(let i = 0; i<LEN; i++){
//     console.log(arrayInfo(myCities[i], i));
// }


// myCities.forEach((element, index) => console.log(arrayInfo(element, index)));  

// //map() array helper method
// const myNumbers = [1, 5, 7];

// let mySquareNumbers = myNumbers.map((element => element * element));

// console.log(mySquareNumbers);


  //map() with external function

//   const myNumbers = [1, 5, 7];

//   const squareNUmbers = element => element * element;
  
//   let mySquareNumbers = myNumbers.map(squareNUmbers) ;
//   console.log(mySquareNumbers);


// const postsJSON = [
//     '{"postId" : 1355, "commentsQuanity" : 5}',
//     '{"postId" : 2345, "commentsQuanity" : 25}',
//     '{"postId" : 5135, "commentsQuanity" : 35}',
// ];

// //from the postsJSON array, create "posts" array that wil consists of JS objects
// //for loop
// // var posts = [];
// // for(i = 0; i< postsJSON.length; i++){
// //     posts.push(JSON.parse(postsJSON[i]));
// // }

// // console.log(posts);
// // console.log(posts[0].postId); //1135


// //map()
// const posts = postsJSON.map(JSON.parse);
// console.log(posts);


//  const posts = [ 
//      {postId: 1355, commentsQuantity: 5},
//      {postId: 5131, commentsQuantity: 13},
//      {postId: 6134, commentsQuantity: 2}
//  ];

//  const findSinglePost = (postId, posts) => posts.find(post => post.postID === postId);
//  console.log(findSinglePost(1255, posts)); 

// const myNumbers = [3, 5, 1, 2, 44];

// const isPositiveNumber = element => typeof element === "number" && element > 0;
// console.log(isPositiveNumber(myNumbers));
// console.log(".....................")
// const positiveCheck = myNumbers.every(isPositiveNumber);
// console.log(positiveCheck)

// const a = [5, "abc", 10, 1];
// const b = [4, 10, 14, 25, 25, 50];
// const c = [150, 132, 24, 4];
// const d = [15, 26, 34, 11, 44, 23];

// Create a function "arrayCheck" with one parameter - "inputArray"

// const arrayCheck = (inputArray) => {
//     if(inputArray.some(element => typeof element !== "number"))
//     {
//         return "Some elements are not number"
//     }

//     if(inputArray.every((element, index, array) => index>0
//         ? element >= array[index -1]
//         : true)) {
//             return "Array is sorted in ascending order"
//         }
    
// };

// console.log(arrayCheck(a));
// console.log(arrayCheck(b));


// const a = [1, 2, 3];
// const b = [1, 2, 3]; 

// // const arraysAreEqual = (arrayOne, arrayTwo) => {
// //     for(let i = 0; i < arrayOne.length; i++){
// //         for(let j=0; j< arrayTwo.length; j++){
// //             if(arrayOne[i] === arrayTwo[j]){
// //                 console.log("true");
// //             }
// //             else{
// //                 console.log("false");
// //             }
// //         }
// //     }
// // }

// const c = [2, 1, 3];
// const d = [1, 2, 3, 4];




// const arraysAreEqual = (arrayOne, arrayTwo) => (
//     arrayOne.length === arrayTwo.length && arrayOne.every((element, index) => element === arrayTwo[index])
// )

// console.log(arraysAreEqual(a,b));
// console.log(arraysAreEqual(a,c));


//  const transport = ["Bus", "Car", "Bicycle", "Airplane"];

//  const elementFound = (inputArray, searchElement) => (
//      inputArray.some((element) => element === searchElement)
//     )

//     console.log(elementFound(transport, "Bus"));
//     console.log(elementFound(transport, "Phone"));
     
//  const myArray = [10, "abc", true, undefined, null, [1,2]];
//  console.log(myArray.includes(10));

const tags = [
    ["javascript", "es6"],
    ["css", "flexbox"],
    ["html", "web-browser"]
];

const fruits = [
    {title: "Orange", quantity: 10},
    {title: "Banana", quantity: 5},
    {title: "Apple", quantity: 25}
];

const primitiveTypesArray = [
    25,
    "x",
    true,
    null
];

const elementIsincluded = (searchElement, array) => {
    if(typeof searchElement !== "object") {
        return array.includes(searchElement);
    }
}