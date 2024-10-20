import './Navbar.css';
import logo from '../../assets/settings.png';
import open from '../../assets/list.png';
import close from '../../assets/close.png';
import React, { useRef } from 'react';


const Navbar = () => {
  const menuRef = useRef();

  const openMenu = () => {
    console.log('Opening menu');
    menuRef.current.style.right = "0";
  }

  const closeMenu = () => {
    console.log('Closing menu');
    menuRef.current.style.right = "-350px";
  }
   
  return (
    <div id='fhome' className='navbar'>
      <img src={open} onClick={openMenu} alt="Open Menu" className='nav-mob-open' />
      <img src={logo} alt="Settings Logo" className='setting' />
      
      <ul ref={menuRef} className='nav-menu'>
        <img src={close} onClick={closeMenu} alt="Close Menu" className='nav-mob-close' />
        <li><a href="#fhome">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">my Skill</a></li>
        <li><a href="#Project">Project</a></li>
      </ul>

      <div className="nav-contact">
        <a href="#connect">Connect with Me</a>
      </div>
    </div>
  );
}

export default Navbar;
