 import React, { useEffect, useState} from "react";
//  import {useNavigation} from "react-router-dom";
//  import "./App.css";
 function Update() {
         const [NewPassword,setNewPassword]=useState("");
         const [Email,setEmail]=useState("");
     
         const submitdata = async () => {
             if( !NewPassword || !Email)
             {
                 alert("please Fill UP")
                 return false;
             }
             let result = await fetch("http://localhost:4500/update",{
                 method :"PUT",
                 body: JSON.stringify({ NewPassword, Email}),
                 headers: {"Content-Type":"application/json"},
             });
             result = await result.json();
             console.log(result)
             if(result)
             {
                 // navigate("/login");
                 alert("data updata")
             }
             else
             {
                 alert("not update")
             }
         };
   return (
     <div><div className="update">
         <h1>Update Form</h1>
         
         <input
         type="text"
         placeholder="enter email"
         value={Email}
         onChange={(Event) => setEmail(Event.target.value)}
         />
         <input
         type="text"
         placeholder="enter NewPassword"
         value={NewPassword}
         onChange={(Event) => setNewPassword(Event.target.value)}
         />
 
         <button type="button" onClick={submitdata}>
             for update
         </button>
         </div>
 </div>
   )
 }
 
 export default Update