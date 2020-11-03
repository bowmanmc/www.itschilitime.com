import React from 'react';

import './PostLinkCard.scss';

export default ({cover, link, title}) => {

    const cardStyles = {
        backgroundImage: `url(${cover})`,
    };

    return (
        <div className="PostLinkCard">
            <div className="PostLinkCard__cover" style={cardStyles} />
            <div className="PostLinkCard__title">
                <a href={link}>{title}</a>
            </div>
        </div>
    );
};
