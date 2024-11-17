
// =================== CHAPTER 1  & 2 ==============================
let username : string ;
let meaningofLife : number;
let loading : boolean;

 // it must be any type 
let album : any ;

// union type 
let arr : number | string | boolean
let postId : number | string 
let isActive : number | boolean 


// regular exprestions 
let re : RegExp = /\w+/g


username = 'jithin'
meaningofLife = 298
loading = true

//function withh argumnet type difine 

const sum =(a :number , b : number)=> {
    return a + b
}
sum(5, 20);



// =================== CHAPTER 3 ==============================


// Array 

let test = []  // any type with array 
let brand: string[] = []  // only string type array
brand.push('bmw' ,'audi')
let bandId : number[] = [1234 , 347123, 743695] // only number type array

// Tuple ==> it use the specific position 

let myTyple : [string , number , boolean] = ['dave', 23 , true] //Tuple type

let mixed = ['jithin' , 34 , false]  // union type 

mixed = myTyple // we can assign tuple ==> union type 
// myTyple = mixed   // but we can't assign  union type  === tuple

myTyple[1] = 47



// Object 
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

// type

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


// ?   

type amimal ={
    name:string ,
    active?: boolean ,  // boolean or undefined 

}

let lion ={
    name:'broono'
}
 
// pass an object as an argument in a function 

const greetGritarist = (gtarisht : Gitarist)=>{
      console.log(`hello ${gtarisht.name}`);

}
greetGritarist(person1)
      
// interface  == this same as type 
interface Student {
    name:string,
    age: number , 
    is_acive : boolean 
}





