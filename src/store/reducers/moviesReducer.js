import {
    MOVIES_ACTION_FAILURE_NOW_PLAYING,
    MOVIES_ACTION_REQUEST_NOW_PLAYING,
    MOVIES_ACTION_SUCCESS_NOW_PLAYING
} from "../actions/moviesActions";

const initialState = {
    items: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case MOVIES_ACTION_REQUEST_NOW_PLAYING:
            return {
                ...state,
                loading: true
            };
        case MOVIES_ACTION_SUCCESS_NOW_PLAYING:
            return {
                ...state,
                loading: false,
                ...action.payload
            };
        case MOVIES_ACTION_FAILURE_NOW_PLAYING:
            return {
                ...state,
                loading: false
            };
        default:
            return state;
    }
};