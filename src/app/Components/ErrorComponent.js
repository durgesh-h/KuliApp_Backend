import React, { useState } from "react";
import citiesData from "../utils/cities.json";
import OutputComponent from "./OutputComponent";

const ErrorComponent = ({ error, setOutputData }) => {
  const [manualCity, setManualCity] = useState("");
  const [showOutput, setShowOutput] = useState(false);
  const [outputData, setOutput] = useState(null);

  const handleManualCityChange = (event) => {
    setManualCity(event.target.value);
  };

  const handleManualEntry = () => {
    const matchedCity = citiesData.find((city) => city.name.toLowerCase() === manualCity.toLowerCase());
    if (matchedCity) {
      setOutput({ city: matchedCity, matched: true });
    } else {
      setOutput({ city: manualCity, matched: false });
    }
    setShowOutput(true);
  };

  return (
    <div className="text-center text-white">
      {showOutput && outputData ? (
        <OutputComponent outputData={outputData} />
      ) : (
        <div>
          <p className="text-xl font-bold text-red-500 mb-4">{error}</p>
          <div className="mb-4">
            <input
              type="text"
              id="city"
              name="city"
              value={manualCity}
              onChange={handleManualCityChange}
              className="w-full border border-gray-300 rounded-lg p-3 mb-4 focus:outline-none focus:border-blue-500"
              placeholder="Enter city name"
            />
            <button
              type="button"
              onClick={handleManualEntry}
              className="w-full bg-blue-500 text-white rounded-lg p-3 font-bold hover:bg-blue-600"
            >
              Search City
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ErrorComponent;
