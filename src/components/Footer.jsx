import React from 'react'

import './Footer.css'

// icon
import github from '../img/github.png'
import linkedIn from '../img/linkedIn.png'

const Footer = () => {
  return (
    <footer className="footer">
        <p className='footer__creator'>Made by Cole Robinson</p>

        <a href="https://github.com/Col-R/golf-journal" target='_blank' rel="noreferrer"><img src = {github} alt = "github" className = "social__icon"/></a>
        <a href="https://www.linkedin.com/in/cwrobinson-/" target ='_blank' rel="noreferrer"><img src = {linkedIn} alt = "linkedIn" className = "social__icon" /></a>
        
        
    </footer>
  )
}

export default Footer