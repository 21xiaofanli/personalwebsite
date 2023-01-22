import React from 'react'
import {Navbar, NavbarBrand, NavLink, NavItem, Nav} from "reactstrap";
import { BsLinkedin } from 'react-icons/bs';
import { GoMarkGithub } from "react-icons/go";
import { MdEmail } from "react-icons/md";




export default function NavigationBar() {
    return(
        <Navbar  light expand="md">

          <NavbarBrand ><h1>Xiaofan Li</h1></NavbarBrand>
            <Nav className="ml-auto" navbar>

              <NavItem >
                <NavLink href="https://www.linkedin.com/in/xiaofan-li/" target="_blank" rel="noreferrer"><BsLinkedin size={30}/> </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/21xiaofanli" target="_blank" rel="noreferrer"><GoMarkGithub size={30}/> </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href = "https://mail.google.com/mail/?view=cm&fs=1&to=xl121@illinois.edu" target="_blank" rel="noreferrer"><MdEmail size={35}/> </NavLink>
              </NavItem>
             
            </Nav>
        </Navbar>
    )
}