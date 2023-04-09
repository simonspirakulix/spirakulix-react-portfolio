import React from "react";
import { Animate } from "react-simple-animate";
import { FaFacebook, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";
import "./styles.scss";
import { MdDownload, MdSend } from "react-icons/md";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home__logoHome">
        <img src="logo.svg" with="200"/>
      </div>
      <div className="home__text-wrapper">
        <h1>
          Hello,<br />
          I am Simon,<br />
          UX-Architect,<br /> 
          UI-Designer &<br />
          Frontend Web-Developer
        </h1>
      </div>
      <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateY(600px)",
        }}
        end={{
          transform: "translateX(0px)",
        }}
      >
        <div className="contact-me">
          <div className="contact-me__buttons-wrapper">
            <a href="contact/">Hire me <MdSend size={22}/></a>
            <a target="_blank" href="https://www.linkedin.com/in/simonspirakulix/">Download resume <MdDownload size={22}/></a>
          </div>
          <div className="contact-me__socials-wrapper">
            <a target="_blank" href="https://www.linkedin.com/in/simonspirakulix/"><FaLinkedin size={32} /></a>
            <a target="_blank" href="https://facebook.com/spirakulixuniverse"><FaFacebook size={32} /></a>
            <a target="_blank" href="https://twitter.com/simonspirakulix"><FaTwitter size={32} /></a>
            <a target="_blank" href="https://instagram.com/simonspirakulix"><FaInstagram size={32} /></a>
          </div>
        </div>
      </Animate>
    </section>
  );
};

export default Home;
