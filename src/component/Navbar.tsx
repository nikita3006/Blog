import React from 'react';
import { IoHome } from "react-icons/io5";
import { MdOutlineContactSupport } from "react-icons/md";
import { MdOutlineCreate } from "react-icons/md";
import { MdConnectWithoutContact } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

import { RxMoon } from "react-icons/rx";
// import { RxSun } from "react-icons/rx";

import '../index.css'


const Navbar : React.FC = () => {
  return (
 
      
      <nav className='bg-black text-white navbar '>         
        <ul className=' navbar-nav '>
          <li className='logo '>
              <a href="" className='nav-link'>      
                  <MdOutlineKeyboardDoubleArrowRight size={32}  className='icon'/>
                 
                  <span className='link-text'></span>
              </a>
          </li>
          <li className='nav-item'>
              <a href=""  className='nav-link'><IoHome size={32}  className='icon'/>
              <span className='link-text'>HOME</span>
              </a>
          </li>
          <li className='nav-item'>
              <a href=""  className='nav-link'><MdOutlineContactSupport size={32} className='icon'/>
              <span className='link-text'>ABOUT</span>
              </a>
            </li>
            <li className='nav-item'>
              <a href=""  className='nav-link'><MdOutlineCreate size={32}  className='icon' />
              <span className='link-text'>CREATE</span>
              </a>
          </li>    
          <li className='nav-item'>
              <a href=""  className='nav-link' ><MdConnectWithoutContact  size={32}  className='icon'/>
              <span className='link-text'>CONTACT</span>
              </a>
            </li>     
            <li className='nav-item'>
              <a href=""  className='nav-link' ><RxMoon  size={32}  className='icon'/>
              <span className='link-text'></span>
              </a>
            </li>
          {/* <li className='sun'><a href=""  className='link'></a><RxSun  size={32} /></li> */}
        </ul>
     
      </nav>
    
   
  )
}

export default Navbar