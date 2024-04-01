import React from 'react';
import { IoHome } from "react-icons/io5";
import { MdOutlineContactSupport } from "react-icons/md";
import { MdOutlineCreate } from "react-icons/md";
import { MdConnectWithoutContact } from "react-icons/md";
import { RxMoon } from "react-icons/rx";
import { RxSun } from "react-icons/rx";


const Navbar : React.FC = () => {
  return (
    <div className='h-full'>
        <div className='bg-black text-white w-16 h-[90vh] mt-10'>
        <ul className='flex flex-col  items-center justify-around h-[60vh]'>
          <li className=''><a href=""></a><IoHome size={32}/></li>
          <li><a href=""></a><MdOutlineContactSupport size={32}/></li>
          <li><a href=""></a><MdOutlineCreate size={32} /></li>
          <li><a href=""></a><MdConnectWithoutContact  size={32}/></li>
          <li><a href=""></a><RxMoon size={32} /></li>
          <li><a href=""></a><RxSun  size={32} /></li>
        </ul>
        
      </div>
    </div>
  )
}

export default Navbar