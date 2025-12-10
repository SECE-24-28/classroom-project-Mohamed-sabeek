import { useState } from "react";

const Display16 = () => {
  const [student, setStudent] = useState({
    username: "",
    email: "",
  });

  const change = (e) => {
    const { name, value } = e.target;

    setStudent((prev) => {
      return {
        ...prev,        
        [name]: value,  
      };
    });
  };


  const formSubmit = (e) => {
    e.preventDefault(); 
    console.log("Submitted:", student.username, student.email);
  };

  return (
    <>
      <form onSubmit={formSubmit}>
        <h1>
          I'm from Display16 — {student.username} {student.email}
        </h1>

        <input
          name="username"
          value={student.username}
          onChange={change}
          placeholder="Username"
        />

        <br /><br />

        <input
          name="email"
          value={student.email}
          onChange={change}
          placeholder="Email"
          type="email"
        />

        <br /><br />

        <input type="submit" value="click!!!!!" />
      </form>
    </>
  );
};

export default Display16;
