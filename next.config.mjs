import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Configure `pageExtensions` to include markdown and MDX files
  pageExtensions: ['js', 'jsx', 'md', 'mdx', 'ts', 'tsx'],

  reactCompiler: true,
};

const withMDX = createMDX({
  extension: /\.(md|mdx)$/,
});
 
export default withMDX(nextConfig);
