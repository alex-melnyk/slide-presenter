import {DangerZone} from 'expo';

export const SETTINGS_ACTION_LOCALE_LANGUAGE_LOADED = 'SETTINGS_ACTION_LOCALE_LANGUAGE_LOADED';

function localeLanguageLoaded(language) {
    return {
        type: SETTINGS_ACTION_LOCALE_LANGUAGE_LOADED,
        payload: {language}
    }
}

export function loadLocaleLanguage() {
    return (dispatch) => {
        DangerZone.Localization
            .getCurrentLocaleAsync()
            .then((locale) => {
                const lang = locale.substring(0,2);
                dispatch(localeLanguageLoaded(lang));
            });
    };
}