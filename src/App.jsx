//import Display from "./assets/Display"
/*
import Display from "./assets/Display1"

function App() 
{
 var  name="demo";
 var val1=23;
 const arr=[12,23,34]
 const person={name:"sai", gender:'male'}
  return (
    <>
     <h1> welcome</h1>
     <Display name={name} a={val1} arr={arr} obj={person}/>
     </>
  )
}
export default App
*/

/*
import { useState } from "react";
import Display from "./assets/Display2"

function App() 
{
  const [data,setData]=useState();
  var name="hello"
  var val1=23
  var arr=[12,34,5]
  const person={name:"sai",gender:"male"}
  const receive=(d)=>{
  console.log("got it",d)
  setData(d)
 }
  return (
    <>
     <h1> welcome  </h1>
     <h1> i've recevied from parent. {data}</h1>
    <Display name={name} a={val1} arr={arr} obj={person}  receive={receive}/>
    </>
  )
}

export default App
*/

/*
import { useState } from "react";
import Display3 from "./assets/Display3";   // imported Display3
import Display4 from "./assets/Display4";   // you can also use Display4 here if needed

function App() {
  // initialize with empty string so UI shows nothing instead of "undefined"
  const [data, setData] = useState("");

  const name = "Hello I'm the parent";
  const val1 = 23;
  const arr = [12, 34, 5];
  const person = { name: "sai", gender: "male" };

  const receive = (d) => {
    console.log("got it", d);
    setData(d);
  };

  return (
    <>
      <h1>Welcome</h1>

      <h2>I've received from child: {data}</h2>
      <h3>--------------------------</h3>

      <Display3 name={name} a={val1} arr={arr} obj={person} receive={receive} />

     
    </>
  );
}

export default App;
*/

/*
import { useState } from "react";
import { AllDatas } from "./allDatas.jsx";
import Display5 from "./assets/Display5.jsx";   // <-- updated path to assets

function App() {
  const [data, setData] = useState("");

  const name = "Hello I'm the parent";
  const val1 = 23;
  const arr = [12, 34, 5];
  const person = { name: "sai", gender: "male" };

  const receive = (d) => {
    console.log("got it", d);
    setData(d);
  };

  return (
    <AllDatas.Provider value={{ name, val1, arr, person, receive }}>
      <h1>Welcome</h1>
      <h2>I've received from child: {data}</h2>
      <Display5 />
    </AllDatas.Provider>
  );
}

export default App;
*/



//import Display7 from "./assets/Display7.jsx";   
//import Display8 from "./assets/Display8.jsx";   
//import Display9 from "./assets/Display9.jsx";   
//import Display10 from "./assets/Display10.jsx";   
//import Display11 from "./assets/Display11.jsx";   
//import Display12 from "./assets/Display12.jsx";   
//import Display13 from "./assets/Display13.jsx";   
//import Display14 from "./assets/Display14.jsx";   
//import Display15 from "./assets/Display15.jsx";   

import Display16 from "./assets/Display16.jsx";   

function App() {
  return (
    <>
      <h1>Welcome</h1>
      <Display16 />
    </>
  );
}

export default App;


//Registrationform using useState
/*
import RegistrationForm from "./RegistrationForm";

function App() {
  return (
    <div>
      <RegistrationForm />
    </div>
  );
}

export default App
*/