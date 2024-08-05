"use client";
import React, { useState } from "react";
const ContactUsForm = () => {
  const [loading, setLoading] = useState(true);

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <>
      {loading && (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            padding: "50px 0 50px 0",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <span className="loading loading-spinner"></span>
        </div>
      )}
      <div style={{ position: "relative", minHeight: "100vh" }}>
        <iframe
          aria-label="Contact Us"
          frameBorder="0"
          style={{ width: "100%", border: "none", minHeight: "100vh" }}
          scrolling="no"
          src="https://forms.zohopublic.in/dardibook/form/ContactUs/formperma/1lNqF48RvRdXaE0Zoq_ICd6DQM9WWESKwRcH28vYHwI"
          onLoad={handleLoad}
        ></iframe>
      </div>
    </>
  );
};

export default ContactUsForm;
