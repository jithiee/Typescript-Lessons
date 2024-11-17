"use strict";
// =================== CHAPTER 1  & 2 ==============================
let username;
let meaningofLife;
let loading;
// it must be any type 
let album;
// union type 
let arr;
let postId;
let isActive;
// regular exprestions 
let re = /\w+/g;
username = 'jithin';
meaningofLife = 298;
loading = true;
//function withh argumnet type difine 
const sum = (a, b) => {
    return a + b;
};
sum(5, 20);
// =================== CHAPTER 3 ==============================
// Array 
let test = []; // any type with array 
let brand = []; // only string type array
brand.push('bmw', 'audi');
let bandId = [1234, 347123, 743695]; // only number type array
// Tuple ==> it use the specific position 
let myTyple = ['dave', 23, true]; //Tuple type
let mixed = ['jithin', 34, false]; // union type 
mixed = myTyple; // we can assign tuple ==> union type 
// myTyple = mixed   // but we can't assign  union type  === tuple
myTyple[1] = 47;
// Object 
let myObj;
// we can define two ways 
myObj = []; //object
myObj = {}; //object
// console.log(typeof myObj);
let brans = ['jthin', 'raju', 'niyas'];
myObj = brans;
// console.log(myObj); // { 0 : 'jithin' , 1 : 'raju' ,  2 : "niyas"}
const exampleObj = {
    props1: 'dave',
    props2: true
};
// exampleObj.props2 = 34 // error
exampleObj.props2 = false;
let person1 = {
    name: 'jtihin',
    active: true,
    album: [2444, 5434, 'ahskdfj']
};
let person2 = {
    name: 'dave',
    active: false,
    album: [73, 46, 'wow']
};
let lion = {
    name: 'broono'
};
// pass an object as an argument in a function 
const greetGritarist = (gtarisht) => {
    console.log(`hello ${gtarisht.name}`);
};
greetGritarist(person1);
