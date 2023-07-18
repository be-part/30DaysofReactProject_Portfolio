import { useState } from "react";
import { countriesData } from "../data/countries";
import Overlay from "./Overlay";

const CountryGenerator = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOverlay = () => {
    setIsOpen(!isOpen);
  };

  

  const numberGenerator = Math.floor(Math.random() * countriesData.length - 1);
  const [country, setCountry] = useState({
    name: "United Kingdom of Great Britain and Northern Ireland",
    capital: "London",
    languages: ["English"],
    population: 65110000,
    flag: "https://restcountries.eu/data/gbr.svg",
    currency: "British pound",
  });

  const handleEvent = () => {
    setCountry(countriesData[numberGenerator]);
  };


  const formatLanguages = (country) => {
    if (country.languages.length === 1) {
      return country.languages[0]
    } else {
      const formattedCountry = country.languages.map(language => language).join(", ");
      return formattedCountry;
    }
  };

  return (
    <div className="wrapper">
      <div className="header-btn-container">
        <h2>Country Generator</h2>

        <button className="overlay-open-btn" onClick={toggleOverlay}>
          More Info❔
        </button>
      </div>

      <Overlay isOpen={isOpen} onClose={toggleOverlay}>
        <h4 className="overlay-title">About: Country Generator</h4>
        <p className="overlay-info">
          This mini app was created as part of Day 08 of the challenge. The
          purpose of this challenge was to practise using states. I had used
          states before in previous projects, and on this project to allow users
          to toggle the 'theme' or 'mode' of the app.
        </p>
        <p className="overlay-info">
          In this app, I created a function that generated a random number to a
          maximum of the length of the number of countries, and then used that
          number to set a random country to the state of 'country'. This is then
          displayed on the page for the user.Everytime the button is clicked,
          the function is invoked and a new country is set to the 'country'
          state, triggering a re-render of the component.
        </p>
        <p className="overlay-info">
          This was a nice project to recap methods like generating random
          numbers within certain limits, using functions that are invoked on
          button clicking and using state.
        </p>
      </Overlay>

      <div>
        <p className="explanation">Press the button to get a country: </p>
        <button className="btn" onClick={handleEvent}>
          Generate!
        </button>
      </div>

      <div className="country-container">
        <h3>{country.name}</h3>
        <p>Capital: {country.capital}</p>
        <p>Languages: {formatLanguages(country)}</p>
        <p>Population: {country.population.toLocaleString()}</p>
        <p>Currency: {country.currency}</p>
      </div>
    </div>
  );
};

export default CountryGenerator;
