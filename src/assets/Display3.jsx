import Display4 from "./Display4";

function Display3(datas) {

  const myData = "I'm a child";

  const { name, a, arr, obj, receive } = datas;

  return (
    <>
      <h1>Hello {name} {a}</h1>
      <h2>{arr}</h2>

      <h3>Array datas</h3>
      <ul>
        {
          arr.map((d, ind) => {
            return (
              <li key={ind}>{d}</li>   
            );
          })
        }
      </ul>

      <h2>{obj.name} {obj.gender}</h2>
      <h2>I'm from Display3</h2>


      <button onClick={() => { receive(myData); }}>
        Send to parent
      </button>

      <h3>--------------------------</h3>


      <Display4 val={name} />
    </>
  );
}

export default Display3;
