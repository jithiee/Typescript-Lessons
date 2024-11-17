"use strict";
// =================== CHAPTER 1  & 2 ==============================
let username;
let meaningofLife;
let loading;
// it must be any type 
let album;
// union type =======
let arr;
let postId;
let isActive;
// regular exprestions =======
let re = /\w+/g;
username = 'jithin';
meaningofLife = 298;
loading = true;
//function withh argumnet type difine =========
const sum = (a, b) => {
    return a + b;
};
sum(5, 20);
// =================== CHAPTER 3 ==============================
// Array ==========
let test = []; // any type with array 
let brand = []; // only string type array
brand.push('bmw', 'audi');
let bandId = [1234, 347123, 743695]; // only number type array
// Tuple ==> it use the specific position ==========
let myTyple = ['dave', 23, true]; //Tuple type
let mixed = ['jithin', 34, false]; // union type 
mixed = myTyple; // we can assign tuple ==> union type 
// myTyple = mixed   // but we can't assign  union type  === tuple
myTyple[1] = 47;
// Object  ===========
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
    return (`hello ${gtarisht.name}`);
};
let stu1 = {
    name: 'ravi',
    is_acive: true
};
const greetStudent = (student) => {
    // return `hello ${student.name?.toUpperCase()}`  // if not name value it will show undefinde so this handle with if conition 
    if (student.name) {
        return `hello ${student.name.toUpperCase()}`;
    }
    else {
        return 'hellooo';
    }
};
// console.log(greetStudent(stu1));
// Enums =========
// unlike most typescript feature , Enums are not a type-level additional to js but somthing added to the language and runtime 
var Grad;
(function (Grad) {
    // it start 1 to so on if i chage the U vale 3 it start with 3  
    Grad[Grad["U"] = 3] = "U";
    // U , 
    Grad[Grad["D"] = 4] = "D";
    Grad[Grad["B"] = 5] = "B";
    Grad[Grad["A"] = 6] = "A";
    Grad[Grad["R"] = 7] = "R";
})(Grad || (Grad = {}));
// interface Post_Id =  stringOrNumber  // erorr cant use it aliases in interface 
// Literal type ==========
// only assign the its own same value eg:
let myName;
// myName = 'raju'  // erorr
let usernames;
username = 'anni';
// Functions ==========
const add = (a, b) => {
    return a + b;
};
// console.log(add(3, 5));
// void ===
const logMsg = (message) => {
    console.log(message);
};
// logMsg('heeloww')
// logMsg(add(3, 50))
// =======
const subscration = function (c, d) {
    return c - d;
};
let multy = function (c, d) {
    return c * d;
};
// logMsg(multy(500 , 5))
// optional  parameters  =======
const addAll = (a, b, c) => {
    if (c !== undefined) {
        return a + b + c;
    }
    else {
        return a + b;
    }
};
// console.log(addAll(2, 4 ,3));
// console.log(addAll(2, 4 ));
// default value parameter =======
const sumAll = (a = 10, b, c = 2) => {
    return a + b + c;
};
// console.log(sumAll(2, 5,10));
// console.log(sumAll(1, 5));
// console.log(sumAll(undefined , 5));
// Rest parameters ====
const totaOafArray = (...nums) => {
    return nums.reduce((prev, curr) => prev + curr);
};
// console.log(totaOafArray(1,2,3,4)) // we no need to the arrgument [1,2,3,4] like this 
//default value with Rest parameters ====
const total = (a, ...nums) => {
    return a + nums.reduce((prev, curr) => prev + curr);
};
//  console.log(total(10 ,2,3))
// union type in parameter 
// never type 
//  const numberOrString = (value: number | string):  1:37:00
//  string =>{
//      if ( typeof value == 'string')  return  'string'
//      if ( typeof value == 'number')  return  'number'
//  }  
// return boolean 
// custome type 
const is_number = (value) => {
    return typeof value == 'number' ? true : false;
};
// console.log(is_number('5'));
// console.log(is_number(5));
// =================== CHAPTER 5 ==============================
// type Assertion or type Casting   =====
