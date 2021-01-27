import { useState } from "react";
import { Link } from "react-scroll";
import "./NavMobile.css";

import * as RiIcons from "react-icons/ri";

import { SidebarData } from "../navData.js";

function NavMobile() {
  const [menu, setMenu] = useState(false);
  const [navText, setNavText] = useState(false);

  const toggleMenu = () => setMenu(!menu);

  const toggleNavName = () => {
    if (window.scrollY >= 500) {
      setNavText(true);
    } else {
      setNavText(false);
    }
  };

  window.addEventListener("scroll", toggleNavName);

  const printSidebarData = () => {
    const data = SidebarData.map((item, index) => {
      return (
        <Link
          key={index}
          className={item.cName}
          activeClass="active"
          onClick={toggleMenu}
          to={item.to}
          spy={true}
          smooth={true}
          offset={-70}
          duration={500}
        >
          {item.title}
        </Link>
      );
    });
    return data;
  };

  return (
    <>
      <div className="navbar">
        <div className="sidebar-toggle">
          <RiIcons.RiMenu2Line onClick={toggleMenu} />
        </div>
        <div className={navText ? "navbar-name visible" : "navbar-name"}>
          Alexander Sandberg
        </div>
      </div>
      <nav className={menu ? "sidebar-container active" : "sidebar-container"}>
        <div className="sidebar">
          <RiIcons.RiCloseFill className="nav-close" onClick={toggleMenu} />
          {printSidebarData()}
        </div>
      </nav>
    </>
  );
}

export default NavMobile;
