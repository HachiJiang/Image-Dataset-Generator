import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import LocationReducer from './reducers/location';

import ImageDatasetGenerator from './containers/ImageDatasetGenerator';

import './styles/normalize.css';
import './styles/index.scss';

const store = createStore(
    LocationReducer,
    window.devToolsExtension && window.devToolsExtension()
);

render(
    <Provider store={ store }>
        <ImageDatasetGenerator />
    </Provider>,
    document.getElementById('root')
);

document.addEventListener('dragover', function (e) {
    e.preventDefault();
    return false;
}, false);

document.addEventListener('drop', function (e) {
    e.preventDefault();
    return false;
}, false);
