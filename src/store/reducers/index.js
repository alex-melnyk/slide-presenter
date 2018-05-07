import {combineReducers} from 'redux';
import app from "./appReducer";
import movies from './moviesReducer';

export default combineReducers({
    app,
    movies
});