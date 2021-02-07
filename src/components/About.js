import React, {useState, useEffect} from 'react';
import { animateScroll } from 'react-scroll';

const About = () => {
    const [projectDivY, setY] = useState()

    const animate = (projectsDiv) => {
        if (window.pageYOffset >= projectsDiv.offsetTop - 71) {
            document.getElementsByClassName('about-header-container')[0].classList.add('yo')
        }
    }
    

    useEffect(() => {
        let projectsDiv = document.getElementById('projects')
        window.addEventListener("scroll", () => animate(projectsDiv), false)
    }, [])

    return (
            <div id="projects">
                <div className="about-header-container">
                <h1 className="header">About</h1>
                <h4 style={{height: "2px", color: "white"}}className="text-center">______</h4>
                </div>
            </div>
    );
};

export default About;