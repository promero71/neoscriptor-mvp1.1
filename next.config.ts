import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Server Components está activado por defecto (no necesitas declararlo)
  
  experimental: {
    // Si usas otras funciones experimentales, ponlas aquí
    // Ejemplo: reactCompiler: true, (si estás usando React 19)
  },

  images: {
    domains: [
      "firebasestorage.googleapis.com",
      "localhost",
      "127.0.0.1"
    ],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "firebasestorage.googleapis.com",
        pathname: "/**",
      },
    ],
  },

  reactStrictMode: true,

  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = [...(config.externals || []), "twick", "tiptap"];
    }

    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};

export default nextConfig;
