function Display2(datas){
    const myData="I'm a child"
   const {name,a, arr,obj,receive} =datas
    return(
         <>
        <h1>Hello {name} {a}</h1>
        <h2>{arr}</h2> 
        <h2>Array datas</h2>
        
         <ul>
            {
                arr.map((d,ind)=>{
                    return (
                        <li key={ind}>{d}</li>
                    )
                })
            }
         </ul>


        <h2>{obj.name} {obj.gender}</h2>
        <h2>I'm from display</h2>
          <button onClick={()=>{receive(myData) }}>Send to parent</button>
        </>
    )
}
export default Display2