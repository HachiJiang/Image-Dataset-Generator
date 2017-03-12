import * as LocationActionTypes from '../actiontypes/location';

const initialState = {
    imgUrl: '',
    locations: [],
    tipContent: null
};

/**
 * Check whether name is existing in the list
 * @param {Array} locations
 * @param {String} name
 * @returns {boolean}
 */
function checkExist(locations, name) {
    for (let loc of locations) {
        if (loc.name === name) {
            return true;
        }
    }
}

export default function Location(state = initialState, action = {}) {
    switch (action.type) {
        case LocationActionTypes.CHANGE_IMAGE:
            return {
                ...initialState,
                imgUrl: action.imgUrl,
                tipContent: action.imgUrl ? "New image loaded!" : "File format not supported!"
            };

        case LocationActionTypes.ADD_LOCATION:
            const { name, pos } = action;

            if (name && !checkExist(state.locations, name)) {
                return {
                    ...state,
                    locations: [
                        ...state.locations,
                        { name, pos }
                    ],
                    tipContent: `Add location ${name} with x=${pos.x} y=${pos.y}`
                };
            } else {
                return {
                    ...state,
                    tipContent: 'Invalid or dup name'
                }
            }

        case LocationActionTypes.REMOVE_LOCATION:
            const index = action.index;
            const locations = state.locations;
            const locationToRemove = locations[index];
            return {
                ...state,
                locations: [
                    ...locations.slice(0, index),
                    ...locations.slice(index + 1)
                ],
                tipContent: `${locationToRemove.name} removed!`
            };

        default:
            return state;
    }
}