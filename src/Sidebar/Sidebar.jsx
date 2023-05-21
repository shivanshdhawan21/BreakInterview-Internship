import React from 'react'
import "./sidebar.scss"
import image from "./istockphoto-1164042740-612x612.jpg"
import { useNavigate } from "react-router-dom"
import { AccountBox, DateRange, Language, LibraryBooks, Payment, Person, Tv, ViewHeadlineSharp } from '@material-ui/icons'
const Sidebar = () => {
  const navigate=useNavigate();
  return (
    <div className='sidebar'>
        <div className="heading">
          <img src={image} alt="" width="75px" height="50px" />
          <div className='text2'>Argon Dashboard 2 PRO</div>
        </div>
        <span onClick={()=>navigate("/")}><Tv style={{color:"blue"}}/><div>Dashboard</div></span>
        <span onClick={()=>navigate("/tables")}><DateRange style={{color:"red"}}/><div>Tables</div></span>
        <span onClick={()=>navigate("/billing")}><Payment style={{color:"green"}}/><div>Billing</div></span>
        <span onClick={()=>navigate("/vr")}><ViewHeadlineSharp style={{color:"blue"}}/><div>Virtual Reality</div></span>
        <span><Language style={{color:"red"}}/><div>RTL</div></span>
        <p>ACCOUNT PAGES</p>
        <span><Person style={{color:"black"}}/><div>Profile</div></span>
        <span><AccountBox style={{color:"red"}}/><div>Sign In</div></span>
        <span><LibraryBooks style={{color:"blue"}}/><div>Sign Up</div></span>
    </div>
  )
}
export default Sidebar
