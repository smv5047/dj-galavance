import React from "react";
import { Jumbotron, Button } from "reactstrap";

function Header() {
  const handleClick = e => {
    e.preventDefault();
    window.open("http://www.galavance.com/book");
    console.log("hello");
  };

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
