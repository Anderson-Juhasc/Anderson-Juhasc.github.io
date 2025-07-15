import { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: {
    unoptimized: true, // 👈 disables built-in optimization
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
