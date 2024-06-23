import React, { useState } from "react";
import axios from "axios";
import citiesData from "../utils/cities.json";
import OutputComponent from "./OutputComponent";
import ErrorComponent from "./ErrorComponent";

const PNRComponents = () => {
  const [PNRNumber, setPNRNumber] = useState("");
  const [stationName, setStationName] = useState("");
  const [searchType, setSearchType] = useState("pnr");
  const [outputData, setOutputData] = useState(null);
  const [error, setError] = useState(null);

  const handlePNRChange = (event) => {
    setPNRNumber(event.target.value);
  };

  const handleStationChange = (event) => {
    setStationName(event.target.value);
  };

  const handleSearchTypeChange = (event) => {
    setSearchType(event.target.value);
    setOutputData(null);
    setError(null);
  };

  const handleSubmit = async () => {
    setOutputData(null);
    setError(null);

   

    if (searchType === "pnr") {
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
          setSearchType("station");
        } else {
          setError("PNR is incorrect. Please search manually by entering the city name.");
          setSearchType("station");
        }
      }
    } else if (searchType === "station") {
      const matchedCity = citiesData.find((city) => city.name.toLowerCase() === stationName.toLowerCase());

      if (matchedCity) {
        setOutputData({ city: matchedCity, matched: true });
      } else {
        setOutputData({ city: stationName, matched: false });
      }
    }
  };

  return (
    <div className="bg-white bg-opacity-80 h-80 lg:h-72 backdrop-blur-sm rounded-lg shadow-lg p-6 w-full">
      {/* Radio buttons for selecting search type */}
      <div className="mb-4 text-center p-6">
        <label className="mr-4">
          <input
            type="radio"
            value="pnr"
            checked={searchType === "pnr"}
            onChange={handleSearchTypeChange}
            className="mr-2"
          />
          PNR No.
        </label>
        <label>
          <input
            type="radio"
            value="station"
            checked={searchType === "station"}
            onChange={handleSearchTypeChange}
            className="mr-2"
          />
          Station
        </label>
      </div>

      {/* Conditional rendering based on search type */}
      {!outputData && !error && (
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold font-mono mb-4 text-center text-black">
            {searchType === "pnr" ? "Enter Your PNR Number" : "Enter Your Station Name"}
          </h2>
          <div className="flex lg:flex-row gap-2 items-center space-y-0 lg:space-y-0 lg:space-x-0 mb-4">
            {/* Input field based on search type */}
            {searchType === "pnr" ? (
              <input
                type="text"
                id="pnr"
                name="pnr"
                value={PNRNumber}
                onChange={handlePNRChange}
                className="w-full lg:w-auto flex-grow border text-black border-gray-300 rounded-full p-3 focus:outline-none bg-white bg-opacity-80"
                placeholder="PNR Number"
              />
            ) : (
              <input
                type="text"
                id="station"
                name="station"
                value={stationName}
                onChange={handleStationChange}
                className="w-full lg:w-auto flex-grow border text-black border-gray-300 rounded-full p-3 focus:outline-none bg-white bg-opacity-80"
                placeholder="Station Name"
              />
            )}
            {/* Search button */}
            <button
              type="submit"
              onClick={handleSubmit}
              className="lg:w-auto bg-red text-white rounded-full p-3 font-bold hover:bg-back hover:text-red bg-opacity-80"
            >
              Search
            </button>
          </div>
        </div>
      )}

      {/* Output or error component based on API response */}
      {outputData && <OutputComponent outputData={outputData} />}
      {error && (
        <>
          <ErrorComponent error={error} />
          <div className="flex lg:flex-row gap-2 items-center space-y-0 lg:space-y-0 lg:space-x-0 mb-4">
            {/* Input field for error scenario */}
            <input
              type="text"
              id="station"
              name="station"
              value={stationName}
              onChange={handleStationChange}
              className="w-full lg:w-auto flex-grow border text-black border-red rounded-full p-3 focus:outline-none bg-white bg-opacity-80"
              placeholder="Station Name"
            />
            {/* Search button for error scenario */}
            <button
              type="submit"
              onClick={handleSubmit}
              className="lg:w-auto bg-red text-white rounded-full p-3 font-bold hover:bg-back hover:text-red bg-opacity-80"
            >
              Search
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default PNRComponents;
