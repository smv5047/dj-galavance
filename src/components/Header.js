import React from "react";
import { Jumbotron, Button } from "reactstrap";

function Header() {
  //TODO - Add click handler
  const handleClick = () => {};

  return (
    <>
      <Jumbotron>
        <h1 className="display-2"> DJ Galavance </h1>

        <Button color="primary" onClick={handleClick}>
          Press to Party!
        </Button>
      </Jumbotron>
    </>
  );
}

export default Header;
