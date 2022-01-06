import React from "react";
import { FaGithubAlt, FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-icons">
        <a href="https://github.com/rathore90">
          <FaGithubAlt />
        </a>
        <a href="https://www.linkedin.com/in/deep90/">
          <FaLinkedin />
        </a>
      </div>
      <p>
        Created by Pardeep Rathore &copy; 2022
      </p>
    </div>
  );
}

export default Footer;