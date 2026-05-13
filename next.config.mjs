/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["admin.effortlessevents.in"],
  },

  async redirects() {
    return [
      {
        source: "/:path*",
        has: [
          {
            type: "host",
            value: "effortlessevents.in",
          },
        ],
        destination: "https://www.effortlessevents.in/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
