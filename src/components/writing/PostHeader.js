import React from 'react';

import './PostHeader.scss';

export default ({children, date, title}) => {
    return (
        <div className="PostHeader">
            <h1>{title}</h1>
            <div class="post-meta">{date}</div>
            <div class="post-summary">{children}</div>
        </div>
    );
};
