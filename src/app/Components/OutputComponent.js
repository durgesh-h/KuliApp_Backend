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
            className="hover:bg-green-500 hover:text-white rounded-lg p-3 font-bold bg-white text-green-500"
          >
            Book On WhatsApp
          </button>
        </>
      ) : (
        <>
          <p className="text-xl  text-red-100 mb-4">
            Unfortunately, <br></br> Our Services Are Not Available At Your City <br></br>But We
            Will Reach Your City Soon. <br></br>Thankyou for visiting us!
          </p>
         <button
        type="button"
        onClick={() => (window.location.href = "https://kuli.live")}
        className="hover:bg-red-500 hover:text-white rounded-lg p-3 font-bold bg-white text-red-500"
      >
        Back to Home
      </button>
        </>
      )}
     </div>
    // <div className="text-center text-white">
    //   <>
    //     <p className="text-xl font-bold text-green-600 mb-4">
    //       Thankyou for visiting us! <br></br> Our Services Are Available at:{" "}
    //     </p>
    //     <button
    //       type="button"
    //       className="hover:bg-green-500 hover:text-white rounded-lg p-3 font-bold bg-white text-green-500"
    //     >
    //       Book On WhatsApp
    //     </button>
    //   </>

    //   <p className="text-xl font-bold text-red-600 mb-4">
    //     {" "}
    //     Unfortunately, Our Services Are Not Available At Your City, But We Will
    //     Reach Your City Soon. <br></br>Thankyou for visiting us!
    //   </p>
    //   <button
    //     type="button"
    //     onClick={() => (window.location.href = "https://kuli.live")}
    //     className="hover:bg-red-500 hover:text-white rounded-lg p-3 font-bold bg-white text-red-500"
    //   >
    //     Back to Home
    //   </button>
    // </div>
  );
};

export default OutputComponent;
