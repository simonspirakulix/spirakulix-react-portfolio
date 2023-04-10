import ImageOne from "../../images/burger.jpg";
import ImageTwo from "../../images/base9.jpg";
import ImageThree from "../../images/image3.jpg";
import ImageFour from "../../images/zweieinheit.png";
import ImageFive from "../../images/stadtstrandfluss.jpg";
import ImageSix from "../../images/mc-cube-app.jpg";

export const portfolioData = [
  {
    sectionId: 3,
    projectName: "Burger Restaurant Design",
    projectLink: "https://dribbble.com/shots/21111117-Burger-Restaurant-Design", //project link here based on you choice
    image: ImageOne,
  },
  {
    sectionId: 2,
    projectName: "Base9 Coworking Space Salzburg",
    projectLink: "", //project link here based on you choice
    image: ImageTwo,
  },
  {
    sectionId: 2,
    projectName: "Spacetelescope.org",
    projectLink: "http://spacetelescope.org", //project link here based on you choice
    image: ImageThree,
  },
  {
    sectionId: 2,
    projectName: "Zweieinheit Webpage",
    projectLink: "#", //project link here based on you choice
    image: ImageFour,
  },
  {
    sectionId: 2,
    projectName: "Stadt Strand Fluss",
    projectLink: "https://berlin-beats-boats.de/", //project link here based on you choice
    image: ImageFive,
  },
  {
    sectionId: 3,
    projectName: "Mc Cube App",
    projectLink: "https://www.mc-cube.at/", //project link here based on you choice
    image: ImageSix,
  }
];

export const filterOptions = [
  {
    label: "All",
    id: 1,
  },
  {
    label: "Developement",
    id: 2,
  },
  {
    label: "Design",
    id: 3,
  },
];
