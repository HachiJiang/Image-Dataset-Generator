import React, { PropTypes } from 'react';

const Location = props => (
    <div className="location">
        <div className="location-info">
            <a className="remove-location"
               onClick={() => props.removeLocation(props.index)}>
                ✖
            </a>
            {props.name}
        </div>
        <div className="location-info location-x">{props.x}</div>
        <div className="location-info location-y">{props.y}</div>
    </div>
);

Location.propTypes = {
    name: PropTypes.string.isRequired,
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired
};

export default Location;