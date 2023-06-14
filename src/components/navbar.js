import React from 'react';
import { Navbar, NavbarBrand, NavLink, NavItem, Nav } from 'reactstrap';
import { BsLinkedin } from 'react-icons/bs';
import { GoMarkGithub } from 'react-icons/go';
import { MdEmail } from 'react-icons/md';
export default function NavigationBar({color, absolute = true}) {
  return (
    <div className={`pt-2 bg-transparent top-0 w-full  z-50 ${absolute ? "absolute" : ""}`}>
    <Navbar light expand="md" className="pt-20 pb-25 ">
      <NavbarBrand className="ml-10 justify-left  ">
        <h1 className = {`absolute top-0 transform mt-[.75rem] uppercase tracking-widest font-normal text-[2rem] ${color}`}>Xiaofan Li</h1>
      </NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem className="pr-5 transform hover:scale-125 transition duration-300 ease-in-out">
          <NavLink href="https://www.linkedin.com/in/xiaofan-li/" target="_blank" rel="noreferrer">
            <BsLinkedin size={30} className = {color} />
          </NavLink>
        </NavItem>
        <NavItem className="pr-5 transform hover:scale-125 transition duration-300 ease-in-out">
          <NavLink href="https://github.com/21xiaofanli" target="_blank" rel="noreferrer">
            <GoMarkGithub size={30} className = {color}/>
          </NavLink>
        </NavItem>
        <NavItem className = "pr-5 transform hover:scale-125 transition duration-300 ease-in-out">
          <NavLink href="https://mail.google.com/mail/?view=cm&fs=1&to=xl121@illinois.edu" target="_blank" rel="noreferrer">
            <MdEmail size={35} className = {color}/>
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
    </div>
  );
}
