import { useEffect, useState } from "react";

const Display10 = () => {
  const [data, setData] = useState(100);

  useEffect(() => {
    console.log("useEffect ran. Current data:", data);
  });

  return (
    <>
      <h1>I'm from Display10</h1>
      <h2>The data: {data}</h2>

      <button
        onClick={() => {
          setData((t) => t + 1);
        }}
      >
        Increment
      </button>
    </>
  );
};

export default Display10;
