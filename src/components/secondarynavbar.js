import React from 'react';
import { Navbar, NavItem, Nav } from 'reactstrap';
import { Link } from 'react-router-dom';
export default function SecondaryNavigationBar() {
  return (
    <div className='fixed-bottom bg-[#080c1f]'>
      <Navbar light expand="md" variant="dark">
        <Nav className="ml-auto text-white" navbar>
        <NavItem className="pr-8 text-white transform hover:scale-110 transition duration-300 ease-in-out">
            <Link to='/'>
              <div className="text-white">Home</div>
            </Link>
          </NavItem>
          <NavItem className="pr-8 text-white transform hover:scale-110 transition duration-300 ease-in-out">
            <Link to='/projects' >
              <div className="text-white">Projects</div>
            </Link>
          </NavItem>
          <NavItem className="pr-8 text-white transform hover:scale-110 transition duration-300 ease-in-out">
            <Link to="/experiences">
              <div className="text-white">Experiences</div>
            </Link>
          </NavItem>
          <NavItem className="pr-8 text-white transform hover:scale-110 transition duration-300 ease-in-out">
            <Link to="/blog">
              <div className="text-white">Blog</div>
            </Link>
          </NavItem>
        </Nav>
      </Navbar>
    </div>  
  );
}
