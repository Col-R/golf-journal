import React from 'react'

import './Navbar.css'

// icons
    // white icon
    import icon_w from '../img/site-icon-w.png'
    // black icon
    // import icon from '../img/site-icon.png'


const Navbar = () => {
  return (
    <nav className="navbar">
        <img src={icon_w} alt="site logo" className = "nav__icon"/>
        <h1 className='nav__title'>golf bucket list</h1>
    </nav>
  )
}

export default Navbar