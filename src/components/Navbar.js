import React, { useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from "reactstrap";

const MainNavbar = props => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="dark" light expand="md">
        <NavbarBrand href="/">DJ Galavance</NavbarBrand>
        {/* <NavbarToggler onClick={toggle} /> */}
        <NavLink href="/">About</NavLink>
        <NavLink href="/">Book</NavLink>
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
