import React, { Component } from 'react';
import ImageViewer from '../components/ImageViewer';
import DatasetViewer from '../components/DatasetViewer';
import AddLocationForm from '../components/AddLocationForm';

const IMAGE_FORMAT = ['.jpg', '.jpeg', '.bmp', '.png', '.gif'];

class ImageDatasetGenerator extends Component {
    nameSet = new Set(); // cache names to check dup

    constructor(props) {
        super(props);

        this.state = {
            imgUrl: '',
            locations: [],
            posToAdd: null, // location position that user click to add
            tipContent: null
        };
    }

    /**
     * Callback for drop image
     * @param e
     */
    onImageDrop(e) {
        let imgUrl = '';
        e.preventDefault();
        for (let f of e.dataTransfer.files) {
            console.log('File(s) you dragged here: ', f.path);
            if (IMAGE_FORMAT.some(format => f.path.endsWith(format))) {
                imgUrl = f.path;
                break;
            }
        }
        let tipContent = imgUrl ? "New image loaded!" : "File format not supported!";
        this.setState({
            imgUrl,
            locations: [],
            tipContent
        });
        this.nameSet = new Set();
    }

    /**
     * Callback for click image
     * @param {Object} posToAdd: { screenX, screenY, x, y }
     */
    onImageClick(posToAdd) {
        if (this.state.imgUrl && posToAdd && posToAdd.x !== undefined && posToAdd.y !== undefined) {
            this.setState({ posToAdd });
        }
    }

    /**
     * Add location with input name
     * @param {String} name
     */
    addLocation(name) {
        let newLocation = this.state.posToAdd;
        newLocation.name = name;

        if (name && !this.nameSet.has(name)) {
            this.setState({
                posToAdd: null,
                locations: [...this.state.locations, newLocation],
                tipContent: `Add location ${name} with x=${newLocation.x} y=${newLocation.y}`
            });
            this.nameSet.add(name);
        } else {
            this.setState({
                tipContent: 'Invalid or dup name'
            });
        }
    }

    /**
     * Remove location with input index
     * @param {number} index
     */
    removeLocation(index) {
        let locations = this.state.locations;
        const locationToRemove = locations[index];
        locations.splice(index, 1);
        this.setState({
            locations,
            tipContent: `${locationToRemove.name} removed!`
        });
    }

    /**
     * Save dataset as local file
     */
    saveDataset() {
        const { locations } = this.state;
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
        const { imgUrl, locations, posToAdd, tipContent } = this.state;
        return (
            <div className="image-dataset-generator">
                <ImageViewer url={ imgUrl }
                             tipContent={ tipContent }
                             markers={ locations }
                             onDropHandler={ this.onImageDrop.bind(this) }
                             onClickHandler={ this.onImageClick.bind(this) }
                    />
                <DatasetViewer locations={ locations }
                               saveDataset={ this.saveDataset.bind(this) }
                               removeLocation={ this.removeLocation.bind(this) }
                    />
                {
                    posToAdd &&
                    <AddLocationForm pos={ { x: posToAdd.screenX, y: posToAdd.screenY } }
                                     addLocation={ this.addLocation.bind(this) }
                        />
                }
            </div>
        );
    }
}

export default ImageDatasetGenerator;