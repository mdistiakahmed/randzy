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
              script-src 'self' 'unsafe-inline' 'unsafe-eval' https://pagead2.googlesyndication.com https://www.googletagmanager.com https://www.google-analytics.com https://*.google.com https://*.adtrafficquality.google;
              img-src 'self' https://pagead2.googlesyndication.com https://www.google.com https://*.google.com https://*.adtrafficquality.google;
              frame-src 'self' https://googleads.g.doubleclick.net https://www.google.com https://*.google.com https://*.adtrafficquality.google;
              style-src 'self' 'unsafe-inline';
              connect-src 'self' https://www.google-analytics.com https://www.googletagmanager.com https://*.google.com https://*.adtrafficquality.google;
              frame-ancestors 'self' https://google.com https://googleads.g.doubleclick.net https://*.google.com https://*.adtrafficquality.google;
            `.replace(/\s{2,}/g, " "), // Minify CSP string
          },
        ],
      },
    ];
  },
};

export default nextConfig;
