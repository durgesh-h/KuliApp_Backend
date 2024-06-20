import React, { useState } from "react";
import "./PNRStyle.css";

const ManualSearchComponent = ({ onManualEntry }) => {
  const [manualCity, setManualCity] = useState("");

  const handleManualCityChange = (event) => {
    setManualCity(event.target.value);
  };

  const handleManualEntryClick = () => {
    onManualEntry(manualCity);
  };

  return (
    <div className="manual-search-container bg-white border-2 border-red-500 shadow-lg rounded-lg p-6 md:w-2/3 w-full transform transition-all hover:shadow-2xl hover:scale-105">
      <p>We have reached the PNR fetching limit. Please search manually by entering your destination station.</p>
      <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 mb-6 animate-slideUp">
        <input
          type="text"
          id="city"
          name="city"
          value={manualCity}
          onChange={handleManualCityChange}
          className="border border-back rounded-md p-2 flex-grow focus:outline-none focus:ring-2 focus:ring-red-600 transition duration-300"
        />
        <button
          type="button"
          onClick={handleManualEntryClick}
          className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-white hover:text-red-600 border-2 border-red-600 focus:outline-none focus:ring-2 focus:ring-red-900 transition duration-300"
        >
          Search City
        </button>
      </div>
    </div>
  );
};

export default ManualSearchComponent;
