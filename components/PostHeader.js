import React from 'react';
import * as dayjs from 'dayjs';


const PostHeader = ({date, title}) => {
    const d = dayjs(date).format('MMMM, YYYY');
    return (
        <div className="PostHeader">
            <h1>{title}</h1>
            <div className="PostHeader__date">{d}</div>
        </div>
    );
};

export default PostHeader;
