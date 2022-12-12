import React from "react";
import {BsGithub ,BsLinkedin} from "react-icons/bs"

function Footer() {
  return (
    <div>
      <div className="footerContainer">
        <div>Copyright 2020 © Terra Pizza. Tüm hakları saklıdır.</div>
        <div className="icons">
            <a href="https://github.com/furkanislek"  rel="noopener noreferrer" target="_blank">
                <BsGithub className="gitIcons"/>
            </a>
            <a href="https://www.linkedin.com/in/furkanislek/" rel="noopener noreferrer" target="_blank">
                <BsLinkedin className="linkIcons"/>
            </a>
        </div>

      </div>
    </div>
  );
}

export default Footer;
