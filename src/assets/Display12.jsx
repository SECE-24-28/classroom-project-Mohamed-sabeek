import { useState } from "react";

const Display12 = () => {
  const [student, setStudent] = useState({
    name: "Nandhini",
    gender: "Female",
    mobile: 12222222
  });

  console.log("The current state:", student);

  function updateName() {

    setStudent((previousData) => {
      console.log("Previous data:", previousData);

      return { ...previousData, name: "Sabee", mobile: 9585524527 };
    });
  }

  return (
    <>
      <h1>name: {student.name}</h1>
      <h1>gender: {student.gender}</h1>
      <h1>mobile: {student.mobile}</h1>
      <button onClick={updateName}>change name</button>
    </>
  );
};

export default Display12;
