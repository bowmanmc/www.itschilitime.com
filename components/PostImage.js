import React from 'react';


const PostImage = props => {
    const { caption, src, title } = props;

    return (
        <div className="PostImage">
            <img src={src} alt={title} />
            <span>{caption}</span>
        </div>
    );
};

export default PostImage;
