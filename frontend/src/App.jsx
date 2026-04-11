import React from 'react'
import P from './P'
import Fa from './Fa'
import Signup1 from './Signup1'
import Login from './Login'
import Update from './assets/Update'
import Delete from './assets/Delete'
import Wer from './Wer'
import { Item } from './Component/item'
import Navbar from './Component/Navbar.jsx';
import Home from './Routers/Home.jsx'
import About from './Routers/About.jsx'
import Service from './Routers/Service.jsx'
import Contact from './Routers/Contact.jsx'
import { Route, Routes } from 'react-router-dom'
import Reg from './Routers/Reg.jsx'
 import Log from './Routers/Log.jsx'
import ActivitiesHome from './activities/ActivitiesHome.jsx'

function App() {
  return (
    <div>
      {/* <Signup1/> */}
      {/* <Login/> */}
      {/* <Update/> */}
      {/* <Delete/> */}
    {/* <Wer/> */}
   {/* <Reg/> */}
   {/* <Navbar/> */}
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/about" element={<About/>}/>
    <Route path="/service" element={<Service/>}/>
    <Route path="/contact" element={<Contact/>}/>
    <Route path="/signup" element={<Reg/>}/>
    <Route path="/login" element={<Log/>}/>
    <Route path="/activities" element={<ActivitiesHome/>}/>
   </Routes>
     
    </div>
  )
}

export default App