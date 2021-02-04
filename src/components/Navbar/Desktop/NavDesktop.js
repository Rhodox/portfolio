import { Link } from "react-scroll";
import { SidebarData } from "../navData.js";
import "./NavDesktop.css";

function Navbar() {
  const printSidebarData = () => {
    const data = SidebarData.map((item, index) => {
      return (
        <Link
          key={index}
          className="nav-item-desktop"
          activeClass="active"
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

  return <nav className="navbar-desktop">{printSidebarData()}</nav>;
}

export default Navbar;
