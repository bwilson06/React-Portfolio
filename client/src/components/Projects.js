import React, { useState } from "react";
import { Container, Carousel} from "react-bootstrap";
import dogstr from "../images/dogstr.png";
import chatty from "../images/chatty.png";
import petsfurfriends from "../images/PetsFurFriends.png";

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
    <div id="projects" className="projects">
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
            <a href="https://chatty-react-bw.herokuapp.com/" target="_blank">
            <img className="d-block carousel-image" src={chatty} alt="Second slide" />
            <Carousel.Caption>
              <h3>Chatty</h3>
              <p>Instantly connect/chat with people around the world.</p>
            </Carousel.Caption>
            </a>
          </Carousel.Item>
          <Carousel.Item>
            <a href="https://team-crush-it.github.io/Pets-Fur-Friends/" target="_blank"><img className="d-block carousel-image" src={petsfurfriends} alt="Third slide" />
            <Carousel.Caption>
              <h3>Pets Fur Friends</h3>
              <p>Looking to adopt? Find the purrfect pet for you!</p>
            </Carousel.Caption>
            </a>
          </Carousel.Item>
        </Carousel>
        <h1 onClick={(e) => scroll(e)} className="projects-scroll"><i class="fas fa-arrow-circle-down"></i></h1>
      </Container>
    </div>
  );
};

export default Projects;
