import React, { Component } from 'react';
import { debounce } from 'lodash';

const RESIZE_EVENTS = [
    'resize',
    'webkitfullscreenchange',
    'mozfullscreenchange',
    'fullscreenchange',
    'MSFullscreenChange'
];

class WindowResizeListener extends Component {
    constructor(props) {
        super(props);
        this.resizeHandler = this.resizeHandler.bind(this);
    }

    componentDidMount() {
        RESIZE_EVENTS.map(evt => {
            window.addEventListener(evt, this.resizeHandler);
        });
    }

    componentWillUnmount() {
        RESIZE_EVENTS.map(evt => {
            window.removeEventListener(evt, this.resizeHandler);
        });
    }

    render() {
        return null;
    }

    resizeHandler() {
        let windowWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        let windowHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;

        if (this.props.onSizeChanged) {
            let debouncedHandler = this.props.debounceTime !== 0
                ? debounce(this.props.onSizeChanged, this.props.debounceTime)
                : this.props.onSizeChanged;
            debouncedHandler({
                windowWidth: windowWidth,
                windowHeight: windowHeight
            });
        }
    }
}

const propTypes = {
    debounceTime: React.PropTypes.number,
    onSizeChanged: React.PropTypes.func.isRequired
};

const defaultProps = {
    debounceTime: 300
};

WindowResizeListener.propTypes = propTypes;
WindowResizeListener.defaultProps = defaultProps;

export default WindowResizeListener;