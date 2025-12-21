import type { NextConfig } from "next";
import remarkGfm from "remark-gfm";
import createMDX from "@next/mdx";
import rehypePrettyCode from "rehype-pretty-code";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [
      // With options
      ["remark-gfm"],
    ],
    rehypePlugins: [
      // With options
      ["rehype-pretty-code", { theme: "one-dark-pro" }  ],
    ],
  },
});

export default withMDX(nextConfig);
