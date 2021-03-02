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

  const scroll = (e) => {
    e.preventDefault()
    let options = {
      behavior: "smooth",
      block: "start" 
    }
    document.getElementById(e.target.name).scrollIntoView(options)
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
          <Nav.Link name="home" onClick={(e) => scroll(e)}>Home</Nav.Link>
          <Nav.Link name="about" onClick={(e) => scroll(e)}>About</Nav.Link>
          <Nav.Link name="projects" onClick={(e) => scroll(e)}>Projects</Nav.Link>
          <Nav.Link name="contact" onClick={(e) => scroll(e)}>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MainNav;
