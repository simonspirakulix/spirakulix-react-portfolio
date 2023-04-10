import React, { useState } from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { AiFillCloud, AiFillProject } from "react-icons/ai";
import { filterOptions, portfolioData } from "./utils";
import Iframe from 'react-iframe';
import "./styles.scss";

const Portfolio = () => {
  const [filterValue, setFilterValue] = useState(1);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleFilter = (id) => {
    setFilterValue(id);
  };

  console.log(filterValue);

  const filteredPortfolioData =
    filterValue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.sectionId === filterValue);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="Portfolio"
        icon={<AiFillProject size={40} />}
      />
    <div className="figma_portfolio_frame">
    <Iframe url="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FS7QQISHbUHGL5ANJjUuGVc%2FUXportfolio%25231%3Fpage-id%3D0%253A1%26node-id%3D1-2%26viewport%3D-3884%252C341%252C0.33%26scaling%3Dcontain%26starting-point-node-id%3D1%253A2" width="100%" height="600px" id="uxlean_portfolio_iframe" display="block" position="relative" />
    <h1> <AiFillCloud size={30} /> <a href="https://www.figma.com/proto/S7QQISHbUHGL5ANJjUuGVc/UXportfolio%231?page-id=0%3A1&node-id=3-17&viewport=407%2C315%2C0.33&scaling=contain&starting-point-node-id=1%3A2">View Portfolio on Figma.com</a></h1>
    </div>
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterOptions.map((option) => (
            <li
              onClick={() => handleFilter(option.id)}
              key={`filter${option.id}`}
              className={option.id === filterValue ? 'active' : ''}
            >
              {option.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredPortfolioData.map((item, key) => (
            <div
              onMouseEnter={() => setHoveredIndex(key)}
              onMouseLeave={() => setHoveredIndex(null)}
              key={key}
              className="portfolio__content__cards__item"
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img src={item.image} alt="project image" />
                </a>
              </div>
              <div className="overlay">
                {hoveredIndex === key && (
                  <div>
                    <p>{item.projectName}</p>
                    <a target="self" href={item.projectLink}>
                    <button>Visit</button>
                    </a>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
