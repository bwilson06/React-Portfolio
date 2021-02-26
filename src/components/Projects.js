import React, { useState } from "react";
import { Container, Carousel } from "react-bootstrap";
import me from "../images/me.jpg";

const Projects = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
    console.log(selectedIndex);
  };

  const scroll = (e) => {
      e.preventDefault()
  }

  return (
    <div id="projects">
      <Container>
        <hr></hr>
        <div className="projects-header-container">
          <h1 className="projects-header">Projects</h1>
          <h4 style={{ height: "2px", color: "white" }} className="text-center">
            ______
          </h4>
        </div>
        <Carousel id="carousel" activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img className="d-block carousel-image" src={me} alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block carousel-image" src={me} alt="Second slide" />
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block carousel-image" src={me} alt="Third slide" />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <h1 onClick={(e) => scroll(e)} className="projects-scroll"><i class="fas fa-arrow-circle-down"></i></h1>
      </Container>
    </div>
  );
};

export default Projects;
