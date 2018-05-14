import {ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE} from './../actions/actionTypes'

const initialState = {
    places: [],
    selectedPlace: null
};

// set state to initialState if state is not defined
const reducer = (state = initialState, action) => {
    switch (action.type) {
    case ADD_PLACE:
        return {
        ...state,
        places: state.places.concat({
            key: Math.random(),
            name: action.placeName,
            image: {
            uri:
                "https://cdn.dribbble.com/users/1666570/screenshots/4584965/motherhood_dribbble.jpg"
            }
        })
        };
    case DELETE_PLACE:
        return {
        ...state,
        places: state.places.filter(place => {
            return place.key !== state.selectedPlace.key;
        }),
        selectedPlace: null
        };
    case SELECT_PLACE:
        return {
        ...state,
        selectedPlace: state.places.find(place => {
            return place.key === action.placeKey;
        })
        };
    case DESELECT_PLACE:
        return {
        ...state,
        selectedPlace: null
        };
    default:
        return state;
    }
};

export default reducer;
