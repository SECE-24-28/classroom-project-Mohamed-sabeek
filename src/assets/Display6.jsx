import { useContext, useState } from "react";
import { AllDatas } from "../allDatas.jsx";   

function Display6() {
  const { name } = useContext(AllDatas);
  const [myName, setMyName] = useState("Hello");

  return (
    <>
      <h1>I'm Display6: {myName}</h1>
      <h2>Received from GP: {name}</h2>
      <button onClick={() => setMyName("Not demo")}>Click here</button>
    </>
  );
}

export default Display6;
