import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Journey Jotter",
    short_name: "Journey Jotter",
    description:
      "An AI-assisted journal app for travelers to capture their adventures.",
    start_url: "/app",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0b2643",
    icons: [
      {
        src: "/pwa/icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/pwa/icon.png",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/pwa/icon.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
