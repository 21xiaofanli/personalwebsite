import React from 'react'
import {Navbar, NavbarBrand, NavLink, NavItem, Nav} from "reactstrap";
import { BsLinkedin } from 'react-icons/bs';
import { GoMarkGithub } from "react-icons/go";
import { HiOutlineMail } from "react-icons/hi";




export default function NavigationBar() {
    return(
        <Navbar  light expand="md">
          <NavbarBrand ><h1>Xiaofan Li</h1></NavbarBrand>
            <Nav className="ml-auto" navbar>

              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap"><BsLinkedin size={30}/> </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap"><GoMarkGithub size={30}/> </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap"><HiOutlineMail size={30}/> </NavLink>
              </NavItem>
             
            </Nav>
        </Navbar>
    )
}