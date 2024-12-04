"use client";
import { useState } from "react";

const PdfViewer = ({ src, zoom }) => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoad = () => {
    setIsLoading(false);
  };

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="loader">
            <div className="load-inner load-one load"></div>
            <div className="load-inner load-two"></div>
            <div className="load-inner load-three"></div>
            <span className="text">Loading...</span>
          </div>
        </div>
      )}
      <iframe
        src={`${src}`}
        onLoad={handleLoad}
        allow="autoplay"
        className={`w-[330px] h-[600px] md:w-[700px] ${
          isLoading ? "hidden" : "block"
        }`}
      ></iframe>
    </div>
  );
};

export default PdfViewer;
