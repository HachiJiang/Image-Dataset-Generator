import React from 'react';
import { render } from 'react-dom';

import ImageDatasetGenerator from './containers/ImageDatasetGenerator';

import './styles/normalize.css';
import './styles/index.css';

document.addEventListener('dragover', function (e) {
    e.preventDefault();
    return false;
}, false);

document.addEventListener('drop', function (e) {
    e.preventDefault();
    return false;
}, false);

render(
    <ImageDatasetGenerator />,
    document.getElementById('root')
);