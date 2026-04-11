  import React,{useState} from 'react'

 function Fa(){
    const[no,setno]=useState(0)
    const[result,setresult]=useState(0)
    const handle= async ()=>{
        const response=await fetch('http://localhost:4500/ar',{
            method: 'POST',
            headers : {'Content-Type':'application/json'},
            body:JSON.stringify({no})
        });
        const data=await response.json();
        setresult(data.result)
    };

    return(
    <div>
        
            no : <input type='number' onChange={(Event)=>{setno(Event.target.value)}}/><br></br>
              
             <button onClick={handle}>
                submit
             </button>
        <h1>{result}</h1>
    </div>)
 }
 
 export default Fa