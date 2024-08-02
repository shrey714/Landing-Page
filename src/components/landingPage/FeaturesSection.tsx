import React from "react";
import { Stethoscope, FileText, UserCheck, Gauge } from "lucide-react";

const FeaturesSection = () => {
  return (
    <section className="pb-2 pt-4 md:pt-12">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-0 max-w-xl text-center">
              <h2 className="mb-2 text-2xl font-bold leading-[1.2] md:text-3xl text-gray-700">
                What We Offer
              </h2>
              <p className="text-sm text-body-color text-gray-500 font-medium">
                DardiBook provides a comprehensive suite of tools designed to
                streamline your healthcare management experience.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap mt-4 md:mt-12">
          <ServiceCard
            title="Streamlined Appointments"
            details="Easily manage your appointments with intuitive scheduling, reminders, and tracking features."
            icon={<Stethoscope size={30} />}
          />
          <ServiceCard
            title="Digital Prescriptions"
            details="Generate and manage prescriptions digitally, with easy access for both doctors and patients."
            icon={<FileText size={30} />}
          />
          <ServiceCard
            title="Patient Management"
            details="Keep track of patient history, treatment plans, and referrals in one organized system."
            icon={<UserCheck size={30} />}
          />
          <ServiceCard
            title="Optimized Performance"
            details="Experience fast, reliable performance with our optimized, lightweight platform."
            icon={<Gauge size={30} />}
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;

const ServiceCard = ({ icon, title, details }: any) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/4">
      <div className="rounded-[20px] p-5 md:px-7 xl:px-10">
        <div className="mb-5 flex h-[50px] w-[50px] items-center justify-center rounded-md bg-gray-300 text-[#1F2B5B]">
          {icon}
        </div>
        <h4 className="mb-[12px] text-xl font-semibold text-dark text-gray-700">
          {title}
        </h4>
        <p className="text-base text-gray-500">{details}</p>
      </div>
    </div>
  );
};
