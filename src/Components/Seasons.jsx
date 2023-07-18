import { useState } from "react";
import Overlay from "./Overlay";

const seasonCode = require("../assets/images/season_code.png");

const Seasons = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOverlay = () => {
    setIsOpen(!isOpen);
  };
  const autumnImage = require("../assets/images/autumn.jpg");
  const winterImage = require("../assets/images/winter.jpg");
  const springImage = require("../assets/images/spring.jpg");
  const summerImage = require("../assets/images/summer.jpg");

  const currentDate = new Date();
  const month = currentDate.getMonth() + 1;

  const checkSeason = function (month) {
    if (month >= 9 && month < 12) {
      return { currentSeason: "Autumn", img: autumnImage };
    } else if (month === 12 || month === 1 || month === 2) {
      return { currentSeason: "Winter", img: winterImage };
    } else if (month >= 3 && month < 6) {
      return { currentSeason: "Spring", img: springImage };
    } else if (month >= 6 && month < 9) {
      return { currentSeason: "Summer", img: summerImage };
    }
  };

  return (
    <div className="wrapper">
      <div className="header-btn-container">
        <h2>Seasons</h2>

        <button className="overlay-open-btn" onClick={toggleOverlay}>
          More Info❔
        </button>
      </div>

      <Overlay isOpen={isOpen} onClose={toggleOverlay}>
        <h4 className="overlay-title">About: Seasons</h4>
        <p className="overlay-info">
          This mini app was created as part of Day 09 of the challenge. The
          purpose of this challenge was to practise conditional rendering.
        </p>
        <p className="overlay-info">
          It might not look like much! However, this page renders the season and
          the image based off of some logic using the JavaScript 'new Date'
          constructor. The correct season and matching image only renders if the
          current month belongs to that season.
        </p>
        <img
          src={seasonCode}
          alt="screenshot of a function that determines the season based off of the current month."
        />
      </Overlay>
      <div className="season-container">
        <h3> It is currently {checkSeason(month).currentSeason}.</h3>
        <img
          className="season-image"
          src={checkSeason(month).img}
          alt={`A field in ${checkSeason(month).currentSeason}`}
        ></img>
      </div>
    </div>
  );
};

export default Seasons;
