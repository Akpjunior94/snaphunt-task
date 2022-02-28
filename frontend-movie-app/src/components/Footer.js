import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  const iconStyles = {marginLeft: '30px'}
  return (
    <div className="footer">
      <div className="footer-layout container">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br/> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
        <div className="icons">
          <p>Copyright @ Snapmoviehub 2022</p>
          <FaFacebookF style={iconStyles}/>
          <FaLinkedinIn style={iconStyles}/>
          <FaTwitter style={iconStyles}/>
          <FaInstagram style={iconStyles}/>
        </div>
      </div>
    </div>
  )
}

export default Footer
