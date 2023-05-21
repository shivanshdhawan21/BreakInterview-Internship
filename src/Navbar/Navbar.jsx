import React from 'react'
import "./navbar.scss"
import { AccountCircle, CropSquare, Grade, Home, Notifications, Public, Search, Settings, ShoppingCart, ViewHeadlineSharp } from '@material-ui/icons'
import ImageScroll from '../ImageScroll/ImageScroll'
import LineChart from '../LineChart/LineChart'
const Navbar = () => {
  return (
    <>
    <LineChart />
    <ImageScroll />
    <div className='navbar'>
      <div className='top'>
        <div className='left'>
          <Home style={{cursor:"pointer"}}/>
          <div>/ Dashboard</div>
          <ViewHeadlineSharp style={{padding:"0 50px",cursor:"pointer"}}/>
        </div>
        <div className='right'>
          <div className='search'>
            <Search style={{cursor:"pointer"}}/>
            <input type='text' placeholder='Type here...'></input>
          </div>
          <div className='account'>
            <AccountCircle />
            <div>Sign in</div>
          </div>
          <div className='settings'>
            <Settings />
          </div>
          <div className='notif'>
            <Notifications />
          </div>
        </div>
      </div>
      <div className='down'>
        <div className="box">
          <div className='text'>
            <div>TODAY'S MONEY</div>
            <div className='second'>$53,000</div>
            <br></br>
            <div>+55% since yesterday</div>
          </div>
          <div className="circle" style={{"backgroundColor":"rgb(10, 189, 243)"}}>
            <CropSquare style={{"color":"white","padding":"8px 8px"}}/>
          </div>
        </div>
        <div className="box">
          <div className='text'>
            <div>TODAY'S USERS</div>
            <div className='second'>2300</div>
            <br></br>
            <div>+3% since last week</div>
          </div>
          <div className="circle" style={{"backgroundColor":"red"}}>
            <Public style={{"color":"white","padding":"8px 8px"}}/>
          </div>
        </div>
        <div className="box">
          <div className='text'>
            <div>NEW CLIENTS</div>
            <div className='second'>+3462</div>
            <br></br>
            <div>-2% since last quarter</div>
          </div>
          <div className="circle" style={{"backgroundColor":"rgba(79, 184, 87, 0.911)"}}>
            <Grade style={{"color":"white","padding":"8px 8px"}}/>
          </div>
        </div>
        <div className="box">
          <div className='text'>
            <div>SALES</div>
            <div className='second'>$103,430</div>
            <br></br>
            <div>+5% than last month</div>
          </div>
          <div className="circle" style={{"backgroundColor":"orange"}}>
            <ShoppingCart style={{"color":"white","padding":"8px 8px"}}/>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar
