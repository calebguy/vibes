"use client"

import { Map as MapboxMap } from "react-map-gl";
import env from "@/helpers/env";
import { useState } from "react";

export default function Map() {
  const [viewState, setViewState] = useState({
    longitude: -97.7041992,
    latitude: 30.2796329,
    zoom: 10
  });

  return <div className="w-full h-full">
    <div className="w-full h-full">
      <MapboxMap 
        {...viewState}
        onMove={evt => setViewState(evt.viewState)}
        mapboxAccessToken={env.NEXT_PUBLIC_MAPBOX_TOKEN}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      />
    </div>  
    <div className="break-words break-all">
      <div>
        lat: {viewState.latitude}
      </div>
      <div>
        long: {viewState.longitude}
      </div>
      <div>
        zoom: {viewState.zoom}
      </div>
    </div>
  </div>
}
