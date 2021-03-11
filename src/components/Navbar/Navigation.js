import React from "react";
import { Form, FormControl, Nav, Navbar } from "react-bootstrap";
import Button from "react-bootstrap/Button";

const Navigation = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link>Home</Nav.Link>
        <Nav.Link>Features</Nav.Link>
        <Nav.Link>Pricing</Nav.Link>
      </Nav>
      <Form inline>
        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
        <Button variant="outline-info">Search</Button>
      </Form>
    </Navbar>
  );
};

export default Navigation;
