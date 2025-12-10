//Three ways of creating objects in JavaScript

//1. Object Literal Method
//This is the most common and easiest way to create an object in JavaScript.

/*
let person = {
  name: "demo",
  dep: "IT"
}

console.log(person)
console.log(person.name)
console.log(person.dep)
console.log(typeof person)
*/


//2. Using the Object() Constructor

/*
let person = new Object()
person.name = "demo"
person.gender = "male"

console.log(person)
console.log(person.name)
console.log(person.gender)
console.log(typeof person)
*/
//3. Constructor Function (Blueprint for Objects)
//This is used to create multiple objects with the same structure.

function person(name, gender){
    console.log("the val", this.name, name)
    this.name = name;
    this.gender = gender;
}

let p1 = new person("demo", "male")
console.log(p1)
