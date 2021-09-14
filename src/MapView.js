import React, { useRef, useEffect } from "react";
import { Map } from "@esri/react-arcgis";

export const MapView = () => {
  const mapRef = useRef();
  useEffect(() => {
    // create map and view
    const view = {};
    // clean up
    return () => {
      // view && view.destroy();
    };
  }, []);
  return <Map />;
};
