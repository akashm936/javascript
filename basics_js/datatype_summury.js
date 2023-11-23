// primitive datatypes

// 7 types =>  String, Number, Boolean, null, undefined, symobol, BigInt


const score = 100
const scorevalue = 100.45

const isloggedIn = false
const outsideTemp = null  //return datatype is object becouse null is object

let username;

const id = Symbol("123")
const newid = Symbol("123")

console.log(id === newid);


const Bignumber = 94545734805704n


// Reference (Non-Primitive)

//  Array, Object, Function

const newtmkoc = ["jethala", "tarakh", "iyyer", "bhide"];  //Array defined  //return datatype is object


let newobject1 = { //return datatype is Object
    name: "akash",
    age: 22,
}  // this defined object syntax

const newFunction = function(){  //return data type is object function not only object
    console.log("Hello World");
}

console.log(typeof isloggedIn);


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// type of memory in javascript
// stack (primitive)  Heap (Non-primitive)

// let myname = "Akash"

// let mynewname = myname  
// mynewname = "Prakash" // they are not change the original value

// console.log(myname);
// console.log(mynewname);
// in stack storage the original value can't change

// Non-primitive

let userOne = {
    email: "akash@gmail.com",
    name: "akash"
}

let userTwo = userOne

userTwo.email = "akm@gmail.com"


console.log(userTwo);
console.log(userOne);
 //in the heap storage the original value will be change