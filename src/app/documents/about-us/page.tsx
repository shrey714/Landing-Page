// dashboard/about-us.js

import React from "react";
import aboutData from "./aboutData.json";

const AboutUs = () => {
  return (
    <div>
      <div className="max-w-4xl mx-auto pb-12 px-4 sm:px-6 lg:px-8 text-gray-800">
        <h1 className="text-3xl font-bold text-center mb-8">
          {aboutData.aboutPage.title}
        </h1>

        <div
          className="bg-white p-6 rounded-lg shadow-[0px_0px_0px_1px_#a0aec0]"
          style={{ overflowY: "auto" }}
        >
          {aboutData.aboutPage.sections.map((section, index) => (
            <div key={index} className="mb-6">
              <h2 className="text-xl font-semibold mb-4">{section.title}</h2>
              <p className="mb-4">{section.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
