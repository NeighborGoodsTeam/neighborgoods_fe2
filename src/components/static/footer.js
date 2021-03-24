import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Footer() {
  return (
    <Navbar bg="primary" variant="dark">
      {/* <Navbar.Brand href="#home">Navbar</Navbar.Brand> */}
      <Nav className="mr-auto">
        <Nav.Link href="#home">Contact</Nav.Link>
        <Nav.Link href="#home">Privacy</Nav.Link>
        <Nav.Link href="#home">Terms</Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default Footer;
