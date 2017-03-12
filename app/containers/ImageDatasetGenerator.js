import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as PlayerActionCreators from '../actions/location';
import ImageViewer from '../components/ImageViewer';
import DatasetViewer from '../components/DatasetViewer';

class ImageDatasetGenerator extends Component {
    static propTypes = {
        imgUrl: PropTypes.string,
        locations: PropTypes.array.isRequired,
        tipContent: PropTypes.string
    };

    /**
     * Save dataset as local file
     */
    saveDataset() {
        const locations = this.props.locations;
        let tipContent = '';
        if (locations.length > 0) {
            // @TODO: hack, global event
            window.saveDataset(locations);
            tipContent = 'Save dataset successfully!';
        } else {
            tipContent = 'Warning: Empty dataset!';
        }
        this.setState({ tipContent });
    }

    render() {
        const { dispatch, imgUrl, locations, tipContent } = this.props;
        const addLocation = bindActionCreators(PlayerActionCreators.addLocation, dispatch);
        const removeLocation = bindActionCreators(PlayerActionCreators.removeLocation, dispatch);
        const changeImage = bindActionCreators(PlayerActionCreators.changeImage, dispatch);

        return (
            <div className="image-dataset-generator">
                <ImageViewer url={ imgUrl }
                             tipContent={ tipContent }
                             locations={ locations }
                             changeImage={ changeImage }
                             addLocation={ addLocation }
                    />
                <DatasetViewer locations={ locations }
                               saveDataset={ this.saveDataset.bind(this) }
                               removeLocation={ removeLocation }
                    />
            </div>
        );
    }
}

const mapStateToProps = state => (
    {
        imgUrl: state.imgUrl,
        locations: state.locations,
        tipContent: state.tipContent
    }
);

export default connect(mapStateToProps)(ImageDatasetGenerator);