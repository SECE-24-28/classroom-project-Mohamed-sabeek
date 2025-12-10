import { useState } from "react";

const Display8 = () => {
  const [name, setName] = useState("");
  console.log("The data is:", name);

  return (
    <>
      <h1>I'm from Display8 {name}</h1>

      <input 
        type="text" 
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button onClick={() => setName("")}>Clear</button>
    </>
  );
};

export default Display8;
