import React from 'react';


const Playlists = ({appleUrl}) => {
    return (
        <div className="Playlists">
            <iframe
                className="Playlists__playlist"
                allow="autoplay *; encrypted-media *; fullscreen *"
                frameBorder="0"
                height="450"
                style={{
                    width:'100%',
                    maxWidth:'660px',
                    overflow:'hidden',
                    background:'transparent'
                }}
                sandbox="allow-forms allow-popups allow-same-origin allow-scripts allow-storage-access-by-user-activation allow-top-navigation-by-user-activation"
                src={appleUrl}
            />
        </div>
    );
};

export default Playlists;
