//A Promise

/*
let myPromise = new Promise((resolve, reject) => {
  let isTrue = false;

  if (isTrue) {
    resolve();
  } else {
    reject();
  }
});

myPromise
  .then(success)
  .catch(fail);

function success() {
  console.log("done!....................");
}

function fail() {
  console.log("not done");
}
*/

//Advanced promise method by passing the data inside resolve() 

/*
let myPromise= new Promise((resolve,reject)=>{
    let isTrue=true
    if(isTrue)
    {
      resolve(1000)
    }
    else 
      reject()
  })

  myPromise.then((data)=>{ console.log("done!....................",data)})
  .catch(()=>{console.log("not done")} )

  // function success(){
  //   console.log("done!....................")
  // }

  // function fail()
  // {
  //   console.log("not done")
  // }
  */

  
//Wrapping the promise inside the function

/*
function display() {
  return new Promise((resolve, reject) => {
    let isTrue = true;
    if (isTrue) {
      resolve(1000);
    } else {
      reject();
    }
  });
}

display()
  .then((data) => {
    console.log("done!....................", data);
  })
  .catch(() => {
    console.log("not done");
  });
*/



function display() {
  return new Promise((resolve, reject) => {
    let isTrue = true;
    if (isTrue) {
      resolve(1000);        // success: pass value 1000
    } else {
      reject("bye");        // failure: pass reason "bye"
    }
  });
}

// async function that waits for display() to finish
async function show() {
  try {
    const res = await display();   // wait for the promise to resolve
    console.log(res);              // prints 1000 when resolved
  } catch (err) {
    console.log("the pb", err);    // prints the rejection reason when rejected
  }
}

show();
