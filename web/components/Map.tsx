"use client"

import { Map as MapboxMap, ViewState, ViewStateChangeEvent } from "react-map-gl";
import env from "@/helpers/env";
interface MapProps {
  view: ViewState
  onMove: (evt: ViewStateChangeEvent) => void;
}

export default function Map({ view, onMove }: MapProps) {
  return <MapboxMap 
    {...view}
    onMove={onMove}
    mapboxAccessToken={env.NEXT_PUBLIC_MAPBOX_TOKEN}
    style={{ width: "100%", height: "100%" }}
    mapStyle="mapbox://styles/mapbox/streets-v9"
  />
}
