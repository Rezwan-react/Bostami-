import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { LiaHomeSolid } from "react-icons/lia";
import { IoPersonOutline } from "react-icons/io5";
import { IoDocumentTextOutline } from "react-icons/io5";
import { SlBriefcase } from "react-icons/sl";
import { FaBlogger } from "react-icons/fa";
import { FaRegAddressBook } from "react-icons/fa6";
import { FiAlignJustify } from "react-icons/fi";

const Navbar = () => {

  const [show, hide] = useState(false)

  const handelShow = ()=>{
    hide(!show)
  }


  return (
    <>
        <nav>
          <div className="container">
          <div className="menu_row p-5 flex justify-between flex-wrap">
            <div className="logo_col relative">
              <Link to='#'><img src="images/logo.png" alt="logo_img" /></Link>
            </div>
            <div className="menu">
            <FiAlignJustify onClick={handelShow} className='block text-4xl md:hidden' />
              {
                show &&
                <ul className=' flex flex-col items-center gap-4 text-[13px] font-medium font-Poppins text-indigo absolute top-[80px] right-0'>
                <NavLink to="/" className={({ isActive }) =>  isActive ? 'px-[19px] bg-gradient-to-r from-[#fa5252] to-[#dd2476] h-10 flex justify-center items-center gap-[4px] rounded-lg' : "px-[19px] bg-[#ACE1AF] h-10 flex justify-center items-center gap-[4px] rounded-lg hover:hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white"}><LiaHomeSolid />Home</NavLink>
                <NavLink to="/about" className={({ isActive }) =>  isActive ? 'px-[19px] bg-gradient-to-r from-[#fa5252] to-[#dd2476] h-10 flex justify-center items-center gap-[4px] rounded-lg' : "px-[19px] bg-[#ACE1AF] h-10 flex justify-center items-center gap-[4px] rounded-lg hover:hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white"}><IoPersonOutline />About</NavLink>
                <NavLink to="/resume" className={({ isActive }) =>  isActive ? 'px-[19px] bg-gradient-to-r from-[#fa5252] to-[#dd2476] h-10 flex justify-center items-center gap-[4px] rounded-lg' : "px-[19px] bg-[#ACE1AF] h-10 flex justify-center items-center gap-[4px] rounded-lg hover:hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white"}><IoDocumentTextOutline />Resume</NavLink>
                <NavLink to="/works" className={({ isActive }) =>  isActive ? 'px-[19px] bg-gradient-to-r from-[#fa5252] to-[#dd2476] h-10 flex justify-center items-center gap-[4px] rounded-lg' : "px-[19px] bg-[#ACE1AF] h-10 flex justify-center items-center gap-[4px] rounded-lg hover:hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white"}><SlBriefcase />Works</NavLink>
                <NavLink to="/blogs" className={({ isActive }) =>  isActive ? 'px-[19px] bg-gradient-to-r from-[#fa5252] to-[#dd2476] h-10 flex justify-center items-center gap-[4px] rounded-lg' : "px-[19px] bg-[#ACE1AF] h-10 flex justify-center items-center gap-[4px] rounded-lg hover:hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white"}><FaBlogger />Blogs</NavLink>
                <NavLink to="/contact" className={({ isActive }) =>  isActive ? 'px-[19px] bg-gradient-to-r from-[#fa5252] to-[#dd2476] h-10 flex justify-center items-center gap-[4px] rounded-lg' : "px-[19px] bg-[#ACE1AF] h-10 flex justify-center items-center gap-[4px] rounded-lg hover:hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white"}><FaRegAddressBook />Contact</NavLink>
                
                </ul>
              }
            <div className='hidden md:block'>
            <ul className=' flex flex-wrap gap-4 text-[13px] font-medium font-Poppins text-indigo '>
              <NavLink to="/" className={({ isActive }) =>  isActive ? 'px-[19px] bg-gradient-to-r from-[#fa5252] to-[#dd2476] h-10 flex justify-center items-center gap-[4px] rounded-lg' : "px-[19px] bg-[#fff] h-10 flex justify-center items-center gap-[4px] rounded-lg hover:hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white"}><LiaHomeSolid />Home</NavLink>
              <NavLink to="/about" className={({ isActive }) =>  isActive ? 'px-[19px] bg-gradient-to-r from-[#fa5252] to-[#dd2476] h-10 flex justify-center items-center gap-[4px] rounded-lg' : "px-[19px] bg-[#fff] h-10 flex justify-center items-center gap-[4px] rounded-lg hover:hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white"}><IoPersonOutline />About</NavLink>
              <NavLink to="/resume" className={({ isActive }) =>  isActive ? 'px-[19px] bg-gradient-to-r from-[#fa5252] to-[#dd2476] h-10 flex justify-center items-center gap-[4px] rounded-lg' : "px-[19px] bg-[#fff] h-10 flex justify-center items-center gap-[4px] rounded-lg hover:hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white"}><IoDocumentTextOutline />Resume</NavLink>
              <NavLink to="/works" className={({ isActive }) =>  isActive ? 'px-[19px] bg-gradient-to-r from-[#fa5252] to-[#dd2476] h-10 flex justify-center items-center gap-[4px] rounded-lg' : "px-[19px] bg-[#fff] h-10 flex justify-center items-center gap-[4px] rounded-lg hover:hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white"}><SlBriefcase />Works</NavLink>
              <NavLink to="/blogs" className={({ isActive }) =>  isActive ? 'px-[19px] bg-gradient-to-r from-[#fa5252] to-[#dd2476] h-10 flex justify-center items-center gap-[4px] rounded-lg' : "px-[19px] bg-[#fff] h-10 flex justify-center items-center gap-[4px] rounded-lg hover:hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white"}><FaBlogger />Blogs</NavLink>
              <NavLink to="/contact" className={({ isActive }) =>  isActive ? 'px-[19px] bg-gradient-to-r from-[#fa5252] to-[#dd2476] h-10 flex justify-center items-center gap-[4px] rounded-lg' : "px-[19px] bg-[#fff] h-10 flex justify-center items-center gap-[4px] rounded-lg hover:hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476] hover:text-white"}><FaRegAddressBook />Contact</NavLink>
              
              </ul>
            </div>
            </div>
            
          </div>
          </div>
        </nav>


       
    </>
  )
}

export default Navbar
