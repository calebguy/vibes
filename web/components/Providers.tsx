import { ColorModePrivider } from "@/hooks/useColorMode";

export default function Providers({ children }: { children: React.ReactNode }) {
	return <ColorModePrivider>{children}</ColorModePrivider>;
}
