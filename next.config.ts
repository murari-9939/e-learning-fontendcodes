import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  //  images: {
  //   domains: ['media.istockphoto.com'], // add the hostname here
  // },
   images: {
    domains: ['images.unsplash.com', 'media.istockphoto.com'], // add domains you want to use
  },
};


export default nextConfig;
