import React from "react";

const ErrorComponent = ({ error }) => {
  return (
    <div className="text-center text-black">
      <p className="text-xl text-black mb-4">{error}</p>
    </div>
  );
};

export default ErrorComponent;
