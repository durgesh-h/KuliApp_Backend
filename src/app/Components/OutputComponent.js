import React from "react";

const OutputComponent = ({ outputData }) => {
  const handleClick = () => {
    const message = `Hey! I need your service in ${outputData.city.name}. Can we talk?`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${outputData.city.whatsappNumber}?text=${encodedMessage}`);
  };

  return (
    <div className="text-center text-white">
      {outputData.matched ? (
        <>
          <p className="text-xl font-bold mb-4">We are serving at your city: {outputData.city.name}</p>
          <button
            type="button"
            onClick={handleClick}
            className="bg-green-500 text-white rounded-lg p-3 font-bold hover:bg-green-600"
          >
            Continue to WhatsApp
          </button>
        </>
      ) : (
        <p className="text-xl font-bold text-red-500">Sorry, we are not serving at your city.</p>
      )}
    </div>
  );
};

export default OutputComponent;
