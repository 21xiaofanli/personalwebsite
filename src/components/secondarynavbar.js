import React, { useState, useEffect } from 'react';
import { Navbar, NavItem, Nav } from 'reactstrap';
import { Link } from 'react-router-dom';
export default function SecondaryNavigationBar() {
  // const [prevScrollPos, setPrevScrollPos] = useState(0);
  // const [visible, setVisible] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const currentScrollPos = window.pageYOffset;
  //     setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos === 0);
  //     setPrevScrollPos(currentScrollPos);
  //   };
  
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, [prevScrollPos, visible]);
  return (
    <div className='fixed-bottom bg-[#080c1f]'>
      <Navbar light expand="md" variant="dark">
        <Nav className="ml-auto text-white" navbar>
        <NavItem className="pr-8 text-white">
            <Link to='/'>
              <div className="text-white">Home</div>
            </Link>
          </NavItem>
          <NavItem className="pr-8 text-white">
            <Link to='/projects' >
              <div className="text-white">Projects</div>
            </Link>
          </NavItem>
          <NavItem className="pr-8 text-white">
            <Link to="/experiences">
              <div className="text-white">Experiences</div>
            </Link>
          </NavItem>
          <NavItem className="pr-8 text-white">
            <Link to="/blog">
              <div className="text-white">Blog</div>
            </Link>
          </NavItem>
        </Nav>
      </Navbar>
    </div>  
  );
}
