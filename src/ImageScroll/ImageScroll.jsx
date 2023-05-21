import React from 'react'
import "./imagescroll.scss"
import { Settings } from '@material-ui/icons'
const ImageScroll = () => {
  return (
    <>
      <div className='imagescroll'>
        <img src="https://source.unsplash.com/320x320/?quotes" alt=""/>
        <div className='setting'>
          <Settings style={{"color":"rgb(66, 60, 60)","padding":"8px 8px"}}/>
        </div>
      </div>
    </>
  )
}
export default ImageScroll
