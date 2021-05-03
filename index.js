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

setTimeout(function(){
    console.log("Message is Delayed for 5sec")
},5000);

