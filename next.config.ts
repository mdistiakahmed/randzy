import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-inline' 'unsafe-eval' https://pagead2.googlesyndication.com;
              img-src 'self' https://pagead2.googlesyndication.com https://www.google.com;
              frame-src 'self' https://googleads.g.doubleclick.net https://www.google.com;
              frame-ancestors 'self' https://google.com https://googleads.g.doubleclick.net;
            `.replace(/\s{2,}/g, " "), // Minify CSP string
          },
        ],
      },
    ];
  },
};

export default nextConfig;
