import { tenHighestPopulation } from "../data/ten_most_highest_populations";
import Overlay from "./Overlay";
import { useState } from "react";

const BarChart = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOverlay = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="wrapper">
      <div className="header-btn-container">
        <h2>Bar Chart</h2>

        <button className="overlay-open-btn" onClick={toggleOverlay}>
          More Info❔
        </button>
      </div>

      <Overlay isOpen={isOpen} onClose={toggleOverlay}>
        <h4 className="overlay-title">About: Bar Chart</h4>
        <p className="overlay-info">
          This mini app was created as part of Day 06 of the challenge. The
          purpose of this challenge was to practise using 'map()'.
        </p>
        <p className="overlay-info">
          It took a bit of thinking to work out how to make each bar the correct
          length, and I eventually used some maths to calculate the percentage
          of each bar using the world-population bar as 100%. I also implemented
          display: grid to ensure each part of the bar chart lined up correctly
          and learnt about 'toLocaleString()' to place the commas correctly in
          each number.
        </p>
        <p className="overlay-info">
          I am curious about learning something like D3 to visualise different
          types of data in different ways.
        </p>
      </Overlay>

      <h3 className="bar-title">World Population</h3>
      <p className="explanation">Ten most populated countries.</p>
      <ul>
        {tenHighestPopulation.map((country, index) => {
          return (
            <li key={index} className="single-country">
              <p className="country-info">{country.country.toUpperCase()}</p>
              <div
                className="bar-chart"
                style={{ width: `${(country.population / 7693165599) * 100}%` }}
              ></div>
              <p className="country-info">
                {" "}
                {country.population.toLocaleString()}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BarChart;
