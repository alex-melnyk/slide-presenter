import {connect} from 'react-redux';

import {getNowPlaying} from "../store/actions/moviesActions";

import Main from "../components/Main";

export default connect((state) => ({
    ...state.movies
}), {
    getNowPlaying
})(Main);