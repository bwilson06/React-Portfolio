import React, { useState, useEffect } from "react";
import { animateScroll } from "react-scroll";
import { Container } from "react-bootstrap";
import myPic from "../images/me.jpg";

const About = () => {

  const animate = () => {
    if (window.pageYOffset >= 20) {
      document
        .getElementsByClassName("about-header-container")[0]
        .classList.add("aboutme-animation");
    }
    let projectsDiv = document.getElementsByClassName('projects')[0]
    let contactDiv = document.getElementsByClassName('contact')[0]
    if (window.pageYOffset >= projectsDiv.clientHeight + 210){
      document.getElementsByClassName("projects-header-container")[0].classList.add("projects-animation")
    }
    if (window.pageYOffset >= contactDiv.clientHeight + 800){
      document.getElementsByClassName("contact-header-container")[0].classList.add("contact-animation")
    }
  };

  const scroll = (e) => {
    e.preventDefault()
    document.getElementById("projects").scrollIntoView({ behavior: "smooth" });
  }

  useEffect(() => {
    window.addEventListener("scroll", () => animate(), false);
  }, []);

  return (
    <div id="about">
      <Container>
        <div className="about-header-container">
          <h1 className="about-header">About</h1>
          <h4 style={{ height: "2px", color: "white" }} className="text-center">
            ______
          </h4>
        </div>
        <div className="about-content-container">
            <div className="my-pic">
                <img style={{width: "100%", height: "100%", borderWidth: "2px", borderStyle: "solid", borderColor: "#74c69d"}} src={myPic} alt="me"></img>
                <h4 className="text-center" style={{fontFamily: 'Poppins', marginTop: "10px"}}><a href="https://bootcamp.wisconsin.edu/" target="_blank">UW Coding Bootcamp</a> Graduate</h4>
            </div>
            <div className="my-content">
            <p style={{overflowWrap: "break-word", fontSize: "20px", fontFamily: 'Poppins'}}>My passion for programming ultimately began when I discovered that I could create almost anything that came to mind by utlizing small IoT devices such as Arduino©. My first projects were mostly hobbyist home automation systems that were fueled by a desire to learn more about the world of computer science. In the end that desire led me to begin my journey as a Full-Stack Web Developer, creating innovative apps with an inspiration to change the world around me. </p>
            </div>
        </div>
        <h1 onClick={(e) => scroll(e)} className="about-scroll"><i class="fas fa-arrow-circle-down"></i></h1>
      </Container>
    </div>
  );
};

export default About;
