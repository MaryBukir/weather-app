import React, {useState} from "react";
import axios from "axios";

function App() {

  const [data, setData] = useState({});
  const [location, setLocation] = useState('');

  // const url = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=1ea16ea4c9b44c6553072e400bbea74c`;
  return (
    <div className="app">
      <div className="search">
        <input 
        value={location}
        onChange={event => setLocation(event.target.value)}
        // onKeyPress={searchLocation}
        placeholder='Enter Location'
        type="text"
        />
      </div>
      <div className="container">
        <div className="top">
          <div className="location">
            <p>London</p>
          </div>
          <div className="temp">
            <h1>10</h1>
          </div>
          <div className="description">
            <p>Clouds</p>
          </div>
        </div>
        <div className="bottom">
          <div className="feels">
            <p>10°C</p>
          </div>
          <div className="humidity"></div>
          <div className="wind"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
