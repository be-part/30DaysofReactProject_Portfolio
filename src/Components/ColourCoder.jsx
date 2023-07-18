import { useState } from "react";
import Overlay from "./Overlay";

const ColourCoder = () => {
  const [number, setNumber] = useState("");
  const [numberArray, setNumberArray] = useState([]);

  const [isOpen, setIsOpen] = useState(false);

  const toggleOverlay = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const arr = [];
    for (let i = 1; i <= number; i++) {
      arr.push(i);
    }
    setNumberArray(arr);
  };

  const colourBoxes = () => {
    return numberArray.map((number, index) => {
      if (number === 1) {
        return (
          <div
            key={index}
            className="grid-item"
            style={{ backgroundColor: "#F1BC33" }}
          >
            {number}
          </div>
        );
      } else if (number === 2) {
        return (
          <div
            key={index}
            className="grid-item"
            style={{ backgroundColor: "#D5392F" }}
          >
            {number}
          </div>
        );
      } else {
        for (let i = 2; i < number; i++) {
          if (number % i === 0 && number % 2 === 0) {
            return (
              <div
                key={index}
                className="grid-item"
                style={{ backgroundColor: "#75AD5D" }}
              >
                {number}
              </div>
            );
          } else if (number % i === 0 && number % 2 !== 0) {
            return (
              <div
                key={index}
                className="grid-item"
                style={{ backgroundColor: "#F1BC33" }}
              >
                {number}
              </div>
            );
          }
        }
        return (
          <div
            key={index}
            className="grid-item"
            style={{ backgroundColor: "#D5392F" }}
          >
            {number}
          </div>
        );
      }
    });
  };

  return (
    <div className="wrapper">
      <div className="header-btn-container">
        <h2>Colour Coder</h2>

        <button className="overlay-open-btn" onClick={toggleOverlay}>
          More Info❔
        </button>
      </div>

      <Overlay isOpen={isOpen} onClose={toggleOverlay}>
        <h4 className="overlay-title">About: Colour Coder</h4>
        <p className="overlay-info">
          This mini app was created as part of Day 06 of the challenge. The
          purpose of this challenge was to practise using 'map()'. The original
          task was to make a number of boxes appear the correct colour depending
          on whether were odd, even or prime.
        </p>
        <p className="overlay-info">
          I decided to challenge myself using some previous React knowledge and
          implement an option for people to select how many boxes they wanted to
          make - with a 100 maximum limit.
        </p>
        <p className="overlay-info">
          I was familiar with map from previous projects, but creating a
          function to check each number was more difficult and I used some
          previously completed katas to help me. I used the colour generator
          code to help create the number boxes.
        </p>
      </Overlay>

      <form className="colour-form" onSubmit={handleSubmit}>
        <label htmlFor="quantity" className="colour-label">
          Enter a number between 1 and 100:
        </label>
        <input
          htmlFor="quantity"
          placeholder="0"
          className="colour-input"
          type="number"
          min="1"
          max="100"
          required
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button className="btn" type="submit">
          Generate!
        </button>
      </form>

      <div className="key">
        <p>
          <span className="key-title">Key:</span>
        </p>
        <p>Yellow = Odd and not prime</p>
        <p>Green = Even and not prime</p>
        <p>Red = Prime</p>
      </div>

      <div className="colour-coder-container">{colourBoxes()}</div>
    </div>
  );
};

export default ColourCoder;
