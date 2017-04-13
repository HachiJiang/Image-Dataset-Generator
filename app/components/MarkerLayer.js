import React, { PropTypes } from 'react';

const RADIUS = 7;
const PADDING = 3;

const MarkerLayer = ({ style, onClick, markers, ratioX, ratioY }) => (
    <svg className="marker-layer"
         style={ style }
         onClick={ onClick }>
        {
            markers && markers.map(marker => (
                <g className="marker" key={ marker.name } >
                    <circle className="marker-circle"
                            r={ RADIUS }
                            cx={ marker.pos.x * ratioX  }
                            cy={ marker.pos.y * ratioY }
                        />
                    <text className="marker-label"
                          x={ marker.pos.x * ratioX + RADIUS + PADDING }
                          y={ marker.pos.y * ratioY + RADIUS }>
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
    ),
    style: PropTypes.shape({
        left: PropTypes.string.isRequired,
        top: PropTypes.string.isRequired,
        width: PropTypes.string.isRequired,
        height: PropTypes.string.isRequired
    }).isRequired,
    ratioX: PropTypes.number.isRequired,
    ratioY: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired
};

export default MarkerLayer;