import React from "react";
import {
  // Collapse,
  Navbar,
  // NavbarToggler,
  NavbarBrand,
  // Nav,
  // NavItem,
  // NavLink
} from "reactstrap";

export default function Footer() {
  return (
    <div className="footer">
      <Navbar color="dark" light expand="md">
        <NavbarBrand href="/" className="footer-center">
          DJ Galavance
        </NavbarBrand>
        {/* <NavbarToggler onClick={toggle} />
        <NavLink href="http://www.galavance.com/bio-galavance">About</NavLink>
        <NavLink href="http://www.galavance.com/book">Book</NavLink>
        <NavLink
          target="_blank"
          href="https://www.mixcloud.com/galavance/uploads/"
        >
          Music
        </NavLink>
        <NavLink href="/">Testamonials</NavLink> */}
      </Navbar>
    </div>
  );
}
