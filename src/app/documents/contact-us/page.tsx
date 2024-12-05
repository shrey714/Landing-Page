// dashboard/contact-us.js
import React from "react";
import contactUs from "./contactUs.json";
import ContactForm from "@/components/ContactForm.js";
export default function ContactUs() {
  return (
    <div className="flex-1 flex items-center justify-center">
      <div className="max-w-4xl w-full pb-12 px-4 rounded text-gray-800">
        <h1 className="text-3xl font-bold mb-8 text-center">
          {contactUs.contactInfo.title}
        </h1>
        <div
          className="p-6 rounded-lg shadow-[0px_0px_0px_1px_#a0aec0] bg-white"
          style={{ overflowY: "auto" }}
        >
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">
              {contactUs.contactInfo.emailUs.title}
            </h2>
            <p>
              Email:{" "}
              <a
                href={`mailto:${contactUs.contactInfo.emailUs.emailAddress}`}
                className="text-blue-600 hover:underline"
              >
                {contactUs.contactInfo.emailUs.emailAddress}
              </a>
            </p>
            <p>{contactUs.contactInfo.emailUs.instructions}</p>
          </div>
        </div>
        <div
          className="rounded-lg shadow-[0px_0px_0px_1px_#a0aec0] bg-white mt-3"
          style={{ overflowY: "auto" }}
        >
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
