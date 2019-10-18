import React from 'react';
import { graphql } from 'gatsby';

import Footer from '../footer';
import Navbar from '../navbar';

export default ({ data }) => {
    const { edges } = data.allMdx;
    return (
        <>
            <Navbar />
            <div className="posts">
            {
                edges.map(edge => {
                    const post = edge.node;
                    return (
                        <div className="post" key={post.frontmatter.path}>
                            {post.frontmatter.title}
                        </div>
                    );
                })
            }
            </div>
            <Footer />
        </>
    );
};

export const pageQuery = graphql`
    query IndexQuery {
        allMdx {
            edges {
                node {
                    frontmatter {
                        title
                        date
                        path
                    }
                }
            }
        }
    }
`;
