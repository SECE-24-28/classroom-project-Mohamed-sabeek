import { useRef, useState } from "react";

const Display9 = () => {
  const [name, setName] = useState("");
  const input = useRef();

  const view = () => {
    console.log("The data is:", input.current.value);
    setName(input.current.value);
  };

  return (
    <>
      <h1>I'm from Display9: {name}</h1>

      <input type="text" ref={input} />

      <button onClick={view}>Click</button>
    </>
  );
};

export default Display9;
