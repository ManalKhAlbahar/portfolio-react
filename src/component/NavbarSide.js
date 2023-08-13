import {  useState } from "react";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import {SidebarData} from "./SidebarData";
import { IconContext } from "react-icons";
import  "./Navbar.css";

function NavbarSide({ homeRef, aboutRef, portfolioRef,contactRef }) {
  const nav_list =[homeRef, aboutRef, portfolioRef,contactRef]
  const [sidebar, setSidebar] = useState(false);
  
    const scrollToSection = (ref) => {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
    
    const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
    <IconContext.Provider value={{color:"black"}}>
      <div className="navbarSide">
        <Link to="#" className="menu-bars">
          <FaIcons.FaBars onClick={showSidebar} />
        </Link>
      </div>
      <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
        <ul className="nav-menu-items" onClick={showSidebar}>
          <li className="navbar-toggle">
            <Link to="#" className="menu-bars">
              <AiIcons.AiOutlineClose />
            </Link>
          </li>
          {SidebarData.map((item, index) => {
            return (
                <Link to={item.path} onClick={() => scrollToSection(nav_list[index])} >
              <li key={item.id} className={item.cName}>
                
                  <span>{item.title}</span>
              </li>

                </Link>
            );
          })}
        </ul>
      </nav>
      </IconContext.Provider>
    </>
  );
}

export default NavbarSide;
