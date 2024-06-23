import React from "react";

const OutputComponent = ({ outputData }) => {
    const handleClick = () => {
      const message = `Hey! I need your service in ${outputData.city.name}. Can we talk?`;
      const encodedMessage = encodeURIComponent(message);
      window.open(
        `https://wa.me/${outputData.city.whatsappNumber}?text=${encodedMessage}`
      );
    };

  return (
    <div className="text-center text-white">
      {outputData.matched ? (
        <>
          <p className="text-xl  text-green-600 mb-4">
            Thankyou for visiting us! <br></br> Our Services Are Available at{" "}
            {outputData.city.name}
          </p>
          <button
            type="button"
            onClick={handleClick}
            className="hover:bg-green-600 hover:text-white rounded-lg p-3 font-bold bg-green-500 text-white"
          >
            Book On WhatsApp
          </button>
        </>
      ) : (
        <>
          <p className="text-xl  text-red mb-4">
            Unfortunately, Our Services Are Not Available At Your Station <br></br>But We
            Will Reach Soon. <br></br>Thankyou for visiting us!
          </p>
         <button
        type="button"
        onClick={() => (window.location.href = "https://kuli.live")}
        className="bg-red text-white rounded-lg p-3 font-bold hover:bg-back hover:text-red "
      >
        Back to Home
      </button>
        </>
      )}
     </div>
  );
};

export default OutputComponent;
