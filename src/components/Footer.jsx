import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineArrowUp,
} from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div>
        <img
          src={""}
          alt="Founder"
        />

        <h2>Anant sharma</h2>
        <p>Motivation is temporary, but discipline last forever.</p>
      </div>

      <aside>
        <h2>Social Media</h2>

        <article>
        <a href="https://github.com/Anant1606" target={"blank"}>
            <AiFillGithub />
          </a>
          <a href="https://www.linkedin.com/in/anant-sharma-505126237/" target={"blank"}>
            <AiFillLinkedin />
          </a>
         
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
