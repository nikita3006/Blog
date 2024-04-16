import React, {useState} from 'react';
import { IoHome } from "react-icons/io5";
import { MdOutlineContactSupport } from "react-icons/md";
import { MdOutlineCreate } from "react-icons/md";
import { MdConnectWithoutContact } from "react-icons/md";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import { RxMoon } from "react-icons/rx";
import { RxSun } from "react-icons/rx";

import '../index.css'


const Navbar : React.FC = () => {
  const[mode, setMode] = useState(false);
  const[isHovered, setIsHovered] = useState(false)


  const handlerClick = () =>{
    setMode(!mode)
  }
  const handlerEnter = () =>{
    setIsHovered(true)
  }
  const handlerLeave = () =>{
    setIsHovered(false)
  }

  return (
 
      
      <nav className='bg-transparent navbar '>         
        <ul className=' navbar-nav '>
          <li className='logo '>
              <a href="" className='nav-link'>      
                  <MdOutlineKeyboardDoubleArrowRight size={20}  className='icon'/>
                 
                  <span className='link-text'></span>
              </a>
          </li>
          <li className='nav-item'
           onMouseEnter={handlerEnter}
           onMouseLeave={handlerLeave}
          >
              <a href=""  className='nav-link'><IoHome size={20}  className='icon'/>
             {isHovered ? <span className='link-text' >HOME</span> : <span className='link-text' ></span>}
              </a>
          </li>
          <li className='nav-item'
           onMouseEnter={handlerEnter}
           onMouseLeave={handlerLeave}
          >
              <a href=""  className='nav-link'><MdOutlineContactSupport size={20} className='icon'/>
              {isHovered ? <span className='link-text' >ABOUT</span> : <span className='link-text' ></span>}
              </a>
            </li>
            <li className='nav-item'
           onMouseEnter={handlerEnter}
           onMouseLeave={handlerLeave}
          >
              <a href=""  className='nav-link'><MdOutlineCreate size={20}  className='icon' />
              {isHovered ? <span className='link-text' >CREATE</span> : <span className='link-text' ></span>}
              </a>
          </li>    
          <li className='nav-item'
           onMouseEnter={handlerEnter}
           onMouseLeave={handlerLeave}
          >
              <a href=""  className='nav-link' ><MdConnectWithoutContact  size={20}  className='icon'/>
              {isHovered ? <span className='link-text' >CONTACT</span> : <span className='link-text' ></span>}
              </a>
            </li>     
           
        </ul>
        <button 
           className='mode'
            onClick={handlerClick}>
             {mode ? <a  ><RxMoon  size={20}  className='icon'/></a> :<a  ><RxSun  size={20} /></a> }
            </button>
      </nav>
    
   
  )
}

export default Navbar