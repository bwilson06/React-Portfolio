import React, {useState} from "react";
import {Navbar} from 'react-bootstrap'

const MyNav = () => {

  const [canvasHeight, setHeight] = useState()

  let canvas = document.getElementsByClassName("canvas")
  let navbar = document.getElementById('nav')
  setHeight(canvas[0].clientHeight)
  
  window.addEventListener("resize", () => onWindowResize(canvas), false)

  const onWindowResize = (canvas) => {
    setHeight(canvas[0].clientHeight)
  }

  const stickyNav = (sticky, navbar) => {
    if (window.pageYOffset >= canvasHeight) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky")
    }
}

  return (
    <Navbar id="nav" bg="light" expand="lg">
      <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-success">Search</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNav;
