import React from "react";
import {BsGithub ,BsLinkedin} from "react-icons/bs"
import "../App.css"

function FooterSiparis() {
  return (
    <div>
      <div className="footerContainerSiparis">
        <div className="copyright">Copyright 2022 © Workintech Pizza. Tüm hakları saklıdır.</div>
        <div className="icons">
            <a href="https://github.com/furkanislek"  rel="noopener noreferrer" target="_blank">
                <BsGithub className="gitIconsSiparis"/>
            </a>
            <a href="https://www.linkedin.com/in/furkanislek/" rel="noopener noreferrer" target="_blank">
                <BsLinkedin className="linkIconsSiparis"/>
            </a>
        </div>

      </div>
    </div>
  );
}

export default FooterSiparis;
