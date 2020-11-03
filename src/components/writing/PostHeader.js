import React from 'react';

import './PostHeader.scss';

export default ({date, title}) => {
    return (
        <div className="PostHeader">
            <h1>{title}</h1>
            <div class="PostHeader__date">{date}</div>
        </div>
    );
};
