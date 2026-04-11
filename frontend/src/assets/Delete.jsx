//  import React from 'react'
 import React, { useEffect, useState} from "react";
 function Delete() {
            const [Password,setPassword]=useState("");
            const [Email,setEmail]=useState("");
        
            const submitdata = async () => {
                if( !Password || !Email)
                {
                    alert("please Fill UP")
                    return false;
                }
                let result = await fetch("http://localhost:4500/delete",{
                    method :"DELETE",
                    body: JSON.stringify({Password, Email}),
                    headers: {"Content-Type":"application/json"},
                });
                result = await result.json();
                alert (result.result)
            };
      return (
        <div><div className="delete">
            <h1>for Delete</h1>
            
            
            <input
            type="text"
            placeholder="enter email"
            value={Email}
            onChange={(Event) => setEmail(Event.target.value)}
            />
            
            <input
            type="text"
            placeholder="enter Password"
            value={Password}
            onChange={(Event) => setPassword(Event.target.value)}
            />
    
            <button type="button" onClick={submitdata}>
                Delete
            </button>
            </div>
    </div>
      )
    }
   
 
 export default Delete