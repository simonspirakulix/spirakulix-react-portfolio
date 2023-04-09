import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { RiContactsLine } from "react-icons/ri";
import { DiApple, DiPhotoshop, DiGitBranch } from "react-icons/di";
import { FaDev } from "react-icons/fa";
import { Animate } from "react-simple-animate";

import { personalData } from "./utils";
import "./styles.scss";

const About = () => {
  return (
    <section className="about" id="about">
      <PageHeaderContent
        headerText="About Simon Spirakulix"
        icon={<RiContactsLine size={40} />}
      />

      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(-800px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <h3 className="developerContent">UX-Architect, UI & Frontend Web-Designer</h3>
            <p>
              I am Simon, Senior Graphic & Web-Designer, User Experience Architect, Public Outreach Manger and Web Administrator. <br />
            </p>
            <p>
              Life-long enthusiastic digital-nomad.
            </p>
            <p>
              In more than 15 years I offer my services as a full-service agency from the scribble to the customer review, I am used to understanding the whole product lifecycle.
            </p>
            <p>

              Mostly I come into place in companies where they need a bridge between programmers, designers and stakeholders to understand all of them and be able to visualise and explain the required steps to make a product standout in the masses.
            </p>
            <p>

              I had small to medium-sized companies as my clients, as well as government institutions and startups.
            </p>
            <p>

              I am always ready to explore the newest technologies and use them in real life. My approach is to always stay informed about the best possible solutions to date. While I am constantly seeking for implementing the best practise in my workflow.
            </p>
            <p>

              Also, AI-aided design plays a role in the future, where I am using this technology in order to get things done in a fraction of time than it was before. On the other "hand" I am using pen and paper to scribble and start an Idea which gets a wireframe and in a later stage a working prototype, where I am able to program and implement the end result as well if needed.
            </p>
            <p>

              I love user-centred design and solutions which, when done right, make the customer happy and the product a true success. My approach to my self is to deliver great products that the end user will love.
            </p>
            <p>

              Furthermore, I am working as a User-Experience Architect and be able to pinpoint the necessary UI-implementations in order to create a more successful product which converts.
            </p>
            <p>

              Please feel free to contact me, I am open to get clients as well as working in a team remotely.<br /><br />

              Let us shape the future, together!<br /><br />

              Sincerely,
              Simon
            </p>
          </Animate>
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
          </Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <h3 className="personalContent">Personal Information</h3>
          <ul>
            {personalData.map((item, key) => (
              <li key={key}>
                <span className="title">{item.label}</span>
                <span className="value">{item.value}</span>
              </li>
            ))}
          </ul>
          
          <Animate
            play
            duration={1}
            delay={0}
            start={{
              transform: "translateX(500px)",
            }}
            end={{
              transform: "translateX(0px)",
            }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <DiApple size={60} color="var(--selected-theme-main-color)" />
              </div>
              <div>
                <DiGitBranch
                  size={60}
                  color="var(--selected-theme-main-color)"
                />
              </div>
              <div>
                <DiPhotoshop size={60} color="var(--selected-theme-main-color)" />
              </div>
              <div>
                <FaDev size={60} color="var(--selected-theme-main-color)" />
              </div>
            </div>

          </Animate>
        </div>
      </div>
    </section>
  );
};

export default About;
