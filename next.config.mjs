// import { redirect } from "next/navigation";

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/en-ca",
        destination: "/en-ca/home",
        permanent: true,
      },
      {
        source: "/fr-ca",
        destination: "/fr-ca/acceuil",
        permanent: true,
      },
    ];
  },

};

export default nextConfig;
