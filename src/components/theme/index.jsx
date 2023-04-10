import React, { useEffect, useState } from "react";
import { ImDisplay } from "react-icons/im";
import setTheme from "../../helpers/theme";
import './styles.scss';
const colorsArray = [
  {
    id: "yellow",
    bgColor: "#FBFF41",
  },
  {
    id: "red",
    bgColor: "#FF9C41",
  },
  {
    id: "green",
    bgColor: "#00FFD1",
  },
  {
    id: "blue",
    bgColor: "#396C89",
  },
];

const Theme = () => {
  const [theme, setCurrentTheme] = useState("blue");
  const [toggle, setToggle] = useState(false);

  const handleToggleTheme = (currentId) => {
    setCurrentTheme(currentId);
    setToggle(false);
  };

  useEffect(() => {
    setTheme(theme)
  }, [theme])


  return (
    <div className={`theme-wrapper ${toggle ? "active" : ""}`}>
      <div className="theme-wrapper__toggle-icon">
        <ImDisplay onClick={() => setToggle(!toggle)} size={40} />
      </div>
      <div className="theme-wrapper__menu">
        <h4>Choose Theme</h4>
        <ul>
          {colorsArray.map((item, key) => (
            <li
              onClick={() => handleToggleTheme(item.id)}
              key={key}
              style={{ background: item.bgColor }}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Theme;
