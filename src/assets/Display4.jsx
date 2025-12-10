import { useState } from "react";

function Display4(datas) {
  const { val } = datas;

  const [myName, setMyName] = useState("Hello");

  console.log("I'm inside the Display4", { myName });

  return (
    <>
      <h1>I'm from Display4 {myName}</h1>

      <h2>I've received from my grandparent (through parent): {val}</h2>

      <button onClick={() => { setMyName("Not demo"); }}>
        Click here!!!!
      </button>
    </>
  );
}

export default Display4;
