import { useState } from "react";

function Display1() {
    const [name, setName] = useState("Demo");

    function changeName(d) {
        setName(d);
        console.log("I'm inside the display 1", { name: d });
    }

    console.log("I'm inside the display 1", { name });

    return (
        <>
            <h1>I'm from display 1 {name}</h1>
            <button onClick={() => changeName("Not demo")}>
                Click here!!!!
            </button>
        </>
    );
}

export default Display1;

/*
import { useState } from "react"

function Display1(){
    const [myName,setMyName]= useState("hello")
  
    // var name="demo"
    //  console.log("im inside the disp1",{name})

    console.log("im inside the disp1",{myName})
    //   function changeName(d){
    //     var name=d
    //      console.log("im inside the disp1",{name})
    // }
    return(
        <>
        <h1>im from dis1{myName}</h1>
<button onClick={()=>{setMyName('not demo')}}>Click here!!!!</button>
</>
    )
}

export default Display1
*/