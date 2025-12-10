import { useState } from "react";

const Display13 = () => {
  const [data, setData] = useState(["1", "2"]);
  const [count, setCount] = useState(3);

  function addItem() {
    const item = count;

   
    setData((prev) => {
      return [...prev, item];
    });

  
    setCount((t) => t + 1);
  }

  return (
    <>
      <h1>I'm from Display13</h1>

      <button onClick={addItem}>Add</button>

      <ul>
        {data.map((d, index) => (
          <li key={index}>{d}</li>
        ))}
      </ul>
    </>
  );
};

export default Display13;
