import React from 'react';
import { Navbar, NavbarBrand, NavLink, NavItem, Nav } from 'reactstrap';
import { BsLinkedin } from 'react-icons/bs';
import { GoMarkGithub } from 'react-icons/go';
import { MdEmail } from 'react-icons/md';

export default function NavigationBar() {
  return (
    <div className = "pt-2 bg-transparent ">
    <Navbar light expand="md" className="pt-20 pb-25 ">
      <NavbarBrand className="ml-10 text-white">
        <h1>Xiaofan Li</h1>
      </NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem className="pr-5">
          <NavLink href="https://www.linkedin.com/in/xiaofan-li/" target="_blank" rel="noreferrer">
            <BsLinkedin size={30} className = "text-white" />
          </NavLink>
        </NavItem>
        <NavItem className="pr-5">
          <NavLink href="https://github.com/21xiaofanli" target="_blank" rel="noreferrer">
            <GoMarkGithub size={30} className = "text-white"/>
          </NavLink>
        </NavItem>
        <NavItem className = "pr-5">
          <NavLink href="https://mail.google.com/mail/?view=cm&fs=1&to=xl121@illinois.edu" target="_blank" rel="noreferrer">
            <MdEmail size={35} className = "text-white"/>
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
    </div>
  );
}
