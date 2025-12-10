import { useContext } from "react";
import { AllDatas } from "../allDatas.jsx";      
import Display6 from "./Display6.jsx";           

function Display5() {
  const { name, val1, arr, person, receive } = useContext(AllDatas);
  const myData = "I'm a child (Display5)";

  return (
    <>
      <h1>Hello {name} {val1}</h1>

      <h3>Array items</h3>
      <ul>
        {arr.map((d, ind) => (
          <li key={ind}>{d}</li>
        ))}
      </ul>

      <h2>{person.name} {person.gender}</h2>

      <button onClick={() => receive(myData)}>Send to parent</button>

      <hr />

      <Display6 />
    </>
  );
}

export default Display5;
