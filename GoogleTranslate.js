"use client"

import React, { useEffect } from 'react';

const GoogleTranslate = () => {
  useEffect(() => {
    // Define the callback function that Google Translate will call once it's loaded.
    window.googleTranslateElementInit = () => {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en', // Set your website's default language
        },
        'google_translate_element'
      );
    };

    // Check if the script already exists to avoid adding it multiple times.
    if (!document.querySelector("script[src='//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit']")) {
      const script = document.createElement('script');
      script.src = '//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    }

    // Cleanup function to remove the script and global callback on component unmount.
    return () => {
      delete window.googleTranslateElementInit;
      const scriptElement = document.querySelector("script[src='//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit']");
      if (scriptElement) {
        document.body.removeChild(scriptElement);
      }
    };
  }, []);

  return (
    <div>
      <div id="google_translate_element" style={{ backgroundColor:'rgba(255, 255, 255, 0.7)', borderRadius:'10px', padding:'5px' }}></div>
    </div>
  );
};

export default GoogleTranslate;