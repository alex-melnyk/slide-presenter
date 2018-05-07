import * as AppActions from "../actions/appActions";

const initialState = {
    language: undefined,
    settingsLoaded: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case AppActions.APP_ACTION_LOCALE_LANGUAGE_LOADED:
            return {
                ...state,
                ...action.payload,
                settingsLoaded: true
            };
        default:
            return state;
    }
};