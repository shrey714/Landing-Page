"use client";
import React, { useEffect, useRef } from "react";

const ContactUsForm = () => {
  const iframeRef = useRef(null);

  const resizeIframe = () => {
    const iframe = iframeRef.current;
    if (iframe) {
      console.log("height===", iframe.contentWindow.document.body.scrollHeight);
      iframe.style.height =
        iframe.contentWindow.document.body.scrollHeight + "px";
    }
  };

  useEffect(() => {
    const iframe = iframeRef.current;
    if (iframe) {
      iframe.addEventListener("load", resizeIframe);
      console.log("usefeffeffe")
      // Cleanup the event listener on unmount
      return () => {
        iframe.removeEventListener("load", resizeIframe);
      };
    }
  }, []);

  return (
    <iframe
      ref={iframeRef}
      aria-label="Contact Us"
      frameBorder="0"
      style={{ width: "100%", border: "none", minHeight: "100vh" }}
      scrolling="no"
      src="https://forms.zohopublic.in/dardibook/form/ContactUs/formperma/1lNqF48RvRdXaE0Zoq_ICd6DQM9WWESKwRcH28vYHwI"
    ></iframe>
  );
};

export default ContactUsForm;
