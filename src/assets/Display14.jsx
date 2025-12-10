import { useState } from "react";

const Display14 = () => {
  const [name, setName] = useState("");

  function info(e) {
    e.preventDefault(); 
    console.log("My name is:", name);
  }

  return (
    <>
      <h1>I'm from Display14</h1>

      <form onSubmit={info}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input type="submit" value="click here!!!!" />
      </form>
    </>
  );
};

export default Display14;
