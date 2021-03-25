import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavigationBar() {
  return (
    <nav>
      <Navbar bg="primary" variant="dark" className="nav">
        <Navbar.Brand href="#/">
          <h2>NeighborGoods</h2>
        </Navbar.Brand>
        <Nav className="mr-2">
          <Nav.Link href="#home">About</Nav.Link>
          <Nav.Link href="#home">FAQ</Nav.Link>
          <Nav.Link href="#login">Log In</Nav.Link>
        </Nav>
      </Navbar>
    </nav>
  );
}

export default NavigationBar;
