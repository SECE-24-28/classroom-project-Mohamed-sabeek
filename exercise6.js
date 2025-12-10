//1. Spread Operator for Objects → {...object}

/*
var person={
    name:"demo",
    gender:"male",
    mobile:1232
}
var address={
    doorNo:12,
    city:"cbe"

}
var info={...person,...address}
console.log(info)
const {name,mobile}=person
console.log(name,"..........",mobile)
*/

//2. Object Destructuring

/*
var person={
    name:"demo",
    gender:"male",
    mobile:1232
}
var address={
    doorNo:12,
    city:"cbe"

}

console.log(person)
console.log(person.name)
*/

//3. Copying an Object with Spread

/*
var person={
    name:"demo",
    gender:"male",
    mobile:1232
}
var address={
    doorNo:12,
    city:"cbe"

}
var info={...person,...address}
console.log(info)
var copyData={...person}
console.log(copyData)
*/

//4. Spread Operator for Arrays → [...a, ...b]

/*
var a = [1,2,3]
var b = [10,11,12]

var res = [...a, ...b]
console.log(res)
*/

//5. Rest Parameter (...a)

1
function add(...a)
{
s=0
    for(let i of a)
        s=s+i
    console.log(s)
}
add(1)
add(1,345)
add(1,435,4543,345)
add(1,234,435,3453,5345,3333)
add(1,234,34,24)
add()
