import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql } from 'gatsby';

import Footer from '../footer';
import Navbar from '../navbar';

export default function Template({ data: { mdx } }) {
    const { frontmatter, body } = mdx;

    return (
        <>
            <Navbar />

            <div className="post">
                <h1>{frontmatter.title}</h1>
                <MDXRenderer>{ body }</MDXRenderer>
            </div>

            <Footer />
        </>
    );
};

export const pageQuery = graphql`
    query($path: String!) {
        mdx(frontmatter: {path: {eq: $path}}) {
            id
            body
            frontmatter {
                date(formatString: "MMMM DD, YYYY")
                path
                title
            }
        }
    }
`;
