import * as RiIcons from "react-icons/ri";

import './Contact.css'

function Contact() {
  return (
    <footer
      className="contact-container"
      id="contact"
    >
      <div className="contact-header">
        <h3>Find me on:</h3>
      </div>
        <div className="links-box">
          <a href="https://github.com/Rhodox">
            <RiIcons.RiGithubFill />
          </a>
          <a href="https://linkedin.com/in/alexander-sandberg">
            <RiIcons.RiLinkedinBoxFill />
          </a>
          <a href="mailto:alexander.sandberg@appliedtechnology.se">
            <RiIcons.RiMailLine />
          </a>
        </div>
        <p className="legal"><RiIcons.RiCopyrightLine />Alexander Sandberg 2021</p>
    </footer>
  );
}

export default Contact;
