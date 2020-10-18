import React from 'react';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import { graphql } from 'gatsby';

import Footer from '../../footer';
import Navbar from '../../navbar';

import './PostTemplate.scss';

export default function Template({ data: { mdx } }) {
    const { body } = mdx;

    return (
        <>
            <Navbar />

            <div className="Post">
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
