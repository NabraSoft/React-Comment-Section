import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./src/components/**/*.{js,ts,jsx,tsx,mdx}"],
	theme: {
		extend: {
			colors: {
				/* Primary */
				primary: "#0060AB",
				onPrimary: "#ffffff",
				primaryContainer: "#D3E3FF",
				onPrimaryContainer: "#001C39",

				/* Secondary */
				secondary: "#006398",
				onSecondary: "#ffffff",
				secondaryContainer: "#CDE5FF",
				onSecondaryContainer: "#001D31",

				/* Tertiary */
				tertiary: "#705D00",
				onTertiary: "#FFFFFF",
				tertiaryContainer: "#FFE171",
				onTertiaryContainer: "#221B00",
				tertiaryFixed: "#FFE171",
				tertiaryFixedDim: "#E4C54A",
				tertiaryFixedM: "#FFF0C4",

				/* Error */
				error: "#BA1A1A",
				onError: "#ffffff",
				errorContainer: "#FFDAD6",
				onErrorContainer: "#410002",

				/* Background */
				background: "#FAFDFD",
				onBackground: "#191C1D",
				surface: "#F8FAFA",
				onSurface: "#191C1D",
				outline: "#73777F",
				surfaceVariant: "#DFE2EB",
				onSurfaceVariant: "#43474E",
				primary10: "#001C39",
				primary16: "#00142B",

				// Other colors
				neutral99: "#FAFDFD",
			},
		},
	},
	plugins: [],
};
export default config;
