import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'starworkchiangmai.com',
        pathname: '/wp-content/uploads/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
    ],
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: [
              // Scripts
              "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://translate.google.com https://translate.googleapis.com https://translate-pa.googleapis.com https://www.youtube.com https://www.youtube-nocookie.com",

              // Styles
              "style-src 'self' 'unsafe-inline' https://translate.googleapis.com https://www.gstatic.com",

              // Fonts
              "font-src 'self' https://fonts.gstatic.com",

              // Images
              "img-src 'self' data: blob: https: http:",

              // Frames
              "frame-src 'self' https://translate.google.com https://translate.googleapis.com https://www.youtube.com https://www.youtube-nocookie.com https://maps.google.com https://www.google.com",

              // Connections
              "connect-src 'self' https://translate.googleapis.com https://translate-pa.googleapis.com",
            ].join("; "),
          },
        ],
      },
    ];
  },
};

export default nextConfig;
