import type { ManifestOptions } from "vite-plugin-pwa";

export const seoConfig = {
	baseURL: "https://raghuramsadineni.co",
	description:
		"Raghuram Sadineni: Personal Portfolio website",
	type: "website",
	image: {
		url: "/favicon.sv",
		alt: "Bolt@9199",
		width: 1200,
		height: 630
	},
	siteName: "Raghuram Sadineni", 

}


export const manifest: Partial<ManifestOptions> = {
	name: "Raghuram Sadineni",
	short_name: "Raghuram Sadineni",
	description: "Raghuram Sadineni: Personal Portfolio website",
	theme_color: "#9F1239", 
	background_color: "#ffffff",
	display: "minimal-ui",
	icons: [
		{
			src: "/icons/favicon-192x192.png",
			sizes: "192x192",
			type: "image/png"
		},
		{
			src: "/icons/favicon-512x512.png",
			sizes: "512x512",
			type: "image/png"
		},
		{
			src: "/favicon.svg",
			sizes: "512x512",
			type: "image/svg",
			purpose: "any maskable"
		}
	]
}
