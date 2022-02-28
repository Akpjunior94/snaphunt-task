import React, { useState } from 'react'
import { BsArrowUp } from 'react-icons/bs'
import './ScrollToTop.css'

const ScrollToTop = () => {
  const [visible, setVisible] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    scrolled ? setVisible(true) : setVisible(false)
  };
  
  const scrollToTop = () =>{
    window.scrollTo({
      top: 0, 
      behavior: 'smooth'
      /* you can also use 'auto' behaviour
         in place of 'smooth' */
    });
  };
  
  window.addEventListener('scroll', toggleVisible);

  return (
    <div className="scroll-container">
      <button 
        className="scroll-to-top" 
        style={{display: visible ? 'inline' : 'none'}}
        onClick={scrollToTop}
      >
        <BsArrowUp />
      </button>
    </div>
  )
}

export default ScrollToTop
