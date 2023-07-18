import User from "./User";
import TechImages from "./TechImages";
import Subscribe from "./Subscribe";
import Overlay from "./Overlay";

import { useState } from "react";

const ExamplePortfolio = () => {
  const yourName = "YOUR NAME";

  const [isOpen, setIsOpen] = useState(false);

  const toggleOverlay = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="wrapper">
      <div className="header-btn-container">
        <h2>Example Portfolio</h2>

        <button className="overlay-open-btn" onClick={toggleOverlay}>
          More Info❔
        </button>
      </div>

      <Overlay isOpen={isOpen} onClose={toggleOverlay}>
        <h4 className="overlay-title">About: Example Portfolio</h4>
        <p className="overlay-info">
          This mini app was created as part of Days 04 and 05 of the challenge.
          The purpose of these days was to get comfortable with components and
          props.
        </p>
        <p className="overlay-info">
          This is why, in the code, you will see that the User, Images and
          Subscribe-form are all separate components imported into this general
          portfolio component, making them all children of the parent component
          'Example Portfolio'.
        </p>
        <p className="overlay-info">
          Furthermore, the user component is passed a prop of 'yourName' to
          practise the use of props.
        </p>
      </Overlay>

      <div className="portfolio-wrapper">
        <User yourName={yourName} />
        <TechImages />
        <Subscribe />
      </div>
    </div>
  );
};

export default ExamplePortfolio;
