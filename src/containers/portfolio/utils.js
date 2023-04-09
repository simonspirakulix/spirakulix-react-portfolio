import ImageOne from "../../images/burger.jpg";
import ImageTwo from "../../images/base9.jpg";
import ImageThree from "../../images/image3.jpg";
import ImageFour from "../../images/image4.jpg";
import ImageFive from "../../images/image5.jpg";

export const portfolioData = [
  {
    sectionId: 3,
    projectName: "ToDo Application",
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
    projectName: "Calculator app",
    projectLink: "", //project link here based on you choice
    image: ImageThree,
  },
  {
    sectionId: 3,
    projectName: "Supplier design app",
    projectLink: "", //project link here based on you choice
    image: ImageFour,
  },
  {
    sectionId: 3,
    projectName: "Design App",
    projectLink: "", //project link here based on you choice
    image: ImageFive,
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
