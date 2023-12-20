"use client"

import { Map as MapboxMap } from "react-map-gl";
import env from "@/helpers/env";

export default function Map() {
  return <MapboxMap 
    mapboxAccessToken={env.NEXT_PUBLIC_MAPBOX_TOKEN}
    style={{ width: "100%", height: "100%" }}
    mapStyle="mapbox://styles/mapbox/streets-v9"
  />
}
