import React from 'react';
import Link from 'next/link';

const PostLinkCard = ({cover, link, title}) => {

    const cardStyles = {
        backgroundImage: `url(${cover})`,
    };

    return (
        <div className="PostLinkCard">
            <div className="PostLinkCard__cover" style={cardStyles} />
            <div className="PostLinkCard__title">
                <Link href={link}>{title}</Link>
            </div>
        </div>
    );
};

export default PostLinkCard;
