import React, { Component, PropTypes } from 'react';

import MarkerLayer from './MarkerLayer';

export default class ImageViewer extends Component {
    static propTypes = {
        url: PropTypes.string.isRequired,
        tipContent: PropTypes.string,
        onDropHandler: PropTypes.func.isRequired,
        onClickHandler: PropTypes.func.isRequired,
        markers: PropTypes.array
    };

    _onClick(e, callback) {
        e.preventDefault();

        const img = this.refs.imgDom;
        const { left, top } = img.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;

        callback({
            screenX: e.clientX, // refer to window top left corner
            screenY: e.clientY,
            x: parseInt(x * img.naturalWidth / img.width),
            y: parseInt(y * img.naturalHeight / img.height)
        });
    }

    render() {
        const { url, onDropHandler, onClickHandler, markers, tipContent } = this.props;
        const imgDom = this.refs.imgDom;
        const imgRect = imgDom && imgDom.getBoundingClientRect();

        return (
            <div className="image-viewer col"
                 onDrop={ onDropHandler } >
                <img src={ url }
                     alt="Drag image here!"
                     onClick={ url && (e => this._onClick(e, onClickHandler)) }
                     ref="imgDom"
                    />
                {
                    markers && imgRect &&
                    <MarkerLayer markers={ markers }
                                 onClick={ url && (e => this._onClick(e, onClickHandler)) }
                                 styles={ imgRect }
                        />
                }
                <div className="tips">{ tipContent }</div>
            </div>
        );
    }
}