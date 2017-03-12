import * as LocationActionTypes from '../actiontypes/location';

export const changeImage = imgUrl => {
    return {
        type: LocationActionTypes.CHANGE_IMAGE,
        imgUrl
    };
};

export const addLocation = (name, pos) => {
    return {
        type: LocationActionTypes.ADD_LOCATION,
        name,
        pos
    };
};

export const removeLocation = (index) => {
    return {
        type: LocationActionTypes.REMOVE_LOCATION,
        index
    };
};