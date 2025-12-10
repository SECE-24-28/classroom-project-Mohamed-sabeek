import { useState } from "react";

const Display15 = () => {
  const [student, setStudent] = useState({
    username: "",
    email: ""
  });


  const change = (e) => {
    const { name, value } = e.target;

    setStudent((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <>
      <h1>
        I'm from Display15 — {student.username} {student.email}
      </h1>

      <input
        name="username"
        value={student.username}
        onChange={change}
        placeholder="Username"
      />

      <br />

      <input
        name="email"
        value={student.email}
        onChange={change}
        placeholder="Email"
        type="email"
      />
    </>
  );
};

export default Display15;
