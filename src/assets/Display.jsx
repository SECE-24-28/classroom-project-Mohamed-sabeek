function Display(datas) {
   const {name, a, arr, obj} = datas;

   return (
     <>
        <h1>Hello {name} {a}</h1>

        <h2>{arr}</h2> 

        <h2>Array datas</h2>

        <ul>
            {
                arr.map((d) => {
                    return (
                        <li>{d}</li>
                    )
                })
            }
        </ul>

        <h2>{obj.name} {obj.gender}</h2>

        <h2>I'm from display</h2>
     </>
   )
}

export default Display;
