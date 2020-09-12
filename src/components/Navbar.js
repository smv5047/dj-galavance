import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";

const MainNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  //TODO set toggle

  return (
    <div>
      <Navbar color="dark" light expand="md">
        <NavbarBrand href="/">DJ Galavance</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <NavLink href="http://www.galavance.com/bio-galavance">About</NavLink>
        <Link to="/contact" className="link">
          Book
        </Link>
        <NavLink
          target="_blank"
          href="https://www.mixcloud.com/galavance/uploads/"
        >
          Music
        </NavLink>
        <NavLink href="/">Testamonials</NavLink>
      </Navbar>
    </div>
  );
};

export default MainNavbar;
