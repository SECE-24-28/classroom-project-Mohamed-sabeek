//Asynchronous JavaScript using setTimeout

console.log("hai1");

setTimeout(() => {
  console.log("hello");
}, 2000);

console.log("hai3");

function display() {
  console.log("im inside the method");
  setTimeout(() => {
    console.log("im inside the timer");
  }, 3000);
}

display();
console.log("bye");
