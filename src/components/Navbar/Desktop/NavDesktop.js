import { useState } from 'react';
import './NavDesktop.css';

function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 200) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener('scroll', changeBackground);

  return (
    <nav className={navbar ? 'navbar active' : 'navbar'}>
      <div className="navbar-name">
        <p className={navbar ? 'visible' : ''}>Alexander Sandberg</p>
      </div>
      <div className="navbar-items">
        <ul>
          <a href="#about">
            <li>About</li>
          </a>
          <a href="#projects">
            <li>Projects</li>
          </a>
          <a href="#contact">
            <li>Skills</li>
          </a>
          <a href="#experience">
            <li>Experience</li>
          </a>
          <a href="#contact">
            <li>Contact</li>
          </a>
          
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
