import {requestNowPlaying} from "../../moviedb";

export const MOVIES_ACTION_REQUEST_NOW_PLAYING = 'MOVIES_ACTION_REQUEST_NOW_PLAYING';
export const MOVIES_ACTION_SUCCESS_NOW_PLAYING = 'MOVIES_ACTION_SUCCESS_NOW_PLAYING';
export const MOVIES_ACTION_FAILURE_NOW_PLAYING = 'MOVIES_ACTION_FAILURE_NOW_PLAYING';

function getNowPlayingSuccess(items) {
    return {
        type: MOVIES_ACTION_SUCCESS_NOW_PLAYING,
        payload: {items}
    };
}

function getNowPlayingFailure(error) {
    return {
        type: MOVIES_ACTION_FAILURE_NOW_PLAYING,
        payload: {error}
    };
}

export function getNowPlaying() {
    return (dispatch, getState) => {
        dispatch({type: MOVIES_ACTION_REQUEST_NOW_PLAYING});

        const {app} = getState();

        requestNowPlaying(app.language)
            .then((data) => dispatch(getNowPlayingSuccess(data)))
            .catch((err) => dispatch(getNowPlayingFailure(err)));
    };
}