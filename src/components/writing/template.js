import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql } from 'gatsby';

import Footer from '../../footer';
import Navbar from '../../navbar';

import './writing.scss';

export default function Template({ data: { mdx } }) {
    const { body } = mdx;

    return (
        <>
            <Navbar />

            <div className="writing">
                <MDXRenderer>{body}</MDXRenderer>
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
                path
                title
            }
        }
    }
`;
