import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { TbHexagonLetterM } from "react-icons/tb";


const NavbarFile = () => {
  return (
    <Navbar bg="dark" variant="dark" sticky="top">
      <Navbar.Brand>
      <Link to="typing-text" spy={true} smooth={true} offset={-70} duration={500} className="nav-link">
      <TbHexagonLetterM />
        </Link>
      </Navbar.Brand>

      <div className="ml-auto">
        <div className="icon-links">
          <a href="https://github.com/michellemalf" target="_blank" rel="noopener noreferrer" className="icon-link">
            <FaGithub className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/michellemalf" target="_blank" rel="noopener noreferrer" className="icon-link">
            <FaLinkedin className="icon" />
          </a>
        </div>

        <Nav>
          <Link to="about" spy={true} smooth={true} offset={-70} duration={500} className="nav-link">
            About
          </Link>
          <Link to="work" spy={true} smooth={true} offset={-70} duration={500} className="nav-link">
            Work
          </Link>
          <Link to="contact" spy={true} smooth={true} offset={-70} duration={500} className="nav-link">
            Contact
          </Link>
        </Nav>
      </div>
    </Navbar>
  );
};

export default NavbarFile;















