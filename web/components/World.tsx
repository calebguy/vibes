"use client";

import {
	Map,
	ViewState,
	ViewStateChangeEvent,
} from "react-map-gl";
import env from "@/helpers/env";
import { ColorMode, useColorMode } from "@/hooks/useColorMode";
interface MapProps {
	view: ViewState;
	onMove: (evt: ViewStateChangeEvent) => void;
}

const darkStyle = "mapbox://styles/mapbox/navigation-night-v1";
const lightStyle = "mapbox://styles/mapbox/streets-v9";

export default function World({ view, onMove }: MapProps) {
	const colorMode = useColorMode();
	return (
		<Map
			{...view}
			onMove={onMove}
			mapboxAccessToken={env.NEXT_PUBLIC_MAPBOX_TOKEN}
			style={{ width: "100%", height: "100%" }}
			mapStyle={colorMode === ColorMode.Light ? lightStyle : darkStyle}
		/>
	);
}
