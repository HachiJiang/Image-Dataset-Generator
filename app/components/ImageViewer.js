import React, { Component, PropTypes } from 'react';

import AddLocationForm from '../components/AddLocationForm';
import MarkerLayer from './MarkerLayer';

const IMAGE_FORMAT = ['.jpg', '.jpeg', '.bmp', '.png', '.gif'];

/**
 * Callback for drop image
 * @param {Event} e
 * @param {Function} callback
 */
function onDropHandler(e, callback) {
    let imgUrl = '';
    e.preventDefault();
    for (let f of e.dataTransfer.files) {
        console.log('File(s) you dragged here: ', f.path);
        if (IMAGE_FORMAT.some(format => f.path.endsWith(format))) {
            imgUrl = f.path;
            break;
        }
    }
    callback(imgUrl);
}

export default class ImageViewer extends Component {
    static propTypes = {
        url: PropTypes.string.isRequired,
        tipContent: PropTypes.string,
        changeImage: PropTypes.func.isRequired,
        addLocation: PropTypes.func.isRequired,
        locations: PropTypes.array
    };

    state = { formPos: null }; // internal state

    _onClick(e) {
        e.preventDefault();

        const img = this.refs.imgDom;
        const { left, top } = img.getBoundingClientRect();
        const screenX = e.clientX - left; // refer to the top left corner of image container
        const screenY = e.clientY - top;

        this.setState({
            formPos: {
                screenX: screenX, // refer to window top left corner
                screenY: screenY,
                x: parseInt(screenX * img.naturalWidth / img.width),
                y: parseInt(screenY * img.naturalHeight / img.height)
            }
        });
    }

    _addLocation(name, pos) {
        this.setState({ formPos: null });
        this.props.addLocation(name, pos);
    }

    render() {
        const { url, changeImage, locations, tipContent } = this.props;
        const formPos = this.state.formPos;
        const imgDom = this.refs.imgDom;
        let imgRect = imgDom && imgDom.getBoundingClientRect();

        return (
            <div className="image-viewer col"
                 onDrop={ e => onDropHandler(e, changeImage) } >
                <img src={ url }
                     alt="Drag image here!"
                     ref="imgDom"
                    />
                {
                    imgRect &&
                    <MarkerLayer style={ {
                                    left: '0',
                                    top: '0',
                                    width: imgRect.width + 'px',
                                    height: imgRect.height + 'px'
                                 } }
                                 markers={ locations }
                                 onClick={ e => this._onClick(e) }
                        />
                }
                <div className="tips">{ tipContent }</div>
                {
                    url && formPos &&
                    <AddLocationForm pos={ formPos }
                                     addLocation={ (name, pos) => this._addLocation(name, pos) }
                        />
                }
            </div>
        );
    }
}