import React from "react";
import { Nav, NavLink, NavMenu }
    from "./NavbarElements";

// This is the home screen
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/" activeStyle>
            Home
          </NavLink>
          <NavLink to="/about" activeStyle>
            About
          </NavLink>
          <NavLink to="/contact" activeStyle>
            Contact
          </NavLink>
          <NavLink to="/portfolio" activeStyle>
            Portfolios
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;