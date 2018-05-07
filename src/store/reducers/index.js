import {combineReducers} from 'redux';
import movies from './moviesReducer';
import settings from "./settingsReducer";

export default combineReducers({
    movies,
    settings
});