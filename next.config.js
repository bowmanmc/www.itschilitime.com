const withMDX = require("@next/mdx")({
    extension: /\.mdx?$/
});

// module.exports = withMDX({
//     pageExtensions: ["js", "jsx", "md", "mdx"]
// });

const mdxOpts = withMDX({
    pageExtensions: ['js', 'jsx', 'md', 'mdx']
});

module.exports = {
    ...mdxOpts,
    trailingSlash: true,
};
