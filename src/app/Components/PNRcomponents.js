import React, { useState } from "react";
import axios from "axios";
import citiesData from "../utils/cities.json";
import OutputComponent from "./OutputComponent";
import ErrorComponent from "./ErrorComponent";

const PNRComponent = () => {
  const [PNRNumber, setPNRNumber] = useState("");
  const [outputData, setOutputData] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setPNRNumber(event.target.value);
  };

  const handleSubmit = async () => {
    setOutputData(null);
    setError(null);

    const options = {
      method: "GET",
      url: `https://pnr-status-indian-railway.p.rapidapi.com/pnr-check/${PNRNumber}`,
      headers: {
        "X-RapidAPI-Key": "e1c2a461a3msh8fe1d8eff1d0b93p10ef82jsne71282f228c6",
        "X-RapidAPI-Host": "pnr-status-indian-railway.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      const data = response.data.data;

      const destinationStation = data.destinationInfo.stationName;
      const matchedCity = citiesData.find((city) => city.name.toLowerCase() === destinationStation.toLowerCase());

      if (matchedCity) {
        setOutputData({ city: matchedCity, matched: true });
      } else {
        setOutputData({ city: destinationStation, matched: false });
      }
    } catch (error) {
      if (error.response && error.response.status === 429) {
        setError("API limit exceeded. Please search manually by entering the city name.");
      } else {
        setError("PNR is incorrect. Please search manually by entering the city name.");
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="bg-glass rounded-lg shadow-lg p-6 lg:w-full w-4/5 max-w-md mx-auto">
        {!outputData && !error && (
          <div>
            <h2 className="text-2xl font-bold mb-4 text-center text-black">Enter Your PNR Number</h2>
            <div className="mb-4">
              <input
                type="text"
                id="pnr"
                name="pnr"
                value={PNRNumber}
                onChange={handleChange}
                className="w-full border text-black border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:border-blue-500 bg-white bg-opacity-80"
                placeholder="PNR Number"
              />
              <button
                type="submit"
                onClick={handleSubmit}
                className="w-full bg-blue-500 text-white rounded-lg p-3 font-bold hover:bg-blue-600 bg-opacity-80"
              >
                Search
              </button>
            </div>
          </div>
        )}
        {outputData && <OutputComponent outputData={outputData} />}
        {error && <ErrorComponent error={error} setOutputData={setOutputData} />}
        {/* <ErrorComponent error={error} setOutputData={setOutputData} />\ */}
        
      </div>
    
    </div>
    
  );
};

export default PNRComponent;
