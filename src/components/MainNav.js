import React, {useState, useEffect} from "react";
import { Navbar, Nav, Button } from "react-bootstrap";

const MainNav = () => {

  const [canvasHeight, setHeight] = useState()

  const onWindowResize = (canvas) => {
    setHeight(canvas[0].clientHeight)
  }

  const stickyNav = (canvas, navbar) => {
    if (window.pageYOffset >= canvas[0].clientHeight) {
        navbar.classList.add("sticky")
      } else {
        navbar.classList.remove("sticky")
    }
}

  useEffect(() => {
        let canvas = document.getElementsByClassName("canvas")
        let navbar = document.getElementById('nav')
        window.addEventListener("scroll", () => stickyNav(canvas, navbar), false)
        window.addEventListener("resize", () => onWindowResize(canvas), false)
  }, [])

  return (
    <Navbar id="nav" expand="lg">
      <Navbar.Brand className="nav-header">BW</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="nav-links" className="mr-auto">
          <Nav.Link >Home</Nav.Link>
          <Nav.Link >About</Nav.Link>
          <Nav.Link >Projects</Nav.Link>
          <Nav.Link >Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MainNav;
