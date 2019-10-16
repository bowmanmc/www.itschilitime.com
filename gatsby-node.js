const path = require(`path`);

exports.createPages = async ({ actions, graphql }) => {
    const { createPage } = actions;
    const result = await graphql(`
        query {
            allMdx {
                edges {
                    node {
                        frontmatter {
                            path
                        }
                    }
                }
            }
        }
    `);

    if (result.errors) {
        console.error(result.errors);
    }

    result.data.allMdx.edges.forEach(({ node }) => {
        console.log(`Creating page: ${node.frontmatter.path}`);
        createPage({
            path: node.frontmatter.path,
            component: path.resolve(`src/writing/template.js`),
        });
    });
};
