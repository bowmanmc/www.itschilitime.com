function importAll(files) {

    const results = files.keys().map(fileName => {
        const link = fileName.replace('\.', '/writing').replace('\.mdx', '');
        return {
            link,
            ...files(fileName).meta
        };
    }).sort((post1, post2) => {
        // sort in descending order (newest to oldest)
        return post1.date > post2.date ? '-1' : '1';
    });

    return results;
};

export const posts = importAll(require.context("../pages/writing/", true, /\.mdx$/));

// export function getAllPosts() {
//     const posts = getPostFiles();
//     const results = posts.map(post => readPostFile(post))
//         // sort posts by date in descending order
//         .sort((post1, post2) => (post1.date > post2.date ? '-1' : '1'));
//     return results;
// };
