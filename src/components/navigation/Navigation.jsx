import React from 'react';
import './navigation.css';
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { AiOutlineBook } from "react-icons/ai";
import { RiServiceLine } from "react-icons/ri";
import { GrContact } from "react-icons/gr";
import { useState } from 'react';





const Navigation = () => {

  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav>
      <a href="#" onClick={()=> setActiveNav('#')} className={ activeNav === '#' ? 'active' : '' }>
        <AiOutlineHome />
      </a>
      <a href="#about" onClick={()=> setActiveNav('#about')} className={ activeNav === '#about' ? 'active' : '' }>
        <AiOutlineUser />
      </a>
      <a href="#experience" onClick={()=> setActiveNav('#experience')} className={ activeNav === '#experience' ? 'active' : '' }>
        <AiOutlineBook />
      </a>
      <a href="#services" onClick={()=> setActiveNav('#services')} className={ activeNav === '#services' ? 'active' : '' }>
        <RiServiceLine />
      </a>
      <a href="#contacts" onClick={()=> setActiveNav('#contacts')} className={ activeNav === '#contacts' ? 'active' : '' }>
        <GrContact />
      </a>
    </nav>
  )
}

export default Navigation