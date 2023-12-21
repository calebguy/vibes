"use client";

import React, { PropsWithChildren } from "react";
import { useEffect, useState } from "react";

export enum ColorMode {
	Light = "light",
	Dark = "dark",
}

const ColorModeContext = React.createContext(ColorMode.Light);
export const useColorMode = () => React.useContext(ColorModeContext);
export const ColorModePrivider: React.FC<PropsWithChildren> = ({
	children,
}) => {
	const [colorMode, setColorMode] = useState(ColorMode.Light);
	useEffect(() => {
		const { addEventListener, matches: isDark } = window.matchMedia(
			"(prefers-color-scheme: dark)",
		);
		if (isDark) {
			setColorMode(ColorMode.Dark);
		}
		addEventListener("change", ({ matches }) => {
			setColorMode(matches ? ColorMode.Dark : ColorMode.Light);
		});
	}, []);

	return (
		<ColorModeContext.Provider value={colorMode}>
			{children}
		</ColorModeContext.Provider>
	);
};
