import * as SettingsActions from "../actions/settingsActions";

const initialState = {
    language: undefined,
    loaded: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SettingsActions.SETTINGS_ACTION_LOCALE_LANGUAGE_LOADED:
            return {
                ...state,
                ...action.payload,
                loaded: true
            };
        default:
            return state;
    }
};