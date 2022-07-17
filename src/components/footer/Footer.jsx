import React from 'react'
import './footer.scss'
import { AiFillYoutube } from "react-icons/ai";

const Footer = () => {
  return (
    <div className='footer' >
        <div className="icon__list">
              <AiFillYoutube className='icon'/>
              <AiFillYoutube className='icon'/>
              <AiFillYoutube className='icon'/>
              <AiFillYoutube className='icon'/>
              <AiFillYoutube className='icon' />
        </div>
        <div className="terms">
            <p>Terms of service</p>
            <p>Privacy policy</p>
        </div>
        <p>Copyright 2021 @ Peddle Technologies. All rights reserved.</p>
    </div>
  )
}

export default Footer