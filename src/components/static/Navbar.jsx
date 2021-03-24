import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavigationBar() {
  return (
    <Navbar bg="primary" variant="dark">
      <Navbar.Brand href="#/">NeighborGoods</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="#home">Log In</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavigationBar;
