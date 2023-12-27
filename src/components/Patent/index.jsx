// Patent.js

import React from "react";
import PropTypes from "prop-types";
import patentData from "./data";

const Patent = ({ data }) => {
  return (
    <section
      id="patent-services"
      className="flex flex-col items-center justify-center"
    >
      <div className="text-center my-8">
        <h1 className="text-4xl">Patent Services</h1>
      </div>
      <div className="flex items-center flex-wrap justify-between w-4/5 ">
        {data.map((patent) => (
          <div
            key={patent.id}
            className="max-w-md bg-white shadow-md rounded-3xl border-2  border-zinc-200 overflow-hidden flex flex-col items-center
             justify-center my-14 h-96 w-96 hover:scale-105 hover:cursor-pointer
             hover:shadow-2xl
             "
          >
            <img
              src={patent.image}
              alt={patent.title}
              className="w-full h-3/5 object-cover"
            />
            <div className="p-4 overflow-y-auto max-h-32">
              <h2 className="text-xl font-bold mb-2">{patent.title}</h2>
              <p className="text-gray-700 ">{patent.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

Patent.propTypes = {
  data: PropTypes.array.isRequired,
};

// Use default data if not provided
Patent.defaultProps = {
  data: patentData,
};

export default Patent;
