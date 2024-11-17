
// =================== CHAPTER 1  & 2 ==============================
let username : string ;
let meaningofLife : number;
let loading : boolean;

 // it must be any type 
let album : any ;

// union type =======

let arr : number | string | boolean
let postId : number | string 
let isActive : number | boolean 


// regular exprestions =======

let re : RegExp = /\w+/g


username = 'jithin'
meaningofLife = 298
loading = true

//function withh argumnet type difine =========

const sum =(a :number , b : number)=> {
    return a + b
}
sum(5, 20);



// =================== CHAPTER 3 ==============================


// Array ==========

let test = []  // any type with array 
let brand: string[] = []  // only string type array
brand.push('bmw' ,'audi')
let bandId : number[] = [1234 , 347123, 743695] // only number type array

// Tuple ==> it use the specific position ==========

let myTyple : [string , number , boolean] = ['dave', 23 , true] //Tuple type

let mixed = ['jithin' , 34 , false]  // union type 

mixed = myTyple // we can assign tuple ==> union type 
// myTyple = mixed   // but we can't assign  union type  === tuple

myTyple[1] = 47



// Object  ===========

let myObj : object 
// we can define two ways 
myObj = [] //object
myObj = {} //object
// console.log(typeof myObj);

let brans: string[] = ['jthin' , 'raju' , 'niyas']   
myObj = brans
// console.log(myObj); // { 0 : 'jithin' , 1 : 'raju' ,  2 : "niyas"}

const exampleObj ={
    props1 : 'dave' ,
    props2 : true
}

// exampleObj.props2 = 34 // error
exampleObj.props2 = false

// type  ========

type Gitarist ={
    name : string ,
    active : boolean,
    album : (string | number )[]  // the album is an array so we difine an [] this 
 }

let person1 : Gitarist ={
     name : 'jtihin' ,
     active: true , 
     album: [2444, 5434, 'ahskdfj']
}
let person2 : Gitarist ={
     name : 'dave' ,
     active: false , 
     album: [73, 46, 'wow']
}

// console.log(person1 , 'ooo');
// person1 = person2

// console.log(person1);


// ?   ========

type amimal ={
    name:string ,
    active?: boolean ,  // boolean or undefined 

}

let lion ={
    name:'broono'
}
 
// pass an object as an argument in a function 

const greetGritarist = (gtarisht : Gitarist)=>{
      return (`hello ${gtarisht.name}`);

}
// console.log(greetGritarist(person1))
      
// interface  == this same as type  ===========
interface Student {
    name?:string, 
    is_acive : boolean 
}

let stu1: Student = {
    name: 'ravi',
    is_acive: true
  
}
const greetStudent =(student : Student)=>{
    // return `hello ${student.name?.toUpperCase()}`  // if not name value it will show undefinde so this handle with if conition 
    if(student.name){

        return `hello ${student.name.toUpperCase()}`
    }else{
        return 'hellooo'
    }
}
// console.log(greetStudent(stu1));


// Enums =========

// unlike most typescript feature , Enums are not a type-level additional to js but somthing added to the language and runtime 

enum Grad {
    // it start 1 to so on if i chage the U vale 3 it start with 3  

    U = 3 , 
    // U , 
    D,
    B,
    A,
    R,
}
// console.log(Grad);


// =================== CHAPTER 4 ==============================

// Type Aliases ==========

type  stringOrNumber = string | number
type stringOrNumberArray = (string | number )[]

type Employee = {
    name: string ,
    emp_id : stringOrNumber ,
    album : stringOrNumberArray
}

type user_id = stringOrNumber

// interface Post_Id =  stringOrNumber  // erorr cant use it aliases in interface 


// Literal type ==========

// only assign the its own same value eg:
let myName :'jithin'
// myName = 'raju'  // erorr
let usernames : 'raju' | 'niyas' | 'anni'
username = 'anni'

// Functions ==========

const add = (a : number , b : number): number =>{
       return a + b

}
// console.log(add(3, 5));

// void ===
const logMsg = (message: any): void =>{
    console.log(message );    
}
// logMsg('heeloww')
// logMsg(add(3, 50))

// =======
const subscration = function (c:number , d: number): 
number{
   return c - d
} 
// console.log(subscration(10 , 5));

//========


// type mathFunctin = (a: number , b : number) => number 
interface mathFunctin {
    (a : number , b : number ): number
}

let multy: mathFunctin = function ( c ,d ){
    return c * d
}

// logMsg(multy(500 , 5))

// optional  parameters  =======

const addAll = (a: number , b: number , c?: number): number =>{
    if( c !== undefined){
        return a + b + c
    }else{
        return a + b 
    }

}

// console.log(addAll(2, 4 ,3));
// console.log(addAll(2, 4 ));


// default value parameter =======

const sumAll = (a : number = 10 , b : number , c: number = 2): number =>{
    return a+ b+ c
}
// console.log(sumAll(2, 5,10));
// console.log(sumAll(1, 5));
// console.log(sumAll(undefined , 5));

// Rest parameters ====

const totaOafArray = (...nums: number[]): number =>{
   return nums.reduce((prev, curr) => prev + curr)
}
console.log(totaOafArray(1,2,3,4)) // we no need to the arrgument [1,2,3,4] like this 

//default value with Rest parameters ====
const total = ( a:number, ...nums: number[]): number =>{
    return a + nums.reduce((prev, curr) => prev + curr)
 }
 console.log(total(10 ,2,3))
