import {createStore} from "redux";

import Reducers from './reducers';
import Middleware from './middleware';

export default createStore(
    Reducers,
    undefined,
    Middleware
);