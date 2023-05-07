import React, { useState, useEffect } from 'react';
import { Navbar, NavLink, NavItem, Nav } from 'reactstrap';

export default function SecondaryNavigationBar() {
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);
    setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll]);

  return (
    <div className={`fixed bottom-0 z-10 w-full ${visible ? 'block' : 'hidden transition ease-out duration-500'}`} style={{ transitionDelay: visible ? '0ms' : '500ms' }}>
      <Navbar light expand="md" className="pt-20 pb-25 text-lg text-white bg-blue">
        <Nav className="ml-auto text-white" navbar>
          <NavItem className="pr-8 text-white">
            <NavLink href="https://www.linkedin.com/in/xiaofan-li/" target="_blank" rel="noreferrer">
              <div className="text-white">Projects</div>
            </NavLink>
          </NavItem>
          <NavItem className="pr-8 text-white">
            <NavLink href="https://github.com/21xiaofanli" target="_blank" rel="noreferrer">
              <div className="text-white">Experiences</div>
            </NavLink>
          </NavItem>
          <NavItem className="pr-8 text-white">
            <NavLink href="https://mail.google.com/mail/?view=cm&fs=1&to=xl121@illinois.edu" target="_blank" rel="noreferrer">
              <div className="text-white">Blog</div>
            </NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  );
}
