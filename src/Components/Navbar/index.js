import React from 'react';
import logo from '../../images/logosmall.png';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
console.log(logo); 
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
        <img src={logo} alt="Logo" />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/about' activeStyle>
            About
          </NavLink>
          <NavLink to='/howto' activeStyle>
            How to use
          </NavLink>
          <NavLink to='/goal' activeStyle>
            Goal
          </NavLink>
          <NavLink to='/relaiability' activeStyle>
            Relaiability
          </NavLink>

          
        </NavMenu>

        <NavBtn>
          <NavBtnLink to='/'>Search</NavBtnLink>
        </NavBtn>
      </Nav>
    </>
  );
};

export default Navbar;
