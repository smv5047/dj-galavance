import React from "react";
import { Jumbotron, Button } from "reactstrap";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <Jumbotron className="header">
        <div className="cta">
          <span className="title">cta</span>
          <h1 className="display-1">DJ Galavance</h1>

          <Button color="primary">
            <Link to="/contact" className="link">
              Press to Party!
            </Link>
          </Button>
        </div>
      </Jumbotron>
    </>
  );
}

export default Header;
