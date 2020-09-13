import React from "react";
import {
  // Collapse,
  Navbar,
  // NavbarToggler,
  NavbarBrand,
  // Nav,
  // NavItem,
  NavLink,
} from "reactstrap";
import { Link } from "react-router-dom";
// import About from "./About";

const MainNavbar = (props) => {
  // const [isOpen, setIsOpen] = useState(false);

  // const toggle = () => setIsOpen(!isOpen);
  //TODO set toggle

  return (
    <div>
      <Navbar color="dark" light expand="md">
        <NavbarBrand href="/">DJ Galavance</NavbarBrand>

        <NavLink href="https://www.facebook.com/DJGalavance/about/">
          About
        </NavLink>
        {/* <Link to="/about" className="link">
          Bio
        </Link> */}
        <Link to="/contact" className="link book">
          Book
        </Link>
        <NavLink
          target="_blank"
          href="https://www.mixcloud.com/galavance/uploads/"
        >
          Music
        </NavLink>
        {/* <NavLink href="/">Testamonials</NavLink> */}
        {/* <NavbarToggler onClick={toggle} /> */}
      </Navbar>
    </div>
  );
};

export default MainNavbar;
