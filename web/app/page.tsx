"use client"

import Map from "@/components/Map";
import { useState } from "react";
import { ViewState } from "react-map-gl";
import { IoMdHome } from "react-icons/io"

export default function Home() {
  const homeViewState: ViewState = {
    latitude: 30.270355829248036,
    longitude: -97.74967191595249,
    zoom: 20,
    bearing: 0,
    pitch: 0,
    padding: {
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
    }
  }
  const [view, setView] = useState<ViewState>(homeViewState);
  return (
    <main className="flex min-h-screen flex-col items-center w-full">
      <div className="absolute w-full text-black z-10 text-center p-2 text-xl font-bold">
        vibes
      </div>
      <div className="grow w-full h-0 relative">
        <Map view={view} onMove={(e) => setView(e.viewState)}/>
        <div className="absolute flex justify-between bottom-0 w-full px-8 py-4 text-black">
          <div>{view.longitude.toPrecision(6)}, {view.latitude.toPrecision(6)} +{view.zoom.toPrecision(6)}</div>
          <button onClick={() => setView(homeViewState)}>
            <IoMdHome size={22}/>
          </button>
        </div>
      </div>
    </main>
  )
}
