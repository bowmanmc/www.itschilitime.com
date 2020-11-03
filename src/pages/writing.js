import React from 'react';
import { graphql } from 'gatsby';

import Footer from '../footer';
import Navbar from '../navbar';
import PostLinkCard from '../components/writing/PostLinkCard';

import '../components/writing/writing.scss';


export default ({ data }) => {
    const { edges } = data.allMdx;
    return (
        <>
            <Navbar />
            <div className="writing">
                {
                    edges.map(edge => {
                        const post = edge.node;
                        return (
                            <PostLinkCard
                                link={post.frontmatter.path}
                                title={post.frontmatter.title}
                                cover={post.frontmatter.cover}
                            />
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
                        path
                        cover
                    }
                }
            }
        }
    }
`;
