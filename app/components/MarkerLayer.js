import React, { PropTypes } from 'react';

const RADIUS = 7;

const MarkerLayer = props => (
    <svg className="marker-layer"
         style={ {
            left: props.styles.left + "px",
            top: props.styles.top + "px",
            width: props.styles.width + "px",
            height: props.styles.height + "px"
         } }
         onClick={ props.onClick }>
        {
            props.markers.map(marker => (
                <g className="marker" key={ marker.name } >
                    <circle className="marker-circle"
                            r={ RADIUS }
                            cx={ marker.pos.x * props.styles.width / props.styles.naturalWidth - props.styles.left }
                            cy={ marker.pos.y * props.styles.height / props.styles.naturalHeight - props.styles.top }
                        />
                    <span className="marker-label">{ marker.name }</span>
                </g>
            ))
        }
    </svg>
);

MarkerLayer.propTypes = {
    markers: PropTypes.array.isRequired,
    styles: PropTypes.shape({
        left: PropTypes.number.isRequired,
        top: PropTypes.number.isRequired,
        width: PropTypes.number.isRequired,
        height: PropTypes.number.isRequired,
        naturalWidth: PropTypes.number.isRequired,
        naturalHeight: PropTypes.number.isRequired
    }).isRequired,
    onClick: PropTypes.func.isRequired
};

export default MarkerLayer;