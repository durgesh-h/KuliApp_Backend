import axios from "axios";
import React from "react";
import citiesData from "../utils/cities.json"; // Importing local JSON data
import "./PNRStyle.css";
import { useToast } from "@chakra-ui/react"; // Import useToast

class PNRComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      PNRNumber: "",
      PNRDetails: {}, // Initialize as an object
      DestI: {},
      PassengerStatus: [], // Initialize as an array
      OnButtonClicked: false,
      ErrorMessage: "",
      IsErrorOccurred: false,
    };
  }

  handleChange = (event) => {
    this.setState({
      PNRNumber: event.target.value,
    });
  };

  handleManualEntry = () => {
    const userEnteredStation = prompt("Please enter the destination station:");
    if (userEnteredStation) {
      const matchedCity = citiesData.find((city) => city.name === userEnteredStation);
      if (matchedCity) {
        this.props.showToast({
          title: "Destination station matched",
          description: `Destination station matched: ${userEnteredStation}`,
          status: "success",
        });
        if (window.confirm('Would you like to open WhatsApp to send a message?')) {
          const message = `Hey! I need your service in ${userEnteredStation}. Can we talk?`;
          const encodedMessage = encodeURIComponent(message);
          window.open(`https://wa.me/${matchedCity.whatsappNumber}?text=${encodedMessage}`);
        }
      } else {
        this.props.showToast({
          title: "No matching station found",
          description: "Please try again.",
          status: "error",
        });
      }
    }
  };

  handleSubmit = async () => {
    this.setState({
      PNRDetails: {}, // Reset to an empty object
      DestI: {},
      PassengerStatus: [], // Reset to an empty array
      ErrorMessage: "",
      IsErrorOccurred: false,
    });

    const options = {
      method: "GET",
      url: `https://pnr-status-indian-railway.p.rapidapi.com/pnr-check/${this.state.PNRNumber}`, // Changed API URL
      headers: {
        "X-RapidAPI-Key": "e1c2a461a3msh8fe1d8eff1d0b93p10ef82jsne71282f228c6",
        "X-RapidAPI-Host": "pnr-status-indian-railway.p.rapidapi.com",
      },
    };

    try {
      const response = await axios.request(options);
      console.log(response.data);

      const data = response.data.data;

      this.setState({
        PNRDetails: data.trainInfo, // Update to match new API response structure
        DestI: data.destinationInfo,
        PassengerStatus: data.passengerInfo, // Update to match new API response structure
        OnButtonClicked: true,
      });

      // Matching destination station with local JSON data
      const destinationStation = data.destinationInfo.stationName; // Updated to match new API response structure
      const matchedCity = citiesData.find((city) => city.name === destinationStation);
      if (matchedCity) {
        // Display message and open WhatsApp popup
        this.props.showToast({
          title: "Destination station matched",
          description: `Destination station matched: ${destinationStation}`,
          status: "success",
        });
        if (window.confirm('Would you like to open WhatsApp to send a message?')) {
          const message = `Hey! I need your service in ${destinationStation}. Can we talk?`;
          const encodedMessage = encodeURIComponent(message);
          window.open(`https://wa.me/${matchedCity.whatsappNumber}?text=${encodedMessage}`);
        }
      }
    } catch (error) {
      this.setState({
        ErrorMessage: "Please enter the correct PNR...",
        IsErrorOccurred: true,
      });
      this.handleManualEntry();
    }
  };

  render() {
    const {
      PNRDetails,
      DestI,
      PNRNumber,
      PassengerStatus,
      IsErrorOccurred,
      ErrorMessage,
      OnButtonClicked,
    } = this.state;

    return (
      <div className="min-h-screen font-bold flex flex-col items-center justify-center bg-white p-4 sm:p-8">
        <div className="bg-white border-2 border-red-500 shadow-lg rounded-lg p-6 sm:p-8 w-2/3 transform transition-all hover:shadow-2xl hover:scale-105">
          <h2 className="text-2xl  mb-6 text-center text-back animate-fadeIn">Enter Your PNR Number</h2>
          <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 mb-6 animate-slideUp">
            <input
              type="text"
              id="pnr"
              name="pnr"
              value={this.state.PNRNumber}
              onChange={this.handleChange}
              className="border border-back rounded-md p-2 flex-grow focus:outline-none focus:ring-2 focus:ring-red-600 transition duration-300"
            />
            <button
              type="submit"
              onClick={this.handleSubmit}
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-white hover:text-red-600 border-2 border-red-600 focus:outline-none focus:ring-2 focus:ring-red-900 transition duration-300"
            >
             <b>Search</b>
            </button>
            
           
          </div>
          <h2 className="text-1xl mb-6 text-center text-back animate-fadeIn">OR</h2>

          <button
              type="button"
              onClick={this.handleManualEntry}
              className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-white hover:text-red-600 border-2 border-red-600 focus:outline-none focus:ring-2 focus:ring-red-900 transition duration-300"
            >
              <b>Enter City Manually</b>
            </button>
          {IsErrorOccurred && (
            <h5 className="text-red-500 text-center animate-fadeIn">{ErrorMessage}</h5>
          )}
          {OnButtonClicked && (
            <div className="mt-6 animate-slideUp">
              <div className="overflow-x-auto">
                <table className="table-auto w-full text-left border border-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2 border">Train Number</th>
                      <th className="px-4 py-2 border">Train Name</th>
                      <th className="px-4 py-2 border">Source Station</th>
                      <th className="px-4 py-2 border">Destination Station</th>
                      <th className="px-4 py-2 border">Destination Arrival Date</th>
                      <th className="px-4 py-2 border">Destination Arrival Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-gray-100 hover:bg-gray-200 transition duration-200">
                      <td className="px-4 py-2 border">{PNRDetails.trainNo}</td>
                      <td className="px-4 py-2 border">{PNRDetails.name}</td>
                      <td className="px-4 py-2 border">{PNRDetails.boarding}</td>
                      <td className="px-4 py-2 border">{DestI.stationName}</td>
                      <td className="px-4 py-2 border">{PNRDetails.dt}</td>
                      <td className="px-4 py-2 border">{DestI.departureTime}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="overflow-x-auto mt-4">
                <table className="table-auto w-full text-left border border-gray-200">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="px-4 py-2 border">Passenger PNR No.</th>
                      <th className="px-4 py-2 border">Coach</th>
                      <th className="px-4 py-2 border">Berth</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Array.isArray(PassengerStatus) &&
                      PassengerStatus.map((passenger, index) => (
                        <tr key={index} className="bg-gray-100 hover:bg-gray-200 transition duration-200">
                          <td className="px-4 py-2 border">{PNRNumber}</td>
                          <td className="px-4 py-2 border">{passenger.currentCoach}</td>
                          <td className="px-4 py-2 border">{passenger.currentBerthNo}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

function PNRComponentWithToast(props) {
  const toast = useToast();

  const showToast = (options) => {
    toast({
      title: options.title,
      description: options.description,
      status: options.status,
      duration: 9000,
      isClosable: true,
      position: "top",
    });
  };

  return <PNRComponent showToast={showToast} />;
}

export default PNRComponentWithToast;
