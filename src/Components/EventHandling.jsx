import React from "react";
import { useState } from "react";
import Overlay from "./Overlay";

const EventHandling = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOverlay = () => {
    setIsOpen(!isOpen);
  };

  const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 });
  const [boxCoordinates, setBoxCoordinates] = useState({ left: 0, top: 0 });

  const handleMouseMove = (event) => {
    setMouseCoordinates({
      x: event.clientX,
      y: event.clientY,
    });
  };

  const handleMouseEnter = () => {
    setBoxCoordinates({
      left: Math.random() * (window.innerWidth - 100),
      top: Math.random() * (window.innerHeight - 100),
    });
  };

  return (
    <div className="wrapper" onMouseMove={handleMouseMove}>
      <div className="header-btn-container">
        <h2>Event Handling</h2>

        <button className="overlay-open-btn" onClick={toggleOverlay}>
          More Info❔
        </button>
      </div>

      <Overlay isOpen={isOpen} onClose={toggleOverlay}>
        <h4 className="overlay-title">About: Event Handling</h4>
        <p className="overlay-info">
          This mini app was created as part of Day 11 of the challenge. The
          purpose of this challenge was to practise handling events.
        </p>
        <p className="overlay-info">
          This one was quite difficult. I understood and had handled some other
          events such as onSubmit and onChange previously, but this was the
          first time I had used 'onMouseEnter' and 'onMouseMove'. The first
          thing that I had to learn was how to access things such as the X and Y
          coordinates of the mouse pointer or the window height and width.
        </p>
        <p className="overlay-info">
          Then, I had to experiment with the placement of the
          event-listener/event-handler to make sure it was working in the way I
          wanted it to. For example; yellow box should only move when the mouse
          pointer enters that box, but the coordinates should update no matter
          where the mouse pointer is on the page.
        </p>
      </Overlay>
      <p className="event-text">
        Mouse Coordinates: x = {mouseCoordinates.x}, y={mouseCoordinates.y}
      </p>
      <div onMouseEnter={handleMouseEnter}>
        <p
          className="moving-box"
          style={{ left: boxCoordinates.left, top: boxCoordinates.top }}
        >
          Can't catch me!
        </p>
      </div>
    </div>
  );
};

export default EventHandling;
