import React, { useState } from "react";
import { Container, Carousel} from "react-bootstrap";
import dogstr from "../images/dogstr.png";
import chatty from "../images/chatty.png";

const Projects = () => {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const scroll = (e) => {
      e.preventDefault()
      document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
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
            <img className="d-block carousel-image" src={dogstr} alt="First slide" />
            <Carousel.Caption>
              <h3>Dogstr</h3>
              <p>Search for top rated Dog Parks in your area.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block carousel-image" src={chatty} alt="Second slide" />
            <Carousel.Caption>
              <h3>Chatty</h3>
              <p>Instantly connect/chat with people around the world.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <h1 onClick={(e) => scroll(e)} className="projects-scroll"><i class="fas fa-arrow-circle-down"></i></h1>
      </Container>
    </div>
  );
};

export default Projects;
