import { useState } from "react";

const Display11 = () => {
  const [student, setStudent] = useState({
    name: "Nandhini",
    gender: "Female",
    mobile: 12222222,
  });

  function updateName() {

    setStudent({
      ...student,
      name: "Sabee"   
    });
  }

  return (
    <>
      <h1>Name: {student.name}</h1>
      <h1>Gender: {student.gender}</h1>
      <h1>Mobile: {student.mobile}</h1>

      <button onClick={updateName}>Change Name</button>
    </>
  );
};

export default Display11;
