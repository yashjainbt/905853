const withMDX = require('@next/mdx')({
  extension: /\.(md|mdx)$/
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
};

module.exports = withMDX(nextConfig);
