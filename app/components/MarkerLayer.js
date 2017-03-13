import React, { PropTypes } from 'react';

const RADIUS = 7;
const PADDING = 3;

const MarkerLayer = props => (
    <svg className="marker-layer"
         style={ props.style }
         onClick={ props.onClick }>
        {
            props.markers.map(marker => (
                <g className="marker" key={ marker.name } >
                    <circle className="marker-circle"
                            r={ RADIUS }
                            cx={ marker.pos.screenX }
                            cy={ marker.pos.screenY }
                        />
                    <text className="marker-label"
                          x={ marker.pos.screenX + RADIUS + PADDING }
                          y={ marker.pos.screenY + RADIUS }>
                        { marker.name }
                    </text>
                </g>
            ))
        }
    </svg>
);

MarkerLayer.propTypes = {
    markers: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            pos: PropTypes.object.isRequired
        })
    ).isRequired,
    style: PropTypes.shape({
        left: PropTypes.string.isRequired,
        top: PropTypes.string.isRequired,
        width: PropTypes.string.isRequired,
        height: PropTypes.string.isRequired
    }).isRequired,
    onClick: PropTypes.func.isRequired
};

export default MarkerLayer;