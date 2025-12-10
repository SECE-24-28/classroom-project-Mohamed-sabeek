import { useState } from "react";

const Display7 = () => {
  const [name, setName] = useState("");
  console.log("The data is:", name);

  return (
    <>
      <h1>I'm from Display7 {name}</h1>
      <input 
        type="text" 
        onChange={(e) => setName(e.target.value)} 
      />
    </>
  );
};

export default Display7;
