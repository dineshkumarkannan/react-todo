import React from "react";

const Card = ({ children }) => {
  return (
    <div className="mx-1 my-1 py-4 border-2 rounded-sm border-stone-300">
      {children}
    </div>
  );
};

export default Card;
