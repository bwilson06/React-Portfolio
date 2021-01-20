import React, { Component } from 'react';

class Navbar extends Component {

    state = {
        isActive: false,
        h1className: "",
        ulclassName: "nav-links",
        canvasHeight: 0
    }

    toggleNav = () => {
        this.setState({isActive: !this.state.isActive}, this.addClass)
    }

    addClass = () => {
        if (this.state.isActive){
            this.setState({h1className: "nav-links-active", ulclassName: "nav-links nav-links-active-animation"})
        }else{
            this.setState({h1className: "", ulclassName: "nav-links"})
        }
    }

    stickyNav = (sticky, navbar) => {
        this.setState({canvasHeight: sticky[0].clientHeight})
        console.log(window.pageYOffset, this.state.canvasHeight)
        if (window.pageYOffset >= sticky[0].clientHeight) {
            navbar.classList.add("sticky")
          } else {
            navbar.classList.remove("sticky")
        }
        if (this.state.isActive && window.pageYOffset <= this.state.canvasHeight){
            this.setState({isActive: false, h1className: "", ulclassName: "nav-links"})
        }
    }

    onWindowResize = (canvas) => {
        this.setState({canvasHeight: canvas[0].clientHeight})
    }

    componentDidMount(){
        let canvas = document.getElementsByClassName("canvas")
        let navbar = document.getElementById('nav')
        this.setState({canvasHeight: canvas[0].clientHeight})
        window.addEventListener("scroll", () => this.stickyNav(canvas, navbar), false)
        window.addEventListener("resize", () => this.onWindowResize(canvas), false)
    }
    
    render() {
        console.log(this.state)
        return (
            <nav id="nav">
                <ul name="hello" className={this.state.ulclassName}>
                    <li><h1 className={this.state.h1className}>Home</h1></li>
                    <li><h1 className={this.state.h1className}>About</h1></li>
                    <li><h1 className={this.state.h1className}>Portfolio</h1></li>
                    <li><h1 className={this.state.h1className}>Contact</h1></li>
                </ul>
                <div className="burger" onClick={this.toggleNav}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line"></div>
                </div>
            </nav>
        );
    }
}

export default Navbar;