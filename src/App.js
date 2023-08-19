import React, { useState, useEffect } from "react";
import axios from "axios";
import Search from "./Search";

const App = () => {
  const [dataa, setData] = useState(null); // Use null as the initial state
  const [target, setTarget] = useState("dehradun")

  const apiUrl = `https://api.weatherapi.com/v1/current.json?key=4ca39b1554724df6978193805231908&q=${target}`;




  useEffect(() => {
    axios.get(apiUrl)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Axios error:', error);
      });
  }, [apiUrl, target]);


  return (
    <div>
      <h1>Weather Data</h1>
      {dataa && (
        <div>
          <Search onChange={setTarget}/>
          <p>Location: {dataa.location.name}</p>
          <p>Temperature: {dataa.current.temp_c}°C</p>
          <p>Humidity: {dataa.current.humidity}%</p>
          {/* Add more data fields as needed */}
        </div>
      )}
    </div>
  );
};

export default App;
