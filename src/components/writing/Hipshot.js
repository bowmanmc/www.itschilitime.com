import React from 'react';

import './Hipshot.scss';

export default(props) => {

    return (
        <div className="Hipshot">
            <img src={props.image} alt={props.title} />
            <dl className="Hipshot__info">
                <dt>Camera </dt>
                <dd>{props.camera}</dd>

                <dt>Lens</dt>
                <dd>{props.lens}</dd>

                <dt>Speed</dt>
                <dd>{props.speed}</dd>

                <dt>Aperture</dt>
                <dd>ƒ/{props.aperture}</dd>

                <dt>ISO</dt>
                <dd>{props.iso}</dd>

                <dt>Time</dt>
                <dd>{props.time}</dd>
            </dl>
        </div>
    );
};
