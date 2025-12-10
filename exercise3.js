//Passing a function and calling it without parameters
/*
function add(show){
  istrue = true
  if(istrue){
    show()   // call the function
  }
}

console.log("welcome")
add(display)

function display(){
  console.log("it's good")
}
*/

//Passing a function that receives a parameter

function add(display){
  istrue = true
  if(istrue){
    display("nandhini")
  }
}

console.log("welcome")
add(display)

function display(name){
  console.log("it's good", name)
}
