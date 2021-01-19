import React, { Component } from 'react';

class Navbar extends Component {

    state = {
        isActive: false,
        h1className: "",
        ulclassName: "nav-links"
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
    render() {
        console.log(this.state)
        return (
            <nav id="nav">
                <ul className={this.state.ulclassName}>
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