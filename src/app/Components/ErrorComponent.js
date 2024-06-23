import React from "react";

const ErrorComponent = ({ error }) => {
  return (
    <div className="text-center text-red">
      <p className="text-xl text-red mb-4">{error}</p>
    </div>
  );
};

export default ErrorComponent;
