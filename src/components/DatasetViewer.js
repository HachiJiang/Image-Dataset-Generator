import React, { PropTypes } from 'react';

import Location from './Location';

const HEADERS = ['Location', 'X', 'Y']; // @TODO: display header

const DatasetViewer = function(props) {
    const locations = props.locations;

    return (
        <div className="dataset-container col">
            <div className="dataset-table">
                {
                    locations.length < 1 ?
                    <div>No locations added.</div> :
                    locations.map((location, index) => (
                        <Location
                            key={ location.name }
                            index={ index }
                            name={ location.name }
                            x={ location.x }
                            y={ location.y }
                            removeLocation={ index => props.removeLocation(index) }
                            />
                    ))
                }
            </div>
            <button className="saveBtn" onClick={ props.saveDataset }>Export Dataset</button>
        </div>
    );
};

DatasetViewer.propTypes = {
    locations: PropTypes.array.isRequired,
    saveDataset: PropTypes.func.isRequired,
    removeLocation: PropTypes.func.isRequired
};

export default DatasetViewer;