"use client";
import { useEffect, useState } from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";
import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

const PdfViewer = ({ url }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // ✅ Ensure plugin is defined at the top level
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  if (!isClient) return <div>Loading...</div>;

  return (
    <div className="flex justify-center items-center w-full h-screen border rounded-lg shadow-md overflow-hidden">
      <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js">
        <Viewer
          fileUrl={url}
          plugins={[defaultLayoutPluginInstance]}
          defaultScale={0.7}
        />
      </Worker>
    </div>
  );
};

export default PdfViewer;
