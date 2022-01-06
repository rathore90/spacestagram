import React from "react";
import { FaGithubAlt, FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <div className="footer">
      <div className="footer-icons">
        <a href="https://github.com/LihaoWang">
          <FaGithubAlt />
        </a>
        <a href="https://www.linkedin.com/in/lihaowang98/">
          <FaLinkedin />
        </a>
      </div>
      <p>
        Created by Leo Wang &copy; 2021{" "}
        <a href="https://api.nasa.gov/">| NASA APOD API</a>
        <br />
        Favicon made by{" "}
        <a href="https://www.freepik.com" title="Freepik">
          Freepik
        </a>{" "}
        from{" "}
        <a href="https://www.flaticon.com/" title="Flaticon">
          www.flaticon.com
        </a>
      </p>
    </div>
  );
}

export default Footer;