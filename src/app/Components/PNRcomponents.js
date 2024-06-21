import React, { useState } from "react";
import axios from "axios";
import citiesData from "../utils/cities.json";
import OutputComponent from "./OutputComponent";
import ErrorComponent from "./ErrorComponent";

const PNRComponent = () => {
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
    <div className="min-h-screen text-black font-mono bg-slate-200 flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "url('path-to-your-background-image.jpg')" }}>
      <div className="bg-white bg-opacity-80 backdrop-blur-sm rounded-lg shadow-lg p-6 lg:w-full w-4/5 max-w-md mx-auto">
        <div className="mb-4 text-center">
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
        {!outputData && !error && (
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold font-mono mb-4 text-center text-black">
              {/* {searchType === "pnr" ? "Enter Your PNR Number" : "Enter Your Station Name"} */}
            </h2>
            <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-2 mb-4">
              {searchType === "pnr" ? (
                <input
                  type="text"
                  id="pnr"
                  name="pnr"
                  value={PNRNumber}
                  onChange={handlePNRChange}
                  className="w-full lg:w-auto flex-grow border text-black border-gray-300 rounded-full p-3 focus:outline-none focus:border-blue-500 bg-white bg-opacity-80"
                  placeholder="PNR Number"
                />
              ) : (
                <input
                  type="text"
                  id="station"
                  name="station"
                  value={stationName}
                  onChange={handleStationChange}
                  className="w-full lg:w-auto flex-grow border text-black border-gray-300 rounded-full p-3 focus:outline-none focus:border-blue-500 bg-white bg-opacity-80"
                  placeholder="Station Name"
                />
              )}
              <button
                type="submit"
                onClick={handleSubmit}
                className="w-full lg:w-auto bg-blue-500 text-white rounded-full p-3 font-bold hover:bg-blue-600 bg-opacity-80"
              >
                Search
              </button>
            </div>
          </div>
        )}
        {outputData && <OutputComponent outputData={outputData} />}
        {error && (
          <>
            <ErrorComponent error={error} />
            <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-2 mb-4">
              <input
                type="text"
                id="station"
                name="station"
                value={stationName}
                onChange={handleStationChange}
                className="w-full lg:w-auto flex-grow border text-black border-gray-300 rounded-full p-3 focus:outline-none focus:border-blue-500 bg-white bg-opacity-80"
                placeholder="Station Name"
              />
              <button
                type="submit"
                onClick={handleSubmit}
                className="w-full lg:w-auto bg-blue-500 text-white rounded-full p-3 font-bold hover:bg-blue-600 bg-opacity-80"
              >
                Search
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default PNRComponent;
