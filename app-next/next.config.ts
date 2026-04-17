import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/index.html", destination: "/", permanent: true },
      { source: "/pages/about.html", destination: "/about", permanent: true },
      { source: "/pages/project.html", destination: "/projects", permanent: true },
      { source: "/pages/contact.html", destination: "/contact", permanent: true },
      { source: "/proyect_description/scholeia.html", destination: "/projects/scholeia", permanent: true },
      { source: "/proyect_description/hitmeup.html", destination: "/projects/hitmeup", permanent: true },
      { source: "/proyect_description/foundme.html", destination: "/projects/foundme", permanent: true },
    ];
  },
};

export default nextConfig;
