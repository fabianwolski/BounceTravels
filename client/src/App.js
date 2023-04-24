//importing images and states in React.
import './App.css';
import logo from './images/logo.svg';
import mountainImage from './images/mountainbeach.jpg';
import React, { useState } from 'react';

function App() {
  //State variables
  const [countryUserInput, setcountryUserInput] = useState('');
  const [countryInfo, setCountryInfo] = useState(null);
  const [showCountryInfo, setShowCountryInfo] = useState(false);

  //function to fetch country data when search button is clicked
  const fetchOnSearch = async () => {
    try {
      const response = await fetch(
        `http://localhost:3002/country-info/${countryUserInput}`
      );
      const countryData = await response.json();
      setCountryInfo(countryData[0]); //Update countryInfo state with fetched data
      //testing if data in fact was received
      //console.log(countryData);
      //if error I'm console logging it
    } catch (error) {
      console.error('error fetching country info(line 25 client)', error);
    }
    //when search butto clicked info is displayed as pop up
    setShowCountryInfo(true);
  };
  const fetchOnFooterClick = async (countryName) => {
    try {
      const response = await fetch(
        `http://localhost:3002/country-info/${countryName}`
      );
      const countryData = await response.json();
      setCountryInfo(countryData[0]);
    } catch (error) {
      console.error('error fetching country info(line 39 client)', error);
    }
    setShowCountryInfo(true);
  };

  //Array of country names(this is for the footer: Information on "X")
  const countries = [
    'Spain',
    'France',
    'Italy',
    'Germany',
    'Portugal',
    'Greece',
    'Switzerland',
    'Austria',
    'Belgium',
    'Netherlands',
    'Ireland',
  ];

  //function to display country info
  function CountryInfo({ country }) {
    //if  country object is not provided or doesn't have a valid name
    if (!country || !country.name?.common) {
      return null;
    }
    //else, display information on screen
    return (
      <div className="country-info">
        <h3>{country.name.common}</h3>
        <img src={country.flags.png} alt={`Flag of ${country.name.common}`} />
        <p>Capital: {country.capital[0]}</p>
        <p>Population: {country.population.toLocaleString()}</p>
        <p>Languages: {Object.values(country.languages).join(', ')}</p>
        <p>Area: {country.area.toLocaleString()} km²</p>
      </div>
    );
  }
  //main app component
  return (
    <div className="App">
      {/* header component */}
      <header>
        <div className="logo-container">
          <img src={logo} alt="Bounce Travels Logo" className="logo" />
          <h1 className="company-name">
            <span className="bounce">Bounce</span>
            <span className="travel">Travels</span>
          </h1>
        </div>
      </header>
      {/* main content component */}
      <div className="container-content">
        <div className="content">
          <h2 className="title">Country-Info</h2>
          <button className="generator-button">Generator</button>
          <p className="subtitle">Not sure where you want to go on holiday?</p>
          <p className="description">
            Let us make it easy for you! Type in a country you'd like to visit
            and we'll give you all the information you need.
          </p>
          <div className="search-container">
            <input
              className="search-input"
              type="text"
              placeholder="Enter a country name"
              value={countryUserInput}
              onChange={(e) => setcountryUserInput(e.target.value)}
            />
            <button className="search-button" onClick={fetchOnSearch}>
              Search
            </button>
          </div>
        </div>
        <div className="image-wrapper">
          <img src={mountainImage} alt="Mountain with a beach" />
        </div>
        {/*if showCountryInfoTrue- conditionally render the country info popup*/}
        {showCountryInfo && (
          <div className="country-info-popup">
            <div className="country-info-content">
              {/* close button for info popup */}
              <button
                className="close-btn"
                onClick={() => setShowCountryInfo(false)}
              >
                Close
              </button>
              <CountryInfo country={countryInfo} />
            </div>
          </div>
        )}
      </div>

      {/* footer component */}
      <footer>
        <div className="footer-container">
          <div>
            <div className="footer-title-text">Have a destination in mind?</div>
            <div className="footer-grid">
              {/*same functionality as if search button just when clicked `information on ' ` */}
              {countries.map((country) => (
                <button
                  key={country}
                  className="footer-text"
                  onClick={() => fetchOnFooterClick(country)}
                >
                  Information on {country}
                </button>
              ))}
            </div>
          </div>
          <div>
            <img src={logo} alt="Bounce Travels Logo" className="footer-logo" />
            <h1 className="footer-company-name">
              Bounce<span className="travel">Travels</span>
            </h1>
          </div>
        </div>
      </footer>
    </div>
  );
}
export default App;
