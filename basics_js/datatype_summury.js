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