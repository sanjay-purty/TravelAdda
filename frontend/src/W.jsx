  import React,{useState} from 'react'

 function W(){
    const[fno,setfno]=useState(0)
    const[sno,setsno]=useState(0)
    const[result,setresult]=useState(0)
    const handle= async ()=>{
        const response=await fetch('https://traveladda-1.onrender.com/Add',{
            method: 'POST',
            headers : {'Content-Type':'application/json'},
            body:JSON.stringify({fno,sno})
        });
        const data=await response.json();
        setresult(data.c)
    };

    return(
    <div>
        
            fno : <input type='number' onChange={(Event)=>{setfno(Event.target.value)}}/><br></br>
             sno : <input type='number' onChange={(Event)=>{setsno(Event.target.value)}}/><br></br>
             <button onClick={handle}>
                submit
             </button>
        <h1>{result}</h1>
    </div>)
 }
 
 export default W