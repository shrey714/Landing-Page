"use client";

import React, { useEffect, useRef } from "react";

type GoogleTranslateWindow = Window & {
  googleTranslateElementInit?: () => void;
  google?: {
    translate: {
      TranslateElement: new (
        options: { pageLanguage: string },
        elementId: string
      ) => void;
    };
  };
};

const GoogleTranslate = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const elementId = "google_translate_element";
    const scriptUrl = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    const existingScript = document.querySelector<HTMLScriptElement>(`script[src="${scriptUrl}"]`);
    const googleWindow = window as GoogleTranslateWindow;

    googleWindow.googleTranslateElementInit = () => {
      if (googleWindow.google?.translate && containerRef.current) {
        new googleWindow.google.translate.TranslateElement(
          { pageLanguage: "en" },
          elementId
        );
      }
    };

    if (!existingScript) {
      const script = document.createElement("script");
      script.src = scriptUrl;
      script.async = true;
      script.defer = true;
      containerRef.current?.appendChild(script);
    }

    return () => {
      delete googleWindow.googleTranslateElementInit;
      const scriptElement = document.querySelector<HTMLScriptElement>(`script[src="${scriptUrl}"]`);
      scriptElement?.remove();
    };
  }, []);

  return (
    <div ref={containerRef}>
      <div
        id="google_translate_element"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          borderRadius: "10px",
          padding: "5px",
        }}
      />
    </div>
  );
};

export default GoogleTranslate;
