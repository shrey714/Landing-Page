"use client";
import ServiceCard from "./Component/ServiceCard";
import FeatureDisplayCard from "./Component/FeatureDisplayCard";
import DetailedFeature from "./Component/DetailedFeature";
import NavbarComponent from "./Component/NavbarComponent";
import MainComponent from "./Component/MainComponent";
import { useState } from "react";
import { services, features } from "./rawData";

export default function Home() {
  const [displayFeatureNo, setdisplayFeatureNo] = useState(0);

  return (
    <>
      <div className="bg-gray-300 rounded-2xl p-2 my-2 mx-4">
        <NavbarComponent />
        <MainComponent />
      </div>
      <p className="flex font-semibold text-xl sm:text-2xl md:text-4xl mx-2 my-4 justify-center">
        We serve you with Hospitality Services
      </p>
      <div className="flex flex-col md:flex-row gap-2 mx-4">
        {services.map((service, index) => {
          return <ServiceCard key={index} service={service} />;
        })}
      </div>
      <p className="flex font-semibold text-xl sm:text-2xl md:text-4xl mx-6 mt-6 text-blue-600">
        Why Choose Us?
      </p>
      <h1 className="font-semibold text-md sm:text-lg md:text-xl mx-6 my-4 text-gray-500">
        We provide the best plateform to doctors to manage their patients data
        and daily appointments
      </h1>
      <h1 className="font-semibold text-md sm:text-lg md:text-xl mx-6 my-4 text-gray-500">
        We provide the best plateform to doctors to manage their patients data
        and daily appointments
      </h1>
      <h1 className="font-semibold text-md sm:text-lg md:text-xl mx-6 my-4 text-gray-500">
        We provide the best plateform to doctors to manage their patients data
        and daily appointments
      </h1>
      <p className="flex font-semibold text-xl sm:text-2xl md:text-4xl mx-6 mt-3 mb-2 justify-center">
        Features you will get from our app
      </p>
      <p className="flex font-semibold text-xsm sm:text-sm md:text-md w-[90%] sm:w-[50%] md:w-[30%] mx-auto my-4 justify-center text-gray-500 text-center">
        We have several features that will make it easier for you to manage you
        patient records and daily practice
      </p>
      <div className="w-3/4 m-auto overflow-x-auto p-6">
        <div className="flex gap-4 items-center justify-center">
          {features.map((feature, index) => {
            return (
              <FeatureDisplayCard
                key={index}
                image={feature.imageUrl}
                title={feature.heading}
                setdisplayFeatureNo={setdisplayFeatureNo}
                id={feature.id}
                selected={displayFeatureNo===feature.id}
              />
            );
          })}
        </div>
      </div>
      <DetailedFeature
        image={features[displayFeatureNo].imageUrl}
        title={features[displayFeatureNo].heading}
        description={features[displayFeatureNo].description}
      />
    </>
  );
}
