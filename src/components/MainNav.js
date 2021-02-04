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
      <Navbar.Brand style={{color: "white", fontSize: "30px"}}>BW</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link style={{color: "white"}}>Home</Nav.Link>
          <Nav.Link style={{color: "white"}}>About</Nav.Link>
          <Nav.Link style={{color: "white"}}>Projects</Nav.Link>
          <Nav.Link style={{color: "white"}}>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MainNav;
