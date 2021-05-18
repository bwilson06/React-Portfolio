import React from "react";

const Footer = () => {
  return (
    <div id="footer" className="footer">
      <div className="social-container">
        <i class="fab fa-twitter-square social-link" onClick={() => window.open("https://twitter.com/Bradley03587052", "_blank")}></i>
        <i class="fab fa-github-square social-link" onClick={() => window.open("https://github.com/bwilson06", "_blank")}></i>
        <i class="fab fa-linkedin social-link" onClick={() => window.open("https://www.linkedin.com/in/bradley-wilson-698405212/", "_blank")}></i>
      </div>
    </div>
  );
};

export default Footer;
