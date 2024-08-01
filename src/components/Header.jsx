import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import resume from "../assets/resume.pdf"; // Assuming your resume file is stored here

const Header = ({ setMenuOpen, menuOpen }) => {
  return (
    <>
      <nav>
        <NavContent setMenuOpen={setMenuOpen} />
      </nav>

      <button className="navBtn" onClick={() => setMenuOpen(!menuOpen)}>
        <AiOutlineMenu />
      </button>
    </>
  );
};

export const HeaderPhone = ({ menuOpen, setMenuOpen }) => {
  return (
    <div className={`navPhone ${menuOpen ? "navPhoneComes" : ""}`}>
      <NavContent setMenuOpen={setMenuOpen} />
    </div>
  );
};

const NavContent = ({ setMenuOpen }) => (
  <>
    <h2>Anant Sharma</h2>
    <div>
      <a onClick={() => setMenuOpen(false)} href="#home">
        Home
      </a>
      <a onClick={() => setMenuOpen(false)} href="#work">
        Work
      </a>
      <a onClick={() => setMenuOpen(false)} href="#timeline">
        Experience
      </a>
      <a onClick={() => setMenuOpen(false)} href="#contact">
        Contact
      </a>
    </div>
    
      <a href="mailto:anantsharma.1839@gmail.com">
        <button>Email</button>
      </a>
      <a href={resume} download="Anant_Sharma_Resume.pdf">
        <button>Download Resume</button>
      </a>
    
  </>
);

export default Header;
