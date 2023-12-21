"use client";

import World from "@/components/World";
import { useState } from "react";
import { ViewState } from "react-map-gl";
import { IoMdHome } from "react-icons/io";
import { cn } from "@/helpers/utils";

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
		},
	};
	const [view, setView] = useState<ViewState>(homeViewState);
	return (
		<main
			className={cn(
				"flex h-dvh flex-col items-center w-full dark:text-white text-black",
			)}
		>
			<div
				className={cn(
					"absolute w-full z-10 text-center p-2 text-xl font-bold",
				)}
			>
				vibes
			</div>
			<div className={cn("grow w-full h-0 relative")}>
				<World view={view} onMove={(e) => setView(e.viewState)} />
				<div
					className={cn(
						"absolute flex justify-between bottom-0 w-full px-8 py-4",
					)}
				>
					<div>
						{view.longitude.toPrecision(6)}, {view.latitude.toPrecision(6)} +
						{view.zoom.toPrecision(6)}
					</div>
					<button type="button" onClick={() => setView(homeViewState)}>
						<IoMdHome size={22} />
					</button>
				</div>
			</div>
		</main>
	);
}
