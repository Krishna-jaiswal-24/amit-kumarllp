// LegalServiceCard.js
import React from "react";

const LegalServiceCard = ({ id, title, image, description }) => {
  return (
    <div
      key={id}
      className="max-w-md bg-white shadow-md rounded-3xl border-2  border-zinc-200 overflow-hidden flex flex-col items-center
         justify-center my-14 h-96 w-96 hover:scale-105 hover:cursor-pointer
         hover:shadow-2xl"
    >
      <img src={image} alt={title} className="w-full h-3/5 object-cover" />
      <div className="p-4 overflow-y-auto max-h-32">
        <h2 className="text-xl font-bold mb-2">{title}</h2>
        <p className="text-gray-700 ">{description}</p>
      </div>
    </div>
  );
};

export default LegalServiceCard;
