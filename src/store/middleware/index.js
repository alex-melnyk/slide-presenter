import {applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import ReduxLogger from 'redux-logger';

const middleware = [
    ReduxThunk
];

if (process.env !== 'production') {
    middleware.push(ReduxLogger);
}

export default applyMiddleware(...middleware);