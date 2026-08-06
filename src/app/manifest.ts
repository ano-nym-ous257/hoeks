import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Alex Agyei — Gamefreak Developer Portfolio",
    short_name: "Gamefreak",
    description:
      "Portfolio of Alex Agyei covering IT support, cybersecurity, AWS cloud, networking and software engineering.",
    start_url: "/",
    display: "standalone",
    background_color: "#07080b",
    theme_color: "#07080b",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  };
}
