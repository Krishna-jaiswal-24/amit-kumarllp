// LegalServices.js
import React from "react";
import LegalServiceCard from "./LegalServiceCard";
import legalData from "./data";

const LegalServices = () => {
  return (
    <section id="legal-services" className="flex flex-col items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl my-8">Legal Services</h1>
      </div>

      <div className="flex items-center flex-wrap justify-between w-4/5">
        {legalData.map((service) => (
          <LegalServiceCard key={service.id} {...service} />
        ))}
      </div>
    </section>
  );
};

export default LegalServices;
